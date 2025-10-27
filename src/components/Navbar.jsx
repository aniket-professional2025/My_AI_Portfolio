// Navbar Component: New Code

"use client";
import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, handleNavClick, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'My Skills'},
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internship' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-40 bg-purple-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-yellow-300 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            A(I)niket
          </div>

          {/* Desktop Navigation - Hidden by default, shown when menu is open */}
          <div className={`hidden md:flex items-center transition-all duration-700 ease-in-out ${
            mobileMenuOpen 
              ? 'opacity-100 max-w-[800px] gap-6' 
              : 'opacity-0 max-w-0 gap-0 pointer-events-none'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-lg font-medium whitespace-nowrap group ${
                  activeSection === item.id
                    ? 'text-yellow-300'
                    : 'text-white'
                }`}
                style={{
                  transition: 'all 0.5s ease-in-out',
                  transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.8)'
                }}
              >
                <span className="relative inline-block transition-colors duration-300 group-hover:text-yellow-300">
                  {item.label}
                </span>
                
                {/* Active state underline */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300"></span>
                )}
                
                {/* Hover animated underline - grows from center */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-yellow-300 transition-all duration-400 ease-out group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>

          {/* Drawer Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-yellow-300 hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Menu 
                size={28} 
                className={`absolute transition-all duration-500 ease-in-out ${
                  mobileMenuOpen 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                size={28} 
                className={`absolute transition-all duration-500 ease-in-out ${
                  mobileMenuOpen 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-180 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-medium text-left py-2 px-4 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-yellow-300 bg-purple-800'
                    : 'text-white hover:bg-purple-800 hover:text-yellow-300'
                }`}
                style={{
                  transition: 'all 0.4s ease-in-out',
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}