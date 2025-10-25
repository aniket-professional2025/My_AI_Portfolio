// Education Component: New Code

import React from 'react';

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Education
      </h2>
      <p className="text-white text-xl text-center mb-12">
        My academic journey and qualifications
      </p>

      <div className="space-y-8">
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">
                Master of Technology (M.Tech)
              </h3>
              <p className="text-white text-xl font-semibold mb-2">
                Artificial Intelligence & Machine Learning
              </p>
              <p className="text-white text-lg mb-2">
                Indian Institute of Technology (IIT) Delhi
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                2021 - 2023
              </span>
              <p className="text-yellow-300 font-semibold mt-2 text-lg">CGPA: 8.9/10</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white leading-relaxed">
              <strong className="text-yellow-300">Key Coursework:</strong> Deep Learning, NLP, Computer Vision, Reinforcement Learning
            </p>
          </div>
        </div>

        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-white text-xl font-semibold mb-2">
                Computer Science & Engineering
              </p>
              <p className="text-white text-lg mb-2">
                Jadavpur University
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                2017 - 2021
              </span>
              <p className="text-yellow-300 font-semibold mt-2 text-lg">CGPA: 8.6/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}