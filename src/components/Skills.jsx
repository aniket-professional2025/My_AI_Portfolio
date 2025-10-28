// Skills Section — Infinite Floating Marquee (Fixed Full Loop)

import React, { useState } from "react";
import Image from "next/image";

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
  { name: "Hugging face", icon: "/icons/hf.png" },
  { name: "GitHub", icon: "/icons/git.png" },
  { name: "Flask Server", icon: "/icons/flask.png" },
  { name: "Docker", icon: "/icons/Docker.png" },
  { name: "Redis", icon: "/icons/redis.png" },
  { name: "Cassandra", icon: "/icons/cassandra.png" },
  { name: "Prometheus", icon: "/icons/prometheus.png" },
  { name: "Kafka", icon: "/icons/kafka.png" },
  { name: "Langchain", icon: "/icons/Langchain.png" },
];

// Duplicate for seamless infinite scroll
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

      {/* Marquee Container */}
      <div className="relative overflow-hidden w-full py-10">
        <div
          className="flex items-center animate-marquee gap-10 min-w-max"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {MARQUEE_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
  
            <Image
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                // The Next.js Image component requires explicit width and height
                // You need to set the desired dimensions for optimization:
                width={80} // Corresponds to md:w-20 (80px in Tailwind's default scale)
                height={80} // Corresponds to md:h-20
                
                // To apply Tailwind CSS for hover/animation effects, use the 'className'
                className="animate-float object-contain transition-transform duration-300 hover:scale-125 
                          brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] 
                          /* 💡 Re-apply your size classes if you want smaller sizes on mobile */
                          w-16 h-16 md:w-20 md:h-20" 
            />

              {hoveredSkill === skill.name && (
                <span className="text-yellow-300 text-sm mt-2 animate-fadeIn font-semibold">
                  {skill.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-purple-400/90 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-purple-400/90 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Infinite full-width scroll */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: scroll 60s linear infinite;
        }

        /* Floating up-down motion */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        /* Fade-in label */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Faster scroll on mobile */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }

        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}