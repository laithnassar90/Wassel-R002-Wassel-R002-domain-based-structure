import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Plus, 
  Calendar, 
  MessageCircle, 
  CreditCard, 
  Settings, 
  User, 
  LogOut,
  X
} from 'lucide-react';
import { Button } from '../ui/button'; // use relative path
import { Separator } from '../ui/separator'; // use relative path
import { useAppStore } from '../stores/AppStore'; // use relative path

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'find-ride', label: 'Find a Ride', icon: Search },
  { id: 'offer-ride', label: 'Offer a Ride', icon: Plus },
  { id: 'my-trips', label: 'My Trips', icon: Calendar },
  { id: 'messages', label: 'Messages', icon: MessageCircle },
  { id: 'payments', label: 'Payments', icon: CreditCard },
];

const utilityItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'profile', label: 'Profile', icon: User },
];

export function Sidebar() {
  const { currentPage, setCurrentPage, sidebarOpen, setSidebarOpen } = useAppStore();

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    if (window.innerWidth < 1024) setSidebarOpen(false); // auto-close on mobile
  };

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`
        fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-2 shadow-sm border border-gray-100">
                <img 
                  src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" 
                  alt="Wassel Logo" 
                  className="w-full h-full object-contain filter contrast-125"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <div>
                <h1 className="font-headline font-bold text-xl wassel-text-gradient">Wassel</h1>
                <p className="text-sm text-muted-foreground arabic font-arabic">واصل</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map(item => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start gap-3 h-12 text-left font-normal
                    ${isActive 
                      ? 'bg-wassel-teal text-white hover:bg-wassel-teal/90'
                      : 'bg-transparent text-foreground hover:bg-wassel-light hover:text-wassel-teal'
                    }
                  `}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Utilities */}
          <div className="p-4 space-y-2 border-t border-border">
            {utilityItems.map(item => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start gap-3 h-12 text-left font-normal
                    ${isActive 
                      ? 'bg-wassel-teal text-white hover:bg-wassel-teal/90'
                      : 'bg-transparent text-foreground hover:bg-wassel-light hover:text-wassel-teal'
                    }
                  `}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              );
            })}

            <Separator className="my-4" />

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-12 text-left font-normal bg-transparent text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
