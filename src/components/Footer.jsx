import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gray-900 tracking-tight">AIESEC FnL</span>
            <p className="text-sm text-gray-500 mt-1">Empowering financial leadership.</p>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AIESEC FnL Transition Guide. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
