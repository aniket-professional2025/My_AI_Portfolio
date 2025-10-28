// Home Component: New Code

import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export default function Home({ handleNavClick }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 leading-tight">
          Hi, I am an AI/ML Professional
        </h1>
        <p className="text-2xl md:text-3xl text-white font-light">
          Developer | Researcher | Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center space-x-2 bg-purple-800 bg-opacity-50 px-6 py-3 rounded-full">
            <Briefcase className="text-yellow-300" size={24} />
            <span className="text-white text-lg">Webbies</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-800 bg-opacity-50 px-6 py-3 rounded-full">
            <MapPin className="text-yellow-300" size={24} />
            <span className="text-white text-lg">Kolkata</span>
          </div>
        </div>
        <p className="text-xl text-white max-w-3xl mx-auto mt-8 leading-relaxed">
          Passionate about building intelligent systems and pushing the boundaries of artificial intelligence.
          Specialized in machine learning, deep learning, and AI research.
        </p>
        <button
          onClick={() => handleNavClick('about')}
          // Added cursor-pointer
          className="mt-8 bg-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-yellow-400 transition-all transform hover:scale-105 cursor-pointer"
        >
          Learn More About Me
        </button>
      </div>
    </div>
  );
}