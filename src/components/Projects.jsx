// Projects Component

import React from 'react';
import { Brain, Code, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      icon: <Brain className="text-purple-900" size={32} />,
      title: "Neural Network Image Classifier",
      description: "Developed a deep learning model using CNNs to classify images with 95% accuracy. Implemented transfer learning using ResNet architecture.",
      technologies: ["Python", "TensorFlow", "Keras"]
    },
    {
      id: 2,
      icon: <Code className="text-purple-900" size={32} />,
      title: "NLP Sentiment Analysis Tool",
      description: "Built a natural language processing system to analyze customer sentiments. Utilized BERT transformers for context-aware detection.",
      technologies: ["Python", "BERT", "PyTorch"]
    },
    {
      id: 3,
      icon: <Cpu className="text-purple-900" size={32} />,
      title: "Predictive Analytics Engine",
      description: "Created a machine learning pipeline for time-series forecasting. Implemented ensemble methods combining LSTM and XGBoost.",
      technologies: ["Python", "Scikit-learn", "XGBoost"]
    },
    {
      id: 4,
      icon: <Brain className="text-purple-900" size={32} />,
      title: "Computer Vision Object Detector",
      description: "Developed real-time object detection system using YOLO algorithm. Achieved 30 FPS processing speed with 92% mAP.",
      technologies: ["Python", "YOLO", "OpenCV"]
    },
    {
      id: 5,
      icon: <Code className="text-purple-900" size={32} />,
      title: "Reinforcement Learning Agent",
      description: "Implemented Deep Q-Learning algorithm for game-playing AI agent. Trained agent to master complex environments.",
      technologies: ["Python", "OpenAI Gym", "PyTorch"]
    },
    {
      id: 6,
      icon: <Cpu className="text-purple-900" size={32} />,
      title: "Recommendation System",
      description: "Built collaborative filtering recommendation engine using matrix factorization. Integrated deep learning for hybrid approach.",
      technologies: ["Python", "TensorFlow", "Pandas"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        My Projects
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Showcasing my work in AI/ML development and research
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {project.icon}
            </div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-3">
              {project.title}
            </h3>
            <p className="text-white text-base mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <button className="text-yellow-300 hover:text-white font-semibold transition-colors">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}