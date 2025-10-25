// About Component: New Code

import React from 'react';
import { Briefcase, MapPin, Code, Brain, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-yellow-300 mb-6">Professional Overview</h3>
          <p className="text-white text-lg leading-relaxed mb-6">
            I am a multifaceted AI/ML professional currently working at Webbies in Kolkata, where I combine my expertise
            as an AI/ML Developer, AI Researcher, and AI Engineer to create innovative solutions that bridge the gap
            between cutting-edge research and practical applications.
          </p>
          <p className="text-white text-lg leading-relaxed">
            My work involves developing sophisticated machine learning models, conducting research on emerging AI technologies,
            and engineering robust AI systems that solve real-world problems.
          </p>
        </div>

        <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-yellow-300 mb-6">Current Role</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Briefcase className="text-yellow-300 mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white font-semibold text-xl">Company</p>
                <p className="text-white text-lg">Webbies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-yellow-300 mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white font-semibold text-xl">Location</p>
                <p className="text-white text-lg">Kolkata, West Bengal, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Code className="text-yellow-300 mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white font-semibold text-xl">Roles</p>
                <ul className="text-white text-lg space-y-1">
                  <li>• AI/ML Developer</li>
                  <li>• AI Researcher</li>
                  <li>• AI Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h3 className="text-3xl font-bold text-yellow-300 mb-8 text-center">Areas of Expertise</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-yellow-300 p-4 rounded-full">
                <Brain className="text-purple-900" size={40} />
              </div>
            </div>
            <h4 className="text-xl font-bold text-yellow-300">AI Development</h4>
            <p className="text-white">
              Building intelligent applications using state-of-the-art machine learning frameworks and neural networks.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-yellow-300 p-4 rounded-full">
                <Code className="text-purple-900" size={40} />
              </div>
            </div>
            <h4 className="text-xl font-bold text-yellow-300">Research</h4>
            <p className="text-white">
              Exploring novel AI methodologies, publishing findings, and staying at the forefront of AI innovation.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-yellow-300 p-4 rounded-full">
                <Cpu className="text-purple-900" size={40} />
              </div>
            </div>
            <h4 className="text-xl font-bold text-yellow-300">Engineering</h4>
            <p className="text-white">
              Designing and deploying scalable AI infrastructure and production-ready machine learning systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}