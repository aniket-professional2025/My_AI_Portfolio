import React from 'react';
import { Brain, Code, Cpu } from 'lucide-react';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4 animate-slideUp">
        My Projects
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Showcasing my work in AI/ML development and research
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp">
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Brain className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            Neural Network Image Classifier
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Developed a deep learning model using CNNs to classify images with 95% accuracy.
            Implemented transfer learning using ResNet architecture for optimal performance.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Keras</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>

        {/* Project 2 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Code className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            NLP Sentiment Analysis Tool
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Built a natural language processing system to analyze customer sentiments from reviews.
            Utilized BERT transformers for context-aware sentiment detection.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">BERT</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>

        {/* Project 3 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Cpu className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            Predictive Analytics Engine
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Created a machine learning pipeline for time-series forecasting.
            Implemented ensemble methods combining LSTM and XGBoost for superior predictions.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">XGBoost</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>

        {/* Project 4 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Brain className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            Computer Vision Object Detector
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Developed real-time object detection system using YOLO algorithm.
            Achieved 30 FPS processing speed with 92% mAP on custom dataset.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">YOLO</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">OpenCV</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>

        {/* Project 5 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Code className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            Reinforcement Learning Agent
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Implemented Deep Q-Learning algorithm for game-playing AI agent.
            Trained agent to master complex environments using reward optimization.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">OpenAI Gym</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>

        {/* Project 6 */}
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Cpu className="text-purple-900" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">
            Recommendation System
          </h3>
          <p className="text-white text-base mb-4 leading-relaxed">
            Built collaborative filtering recommendation engine using matrix factorization.
            Integrated deep learning for hybrid recommendation approach.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">Pandas</span>
          </div>
          <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}