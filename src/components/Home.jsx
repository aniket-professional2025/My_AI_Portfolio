// Home Section: New Code

import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export default function Home({ handleNavClick }) {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showTitleCursor, setShowTitleCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const fullTitle = 'Hi, I am an AI/ML Professional';
  const fullSubtitle = 'Developer | Researcher | Engineer';

  useEffect(() => {
    // Type title text
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setShowTitleCursor(false);
        // Start subtitle after a brief pause
        setTimeout(() => {
          setShowSubtitleCursor(true);
          let subtitleIndex = 0;
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < fullSubtitle.length) {
              setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleInterval);
              setShowSubtitleCursor(false);
              setShowContent(true);
            }
          }, 80);
        }, 300);
      }
    }, 80);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative "
      style={{
        backgroundImage: 'url(/images/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-opacity-40"></div>
      
      <div className="text-center space-y-8 relative z-10">
        <div className="min-h-[180px] md:min-h-60 lg:mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 leading-tight">
            <span className=''>1111{titleText}</span>
            {showTitleCursor && (
              <span className="inline-block w-1 h-16 md:h-20 bg-yellow-300 ml-2 animate-pulse"></span>
            )}
          </h1>

            <div className=" md:min-h-20">
          <p className="text-2xl md:text-3xl text-white font-light">
            {subtitleText}
            {showSubtitleCursor && (
              <span className="inline-block w-1 h-8 md:h-10 bg-white ml-2 animate-pulse"></span>
            )}
          </p>
        </div>


        </div>  
        <div 
          className={`transition-opacity duration-1000 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-purple-800 bg-opacity-70 px-6 py-3 rounded-full backdrop-blur-sm">
              <Briefcase className="text-yellow-300" size={24} />
              <span className="text-white text-lg">Webbies</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-800 bg-opacity-70 px-6 py-3 rounded-full backdrop-blur-sm">
              <MapPin className="text-yellow-300" size={24} />
              <span className="text-white text-lg">Kolkata</span>
            </div>
          </div>
          
          <p className="text-xl text-white max-w-3xl mx-auto mt-8 leading-relaxed drop-shadow-lg">
            Passionate about building intelligent systems and pushing the boundaries of artificial intelligence.
            Specialized in machine learning, deep learning, and AI research.
          </p>
          
          <button
            onClick={() => handleNavClick('about')}
            className="mt-8 bg-yellow-300 text-purple-900 font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-yellow-400 transition-all transform hover:scale-105 cursor-pointer"
          >
            Learn More About Me
          </button>
        </div>
      </div>
    </div>
  );
}