import React, { useState } from 'react';
import {
  Code2, Database, Sigma, Table, AreaChart, BarChart3, Calculator,
  Zap, GraduationCap, Camera, Image, BrainCircuit, MonitorPlay, Flame,
  LayoutGrid, Users, Container, CloudDrizzle, Activity, MessageSquare
} from 'lucide-react';

// Define the skills and map them to their corresponding icons
const SKILLS = [
  { name: "Python", icon: <Code2 size={48} className="text-yellow-300" /> },
  { name: "Numpy", icon: <Sigma size={48} className="text-yellow-300" /> },
  { name: "Pandas", icon: <Table size={48} className="text-yellow-300" /> },
  { name: "Matplotlib", icon: <AreaChart size={48} className="text-yellow-300" /> },
  { name: "Seaborn", icon: <BarChart3 size={48} className="text-yellow-300" /> },
  { name: "Statsmodel", icon: <Calculator size={48} className="text-yellow-300" /> },
  { name: "Scipy", icon: <Zap size={48} className="text-yellow-300" /> },
  { name: "Scikit-learn", icon: <GraduationCap size={48} className="text-yellow-300" /> },
  { name: "OpenCV", icon: <Camera size={48} className="text-yellow-300" /> },
  { name: "PIL", icon: <Image size={48} className="text-yellow-300" /> },
  { name: "Tensorflow", icon: <BrainCircuit size={48} className="text-yellow-300" /> },
  { name: "Streamlit", icon: <MonitorPlay size={48} className="text-yellow-300" /> },
  { name: "Pytorch", icon: <Flame size={48} className="text-yellow-300" /> },
  { name: "MSSQL", icon: <Database size={48} className="text-yellow-300" /> },
  { name: "MYSQL", icon: <Database size={48} className="text-yellow-300" /> },
  { name: "Dash", icon: <LayoutGrid size={48} className="text-yellow-300" /> },
  { name: "Hugging face", icon: <Users size={48} className="text-yellow-300" /> },
  { name: "Docker", icon: <Container size={48} className="text-yellow-300" /> },
  { name: "Redis", icon: <Zap size={48} className="text-yellow-300" /> },
  { name: "Cassandra", icon: <CloudDrizzle size={48} className="text-yellow-300" /> },
  { name: "Prometheus", icon: <Activity size={48} className="text-yellow-300" /> },
  { name: "Kafka", icon: <MessageSquare size={48} className="text-yellow-300" /> },
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
          onMouseEnter={() => document.querySelector('.skills-track').style.animationPlayState = 'paused'}
          onMouseLeave={() => document.querySelector('.skills-track').style.animationPlayState = 'running'}
        >
          {MARQUEE_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 mx-4 flex flex-col items-center justify-center p-4 bg-purple-800/40 rounded-xl shadow-xl transition-all duration-300 relative cursor-pointer group hover:bg-purple-700/60"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Shake Animation */}
              <div className="animate-shake group-hover:animate-none">
                {skill.icon}
              </div>

              {/* Skill Name Overlay */}
              <div className={`absolute inset-0 bg-purple-900/95 flex items-center justify-center rounded-xl transition-opacity duration-300 ${
                hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
              }`}>
                <span className="text-yellow-300 text-lg font-bold text-center p-2">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind and CSS for Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: scroll 20s linear infinite; /* Increased speed to 20s */
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-1deg); }
        }

        .animate-shake {
          animation: shake 2.5s ease-in-out infinite;
        }

        /* Responsive adjustments for marquee */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s; /* Increased mobile speed to 30s */
          }
        }
      `}</style>
    </div>
  );
}