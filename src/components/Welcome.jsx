// Welcome Section: New Code

"use client";
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Welcome() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    // Load Lottie animation
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/THNOkGgv3C.json'
      });

      return () => animation.destroy();
    }
  }, []);

  return (
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
  );
}