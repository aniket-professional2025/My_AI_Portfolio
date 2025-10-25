<<<<<<< HEAD
// Certificates Component: New code
import React from 'react';
import { Award, GraduationCap, Link } from 'lucide-react';

export default function Certificates() {
  const certifications = [
    {
      id: 1,
      title: 'Deep Learning Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Dec 2023',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'RNN']
    },
    {
      id: 2,
      title: 'Machine Learning Engineering for Production',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Aug 2023',
      technologies: ['MLOps', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 3,
      title: 'AWS Certified Machine Learning',
      issuer: 'Amazon Web Services',
      date: 'Apr 2023',
      technologies: ['SageMaker', 'S3', 'EC2']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Certificates & Training
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Formal training and validation of specialized skills
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-yellow-300 p-3 rounded-full shrink-0">
                <Award className="text-purple-900" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">{cert.title}</h3>
                <p className="text-gray-300 text-lg font-medium">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-yellow-300 font-semibold mb-3">{cert.date}</p>
            <div className="flex flex-wrap gap-2">
              {cert.technologies.map((tech) => (
                <span key={tech} className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
=======
// Certificates Component: New code
import React from 'react';
import { Award, GraduationCap, Link } from 'lucide-react';

export default function Certificates() {
  const certifications = [
    {
      id: 1,
      title: 'Deep Learning Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Dec 2023',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'RNN']
    },
    {
      id: 2,
      title: 'Machine Learning Engineering for Production',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Aug 2023',
      technologies: ['MLOps', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 3,
      title: 'AWS Certified Machine Learning',
      issuer: 'Amazon Web Services',
      date: 'Apr 2023',
      technologies: ['SageMaker', 'S3', 'EC2']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Certificates & Training
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Formal training and validation of specialized skills
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-yellow-300 p-3 rounded-full shrink-0">
                <Award className="text-purple-900" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">{cert.title}</h3>
                <p className="text-gray-300 text-lg font-medium">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-yellow-300 font-semibold mb-3">{cert.date}</p>
            <div className="flex flex-wrap gap-2">
              {cert.technologies.map((tech) => (
                <span key={tech} className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> ebb876dfa92a26a905cdb8f799bd373915f206a2
}