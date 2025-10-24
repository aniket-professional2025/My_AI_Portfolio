import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export default function Internship() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4 animate-slideUp">
        Internship Experience
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Professional experiences and hands-on learning
      </p>

      <div className="space-y-8">
        {/* Internship 1 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="text-yellow-300" size={32} />
                <h3 className="text-3xl font-bold text-yellow-300">
                  Machine Learning Intern
                </h3>
              </div>
              <p className="text-white text-xl font-semibold mb-2">
                Google AI Research
              </p>
              <p className="text-gray-300 text-base flex items-center">
                <MapPin className="mr-2" size={18} />
                Bangalore, India (Hybrid)
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                Jun 2022 - Aug 2022
              </span>
              <p className="text-yellow-300 font-semibold mt-2">3 Months</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white text-lg font-semibold mb-3 text-yellow-300">Key Responsibilities:</p>
            <ul className="text-white space-y-2 mb-4">
              <li>• Developed and optimized neural network architectures for NLP tasks using TensorFlow and PyTorch</li>
              <li>• Improved model inference speed by 40% through quantization and pruning techniques</li>
              <li>• Collaborated with research team on transformer model fine-tuning for multilingual applications</li>
              <li>• Conducted extensive experiments on large-scale datasets (10M+ samples)</li>
            </ul>
            <p className="text-white text-lg font-semibold mb-2 text-yellow-300">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">BERT</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Docker</span>
            </div>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="text-yellow-300" size={32} />
                <h3 className="text-3xl font-bold text-yellow-300">
                  AI Research Intern
                </h3>
              </div>
              <p className="text-white text-xl font-semibold mb-2">
                Microsoft Research Lab
              </p>
              <p className="text-gray-300 text-base flex items-center">
                <MapPin className="mr-2" size={18} />
                Hyderabad, India
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                Dec 2021 - Feb 2022
              </span>
              <p className="text-yellow-300 font-semibold mt-2">3 Months</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white text-lg font-semibold mb-3 text-yellow-300">Key Responsibilities:</p>
            <ul className="text-white space-y-2 mb-4">
              <li>• Researched and implemented novel attention mechanisms for computer vision tasks</li>
              <li>• Built end-to-end ML pipeline for image classification achieving 94% accuracy</li>
              <li>• Contributed to open-source ML frameworks and documented research findings</li>
              <li>• Presented findings to senior researchers and received outstanding performance review</li>
            </ul>
            <p className="text-white text-lg font-semibold mb-2 text-yellow-300">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">OpenCV</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Keras</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">ResNet</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Git</span>
            </div>
          </div>
        </div>

        {/* Internship 3 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-yellow-300/20 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="text-yellow-300" size={32} />
                <h3 className="text-3xl font-bold text-yellow-300">
                  Data Science Intern
                </h3>
              </div>
              <p className="text-white text-xl font-semibold mb-2">
                Amazon Web Services (AWS)
              </p>
              <p className="text-gray-300 text-base flex items-center">
                <MapPin className="mr-2" size={18} />
                Mumbai, India (Remote)
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-bold text-lg">
                May 2020 - Aug 2020
              </span>
              <p className="text-yellow-300 font-semibold mt-2">4 Months</p>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-4 mt-4">
            <p className="text-white text-lg font-semibold mb-3 text-yellow-300">Key Responsibilities:</p>
            <ul className="text-white space-y-2 mb-4">
              <li>• Analyzed large-scale customer data to identify patterns and insights using SQL and Python</li>
              <li>• Developed predictive models for customer churn prediction with 87% accuracy</li>
              <li>• Created interactive dashboards using Tableau for real-time business metrics</li>
              <li>• Automated data preprocessing pipeline reducing processing time by 60%</li>
            </ul>
            <p className="text-white text-lg font-semibold mb-2 text-yellow-300">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">SQL</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Pandas</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Tableau</span>
              <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Note */}
      <div className="mt-12 text-center bg-yellow-300 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-white text-lg">
          <span className="text-yellow-300 font-bold">Professional Growth:</span> Through these internships,
          I gained hands-on experience with cutting-edge AI technologies, collaborated with world-class teams,
          and contributed to impactful projects that enhanced my skills in machine learning, research, and software engineering.
        </p>
      </div>
    </div>
  );
}