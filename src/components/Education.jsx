import React from 'react';

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4 animate-slideUp">
        Education
      </h2>
      <p className="text-white text-xl text-center mb-12">
        My academic journey and qualifications
      </p>

      <div className="space-y-8">
        {/* Education Item 1 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp">
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
              <p className="text-gray-300 text-base">
                New Delhi, India
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
              <strong className="text-yellow-300">Key Coursework:</strong> Deep Learning, Natural Language Processing,
              Computer Vision, Reinforcement Learning, Advanced Machine Learning, Neural Networks,
              Statistical Learning Theory
            </p>
            <p className="text-white leading-relaxed mt-2">
              <strong className="text-yellow-300">Research Focus:</strong> Developed novel attention mechanisms
              for transformer architectures. Published research paper on efficient training of large language models.
            </p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.1s' }}>
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
              <p className="text-gray-300 text-base">
                Kolkata, West Bengal, India
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                2017 - 2021
              </span>
              <p className="text-yellow-300 font-semibold mt-2 text-lg">CGPA: 8.6/10</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white leading-relaxed">
              <strong className="text-yellow-300">Key Coursework:</strong> Data Structures & Algorithms,
              Database Management Systems, Operating Systems, Computer Networks, Software Engineering,
              Machine Learning Fundamentals, Probability & Statistics
            </p>
            <p className="text-white leading-relaxed mt-2">
              <strong className="text-yellow-300">Final Year Project:</strong> Developed an intelligent
              recommendation system using collaborative filtering and deep learning techniques.
              Achieved 92% accuracy in user preference prediction.
            </p>
          </div>
        </div>

        {/* Education Item 3 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">
                Higher Secondary Education (12th Grade)
              </h3>
              <p className="text-white text-xl font-semibold mb-2">
                Science Stream (Physics, Chemistry, Mathematics)
              </p>
              <p className="text-white text-lg mb-2">
                Delhi Public School
              </p>
              <p className="text-gray-300 text-base">
                Kolkata, West Bengal, India
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                2015 - 2017
              </span>
              <p className="text-yellow-300 font-semibold mt-2 text-lg">Score: 95.2%</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white leading-relaxed">
              <strong className="text-yellow-300">Achievements:</strong> School Topper in Computer Science,
              Merit Award in Mathematics Olympiad, Member of Robotics Club, Participated in National
              Science Exhibition
            </p>
          </div>
        </div>
      </div>

      {/* Additional Skills/Certifications Note */}
      <div className="mt-12 text-center bg-yellow-300 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-black text-lg">
          <span className="text-black-300 font-bold">Academic Excellence:</span> Consistently maintained
          high academic performance while actively participating in research projects, hackathons, and
          technical competitions throughout my educational journey.
        </p>
      </div>
    </div>
  );
}