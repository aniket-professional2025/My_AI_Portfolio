// Navbar Component: Responsive Drawer for Mobile Only with Glassmorphism

"use client";
import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, handleNavClick, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'My Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internship' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-purple-700 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-yellow-300 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          A(I)niket
        </div>

        {/* ✅ Desktop Navigation with Glassmorphism (visible from md breakpoint) */}
        <div className="hidden md:flex items-center gap-6 px-6 py-3 rounded-2xl bg-purple-400 bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-lg font-medium whitespace-nowrap group cursor-pointer ${
                activeSection === item.id ? 'text-yellow-300' : 'text-white'
              }`}
            >
              <span className="relative inline-block transition-all duration-300 group-hover:text-yellow-300" style={{ 
                filter: 'blur(0.3px)', 
                textShadow: '0 0 12px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.4)',
                WebkitFontSmoothing: 'antialiased'
              }}>
                {item.label}
              </span>

              {/* Active underline */}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 shadow-lg shadow-yellow-300"></span>
              )}

              {/* Hover underline */}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 shadow-lg shadow-yellow-300"></span>
            </button>
          ))}
        </div>

        {/* ✅ Mobile Drawer Toggle (only visible below md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-300 hover:text-white transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu with Glassmorphism (only visible below md) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="flex flex-col space-y-2 pb-4 px-4 mx-4 rounded-2xl bg-purple-800 bg-opacity-20 backdrop-blur-md border border-purple-400 border-opacity-30 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-lg font-medium text-left py-2 px-3 rounded-lg transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'text-yellow-300 bg-purple-700 bg-opacity-30'
                  : 'text-white hover:bg-purple-700 hover:bg-opacity-25 hover:text-yellow-300'
              }`}
              style={{ 
                filter: 'blur(0.5px)', 
                textShadow: '0 0 12px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.4)',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}