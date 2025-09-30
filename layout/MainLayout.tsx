import React from "react";
import { Link } from "react-router-dom";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Wassel</h1>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/rides">Rides</Link>
          <Link to="/sessions">Sessions</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/notifications">Notifications</Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Wassel. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
