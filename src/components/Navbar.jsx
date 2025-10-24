"use client";
import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  navItems,
  activeSection,
  handleNavClick,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <nav className="fixed top-0 right-0 left-0 z-40 bg-purple-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div
            className="text-2xl font-bold text-yellow-300 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            Aniket AI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-medium transition-all duration-300 hover:text-yellow-300 ${
                  activeSection === item.id
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-medium text-left py-2 px-4 rounded transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-yellow-300 bg-purple-800'
                      : 'text-white hover:bg-purple-800 hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}