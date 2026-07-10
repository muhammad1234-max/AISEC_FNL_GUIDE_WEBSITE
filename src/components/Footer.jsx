import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/60 mt-auto">
      <div className="page-container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-gray-900 tracking-tight">AIESEC FnL</span>
            <p className="text-sm text-gray-500 mt-1">Empowering financial leadership.</p>
          </div>

          {/* Attribution */}
          <div className="flex flex-col items-center md:items-end text-sm text-gray-500">
            <p className="mb-2.5">
              Designed & Developed by <span className="font-medium text-gray-700">Muhammad Abbas</span>
            </p>
            <div className="flex items-center gap-3.5">
              <a 
                href="https://github.com/muhammad1234-max" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30 rounded"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200/60 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AIESEC FnL Transition Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
