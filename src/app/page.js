"use client";
import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// Import the new Navbar
import Navbar from '@/components/Navbar';

// Import page sections
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

  useEffect(() => {
    if (showWelcome && lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/THNOkGgv3C.json'
      });

      return () => animation.destroy();
    }
  }, [showWelcome]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 7000);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeSection) {
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
      {/* Welcome Animation */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 animate-fadeIn">
          <div className="text-center space-y-6 animate-slideUp">
            <div ref={lottieContainer} className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 animate-pulse">Welcome</h1>
            <p className="text-2xl md:text-4xl text-white font-light">To My Portfolio</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showWelcome && (
        <div className="animate-fadeIn">
          <Navbar
            navItems={navItems}
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <div className={activeSection === 'home' ? '' : 'pt-20'}>
            {renderContent()}
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        .animate-slideUp { animation: slideUp 1s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </div>
  );
}