// The Page.js: New Code
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
    const timer = setTimeout(() => setShowWelcome(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showWelcome]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full min-h-screen">
      {showWelcome && <Welcome />}

      {!showWelcome && (
        <>
          <Navbar
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Home - No background (uses its own image from Home.jsx) */}
          <section id="home" className="h-screen">
            <Home handleNavClick={handleNavClick} />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="h-[190vh] pt-20 bg-linear-to-br from-purple-900 via-purple-700 to-purple-500"
          >
            <About />
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="h-[50vh] pt-20 bg-linear-to-br from-indigo-900 via-indigo-700 to-indigo-500"
          >
            <Skills />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="h-[200vh] pt-20 bg-linear-to-br from-fuchsia-900 via-pink-700 to-rose-500"
          >
            <Projects />
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="h-screen pt-20 bg-linear-to-br from-blue-900 via-blue-700 to-blue-500"
          >
            <Education />
          </section>

          {/* Internship Section */}
          <section
            id="internship"
            className="h-[110vh] pt-20 bg-linear-to-br from-emerald-900 via-emerald-700 to-emerald-500"
          >
            <Internship />
          </section>

          {/* Certificates Section */}
          <section
            id="certificates"
            className="h-[101vh] pt-20 bg-linear-to-br from-violet-900 via-violet-700 to-violet-500"
          >
            <Certificates />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen pt-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-700"
          >
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}