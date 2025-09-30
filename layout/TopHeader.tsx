import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const TopHeader: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
          alt="Wassel Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="font-headline font-bold text-xl text-wassel-gray">
          Wassel
        </span>
      </Link>

      {/* Actions */}
      <nav className="flex items-center gap-6">
        <Link to="/trips" className="text-sm font-medium hover:text-wassel-gray">
          My Trips
        </Link>
        <Link to="/profile" className="text-sm font-medium hover:text-wassel-gray">
          Profile
        </Link>
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </nav>
    </header>
  );
};

export default TopHeader;
