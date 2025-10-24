"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import lottie from 'lottie-web';

// Import all the new page components
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Internship from '@/components/Internship';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lottieContainer = useRef(null);

  // Lottie Animation useEffect
  useEffect(() => {
    if (showWelcome && lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/THNOkGgv3C.json'
      });

      return () => {
        animation.destroy();
      };
    }
  }, [showWelcome]);

  // Welcome Timer useEffect - Changed to 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internship' },
    { id: 'certificates', label: 'Certificate Courses' },
    { id: 'contact', label: 'Contact Me' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    // Optional: Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <Home handleNavClick={handleNavClick} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'internship':
        return <Internship />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Home handleNavClick={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden">
      {/* Welcome Animation Overlay with Lottie */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 animate-fadeIn">
          <div className="text-center space-y-6 animate-slideUp">
            {/* Lottie Animation Container */}
            <div 
              ref={lottieContainer} 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
            ></div>
            
            {/* Welcome Text */}
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 animate-pulse">
              Welcome
            </h1>
            <p className="text-2xl md:text-4xl text-white font-light">
              To My Portfolio
            </p>
            
            {/* Loading Dots Animation */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '750ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showWelcome && (
        <div className="animate-fadeIn">
          {/* Navigation Bar */}
          <nav className="fixed top-0 right-0 left-0 z-40 bg-purple-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="text-2xl font-bold text-yellow-300 cursor-pointer" onClick={() => handleNavClick('home')}>
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

          {/* Main Content Area */}
          <div className={activeSection === 'home' ? '' : 'pt-20'}>
            {renderContent()}
          </div>
        </div>
      )}

      {/* Custom Styles (Kept here for animations) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}