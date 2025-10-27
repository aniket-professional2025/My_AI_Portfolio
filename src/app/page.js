// Main Portfolio Component: New Code

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
    // Load Lottie animation
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
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [showWelcome]);

  const handleNavClick = (sectionId) => {
  //   setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-linear-to-br from-purple-900 via-purple-700 to-purple-500">
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-purple-900 via-purple-700 to-purple-500">
          <style>{`
            @keyframes wave {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px);
              }
            }
            
            .dot-wave {
              animation: wave 1.2s ease-in-out infinite;
            }
          `}</style>

          <div className="text-center space-y-8">
            {/* Lottie Animation */}
            <div 
              ref={lottieContainer} 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto"
            ></div>

            {/* Welcome Text */}
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 animate-pulse">Welcome</h1>
            <p className="text-2xl md:text-4xl text-white font-light">To Anexus</p>

            {/* Animated Dots */}
            <div className="flex justify-center items-center space-x-3 pt-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="w-3 h-3 md:w-4 md:h-4 bg-yellow-300 rounded-full dot-wave"
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!showWelcome && (
        <>
          <Navbar
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <section id="home" className="min-h-screen">
            <Home handleNavClick={handleNavClick} />
          </section>

          <section id="about" className="min-h-screen pt-20">
            <About />
          </section>

          <section id="projects" className="min-h-screen pt-20">
            <Projects />
          </section>

          <section id="education" className="min-h-screen pt-20">
            <Education />
          </section>

          <section id="internship" className="min-h-screen pt-20">
            <Internship />
          </section>

          <section id="certificates" className="min-h-screen pt-20">
            <Certificates />
          </section>

          <section id="contact" className="min-h-screen pt-20">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}