// Main Portfolio Component: New Code

"use client";
import React, { useState, useEffect } from 'react';

// Import components
import Welcome from '@/components/Welcome';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Internship from '@/components/Internship';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-linear-to-br from-purple-900 via-purple-700 to-purple-500">
      {showWelcome && <Welcome />}

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
          
          <section id="skills" className="h-[70vh] pt-20">
            <Skills />
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