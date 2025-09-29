import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { Button } from '../ui/button'; // fixed relative path
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'; // fixed relative path
import { useAppStore } from '../stores/AppStore'; // fixed relative path

const pageLabels = {
  dashboard: 'Dashboard',
  'find-ride': 'Find a Ride',
  'offer-ride': 'Offer a Ride',
  'my-trips': 'My Trips',
  messages: 'Messages',
  payments: 'Payments',
  settings: 'Settings',
  profile: 'Profile',
};

export function TopHeader() {
  const { currentPage, setSidebarOpen } = useAppStore();

  return (
    <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-1.5 shadow-sm border border-gray-100 lg:hidden">
            <img
              src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
              alt="Wassel Logo"
              className="w-full h-full object-contain filter contrast-125"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>

          <h2 className="font-headline font-semibold text-xl text-foreground">
            {pageLabels[currentPage as keyof typeof pageLabels] || 'Wassel'}
          </h2>

          {currentPage === 'dashboard' && (
            <span className="text-sm text-muted-foreground arabic font-arabic">واصل</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="relative bg-transparent text-foreground hover:bg-wassel-light hover:text-wassel-teal"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-wassel-burgundy rounded-full"></span>
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarImage src="https://placehold.co/32x32" alt="Profile" />
          <AvatarFallback className="bg-wassel-teal text-white text-sm">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
