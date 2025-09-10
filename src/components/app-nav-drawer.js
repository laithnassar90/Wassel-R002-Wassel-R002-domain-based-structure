import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { spacing, typography, zIndex } from 'material-ui/styles'
import { blue600, blue700 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'
import ActionSearch from 'material-ui/svg-icons/action/search'
import ActionAccountBox from 'material-ui/svg-icons/action/account-box'
import SocialGroup from 'material-ui/svg-icons/social/group'
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car'
import DriverIcon from './icons/DriverIcon'
import PassengerIcon from './icons/PassengerIcon'
import Delete from 'material-ui/svg-icons/action/delete'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router'

const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 26,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: 700,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    paddingLeft: spacing.desktopGutter,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 12,
    borderRadius: '0 0 20px 0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Inter, Roboto, sans-serif',
    letterSpacing: '-0.02em'
  },
  avatatStyle: {
    marginRight: 12,
    border: '3px solid rgba(255, 255, 255, 0.3)'
  },
  logoImage: {
    height: '36px',
    marginRight: '12px',
    verticalAlign: 'middle',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  }
}

export class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    isStarted: PropTypes.bool.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  }

  handleRequestChangeLink = (event, value) => {
    this.context.router.push(value)
  }

  handleTouchTapHeader = () => {
    this.context.router.push('/')
    this.props.onRequestChangeNavDrawer(false)
  }

  renderLeftHeader() {
    const { isAuthenticated, isStarted, isFetching, currentUser } = this.props

    if (!isFetching && isStarted && isAuthenticated) {
      return(
        <div style={styles.logo}>
          <Link to={`/users/${currentUser.id}`}>
            <Avatar src={currentUser.avatar} style={styles.avatatStyle} />
            <span>{currentUser.full_name}</span>
          </Link>
        </div>
      )
    } else {
      return(
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          <img src="/wassel-logo.png" alt="Wassel" style={styles.logoImage} />
          Wassel
        </div>
      )
    }
  }

  nestedAccountItems() {
    const { isAuthenticated, onLogout } = this.props
    if (isAuthenticated) {
      return (
        <ListItem
          primaryText="My account"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem primaryText="My profile" value="/account/user" key="my-profile" leftIcon={<ActionAccountBox />}/>,
            <ListItem primaryText="My cars" value="/account/cars" key="my-cars" leftIcon={<MapsDirectionsCar />} />,
            <ListItem primaryText="My rides as driver" value="/account/rides_as_driver" key="my-rides-driver" leftIcon={<DriverIcon />}/>,
            <ListItem primaryText="My rides as passenger" value="/account/rides_as_passenger" key="my-rides-passenger" leftIcon={<PassengerIcon />}/>,
            <MenuItem onTouchTap={onLogout} primaryText="Logout" key="logout" leftIcon={<Delete />} />
          ]}/>
      )
    } else {
      return (
        [
          <ListItem primaryText='Login' value='/login' key="login" />,
          <ListItem primaryText='Register' value='/register' key="register" />
        ]
      )
    }
  }

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      onLogout,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        {this.renderLeftHeader()}
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="Rides"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem primaryText="Add ride" value="/rides/new" key="add-ride" leftIcon={<ContentAddBox />}/>,
              <ListItem primaryText="Search rides" value="/rides" key="search-rides" leftIcon={<ActionSearch />}/>,
            ]}
          />
          <ListItem
            primaryText="Users"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem primaryText="Browse users" value="/users" key="browse-users" leftIcon={<SocialGroup />} />,
            ]}
          />
          {this.nestedAccountItems()}
        </SelectableList>
      </Drawer>
    )
  }
}
