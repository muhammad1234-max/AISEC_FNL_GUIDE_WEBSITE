import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Shield, BarChart, Users, FileText, Globe, Image, UserCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/Blue-Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Fundamentals', path: '/fundamentals', icon: BookOpen },
    { name: 'Compendium', path: '/compendium', icon: FileText },
    { name: 'Standards', path: '/operations', icon: BarChart },
    { name: 'Audits', path: '/governance', icon: Shield },
    { name: 'Tools', path: '/tools', icon: Globe },
    { name: 'Glossary', path: '/glossary', icon: Users },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'People', path: '/people', icon: UserCircle2 },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="AIESEC Logo" className="h-10 w-auto" />
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">FnL Guide</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${isActive(item.path)
                  ? 'bg-aiesec-blue/10 text-aiesec-blue'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-aiesec-blue'
                  }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${isActive(item.path)
                    ? 'bg-aiesec-blue/10 text-aiesec-blue'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-aiesec-blue'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
