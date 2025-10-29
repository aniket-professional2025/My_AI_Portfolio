// Navbar Component: New Code
"use client";
import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  activeSection,
  handleNavClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "My Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "internship", label: "Internship" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-purple-800/40 to-indigo-900/40 backdrop-blur-1g border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-yellow-300 select-none"
          onClick={() => handleNavClick("home")}
        >
          A(I)niket
        </div>

        {/* ✅ Centered Desktop Navigation (Glassmorphic container) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-8 px-20 py-5 rounded-2xl backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-lg font-medium whitespace-nowrap group cursor-pointer transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.label}

              {/* Active underline */}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 rounded-full shadow-yellow-300/50 shadow-sm"></span>
              )}

              {/* Hover underline */}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-yellow-300 rounded-full transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
        </div>

        {/* ✅ Mobile Drawer Toggle (below md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-300 hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Drawer (Glassmorphic) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 mt-2"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col space-y-2 pb-4 px-4 mx-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.id);
                setMobileMenuOpen(false);
              }}
              className={`relative text-lg font-medium whitespace-nowrap group cursor-pointer transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300 hover:blur-[0.3px]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}