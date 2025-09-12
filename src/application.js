import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSize } from 'react-sizeme';
import ActionCable from 'actioncable';
import { applyTheme } from '../utils/applyTheme';
import { history } from '../store/configureStore';

// Actions
import { logout } from '../sessions/actions/session';
import { markNotificationAsSeen, userNotificationAdd } from '../notifications/actions/notifications';

// Styles
import '../stylesheets/application.scss'; // Use SCSS

// Components
import { Header } from '../components/header/header/header';
import { ErrorBoundary } from '../components/shared/error-boundary/error-boundary';

class Application extends Component {
  static propTypes = {
    session: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    notifications: PropTypes.object,
    size: PropTypes.shape({
      width: PropTypes.number,
    }),
  };

  componentDidMount() {
    applyTheme();
    const { isAuthenticated, userNotificationAdd } = this.props;

    if (isAuthenticated) {
      if (!window.cable) {
        window.cable = ActionCable.createConsumer('/cable'); // Adjust URL
      }
      window.cable.subscriptions.create('NotificationsChannel', {
        received: (data) => {
          userNotificationAdd(data.notification);
        },
      });
    }
  }

  componentWillUnmount() {
    if (window.cable && window.cable.subscriptions) {
      window.cable.subscriptions.subscriptions.forEach((sub) => sub.unsubscribe());
    }
  }

  markAsSeen = (notificationId) => {
    const { markNotificationAsSeen } = this.props;
    markNotificationAsSeen(notificationId);
  };

  logout = (currentUser) => {
    const { logout } = this.props;
    logout(currentUser)
      .then(() => localStorage.clear())
      .then(() => history.push('/'));
  };

  render() {
    const { currentUser, notifications, isAuthenticated, isStarted, isFetching, size, children } =
      this.props;

    return (
      <ErrorBoundary>
        <div>
          <Header
            isAuthenticated={isAuthenticated}
            isStarted={isStarted}
            isFetching={isFetching}
            currentUser={currentUser}
            notifications={notifications}
            containerWidth={size.width}
            markAsSeen={this.markAsSeen}
            onLogout={this.logout}
          />
          <div id="main" className="container">
            <ErrorBoundary>{children}</ErrorBoundary>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.currentUser.item,
  isStarted: state.currentUser.isStarted,
  isFetching: state.currentUser.isFetching,
  notifications: state.notifications,
});

const mapDispatchToProps = {
  logout,
  markNotificationAsSeen,
  userNotificationAdd,
};

export default withSize()(connect(mapStateToProps, mapDispatchToProps)(Application));