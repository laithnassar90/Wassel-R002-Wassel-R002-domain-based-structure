import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import TopHeader from './layout/TopHeader';
import Dashboard from './pages/Dashboard';
import { useAppStore } from './stores/AppStore';
import './index.css'; // ✅ use CSS instead of HTML
import Settings from './pages/Settings';
import FindRide from './pages/Findride';
import Messages from './pages/Messages';
import MyTrips from './pages/MyTips';
import OfferRide from './pages/OfferRide';
import Payments from './pages/Payments';
import Profile from './pages/Profile';

function App() {
  const { currentPage } = useAppStore();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'settings': return <Settings />;
      case 'find-ride': return <FindRide />;
      case 'messages': return <Messages />;
      case 'my-trips': return <MyTrips />;
      case 'offer-ride': return <OfferRide />;
      case 'payments': return <Payments />;
      case 'profile': return <Profile />;
      // Add more cases if needed
      default: return <Dashboard />;
    }
  };

  return (
    <Router>
      <div className="wassel-app">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            <div className="wassel-header">
              <h1>Wassel - Ride Sharing</h1>
              <TopHeader />
            </div>
            <main className="flex-1 overflow-y-auto">
              {renderCurrentPage()}
            </main>
            <div className="wassel-actions">
              <button className="primary-button">Primary Action</button>
              <button className="secondary-button">Secondary Action</button>
            </div>
            <div className="wassel-footer">
              © 2025 Wassel
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

