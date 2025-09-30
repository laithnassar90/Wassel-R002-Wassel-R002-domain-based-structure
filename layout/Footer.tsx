import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 border-t border-gray-200 bg-white shadow-inner">
      <p>© {new Date().getFullYear()} Wassel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
