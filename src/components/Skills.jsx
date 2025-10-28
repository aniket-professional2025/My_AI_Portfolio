// The new Skills Section

import React, { useState } from 'react';

// Define the skills with their PNG icon paths
const SKILLS = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "Numpy", icon: "/icons/NumPy.png" },
  { name: "Pandas", icon: "/icons/Pandas.png" },
  { name: "Matplotlib", icon: "/icons/Matplotlib.png" },
  { name: "Seaborn", icon: "/icons/Seaborn.png" },
  { name: "Statsmodel", icon: "/icons/Statsmodel.png" },
  { name: "Scipy", icon: "/icons/Scipy.png" },
  { name: "Scikit-learn", icon: "/icons/scikit-learn.png" },
  { name: "OpenCV", icon: "/icons/OpenCV.png" },
  { name: "PIL", icon: "/icons/Pillow Logo.png" },
  { name: "Tensorflow", icon: "/icons/Tensorflow.png" },
  { name: "Streamlit", icon: "/icons/Streamlit.png" },
  { name: "Pytorch", icon: "/icons/Pytorch.png" },
  { name: "MSSQL", icon: "/icons/mssql.png" },
  { name: "MYSQL", icon: "/icons/MySQL.png" },
  { name: "Dash", icon: "/icons/Plotly.png" },
  { name: "Hugging face", icon: "/icons/huggingface-color.png" },
  { name: "Docker", icon: "/icons/Docker.png" },
  { name: "Redis", icon: "/icons/redis.png" },
  { name: "Cassandra", icon: "/icons/cassandra.png" },
  { name: "Prometheus", icon: "/icons/prometheus.png" },
  { name: "Kafka", icon: "/icons/kafka.png" },
];

// Duplicate the array to ensure seamless looping for the marquee effect
const MARQUEE_SKILLS = [...SKILLS, ...SKILLS];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Technical Skills
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Software, Libraries, and Tools I Master
      </p>

      <div className="relative overflow-hidden w-full py-10 skills-container">
        {/* Marquee Container */}
        <div 
          className="flex animate-marquee skills-track"
          // Pause the animation on container hover
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {MARQUEE_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="shrink-0 w-36 h-36 md:w-44 md:h-44 mx-4 flex flex-col items-center justify-center p-5 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl shadow-2xl transition-all duration-500 relative cursor-pointer group hover:scale-110 hover:shadow-yellow-300/30 hover:from-purple-700/60 hover:to-purple-800/60"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon with Shake Animation */}
              <div className="animate-shake group-hover:animate-none transition-transform duration-500 group-hover:scale-110 w-full h-full flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl group-hover:brightness-110"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback text if image fails to load */}
                <div className="hidden text-yellow-300 text-2xl font-bold items-center justify-center w-full h-full">
                  {skill.name.charAt(0)}
                </div>
              </div>

              {/* Skill Name Overlay with Smooth Animation */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-purple-900/98 to-purple-800/98 flex items-center justify-center rounded-2xl transition-all duration-500 backdrop-blur-sm ${
                  hoveredSkill === skill.name 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <span className="text-yellow-300 text-lg md:text-xl font-bold text-center px-3 py-2 animate-fadeIn">
                  {skill.name}
                </span>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-yellow-300/10 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-purple-900 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-purple-900 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Tailwind and CSS for Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: scroll 40s linear infinite;
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-2deg); }
        }

        .animate-shake {
          animation: shake 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: scale(0.8);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Responsive adjustments for marquee */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 50s;
          }
        }

        /* Smooth image rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}