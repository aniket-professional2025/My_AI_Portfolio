import React from 'react';
import { Award, GraduationCap, Link } from 'lucide-react';

export default function Certificates() {
  const certifications = [
    {
      id: 1,
      title: 'Deep Learning Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Completed: Dec 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ABCXYZ123',
      description: 'Comprehensive five-course specialization covering Neural Networks, Deep Learning Architectures (CNNs, RNNs), Hyperparameter tuning, and Structuring Machine Learning projects.',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'RNN', 'NLP'],
    },
    {
      id: 2,
      title: 'Machine Learning Engineering for Production (MLOps)',
      issuer: 'Coursera (DeepLearning.AI)',
      date: 'Completed: Aug 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/DEFUVW456',
      description: 'Focused on deploying, managing, and scaling production machine learning systems, including data pipeline orchestration and model monitoring.',
      technologies: ['MLOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      id: 3,
      title: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Certified: Apr 2023',
      link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
      description: 'Validated expertise in building, training, and deploying ML models on the AWS platform, focusing on various AWS ML services (SageMaker, Rekognition, Comprehend).',
      technologies: ['AWS SageMaker', 'S3', 'EC2', 'CloudFormation'],
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms Masterclass',
      issuer: 'Udemy (Colt Steele)',
      date: 'Completed: Jun 2022',
      link: 'https://www.udemy.com/certificate/GHIJRS789/',
      description: 'A rigorous course focused on optimizing algorithms, advanced data structures (Graphs, Trees, Heaps), and competitive programming techniques in Python.',
      technologies: ['Python', 'Algorithms', 'Data Structures', 'Time Complexity'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4 animate-slideUp">
        Certificates & Training
      </h2>
      <p className="text-white text-xl text-center mb-12">
        Formal training and validation of my specialized skills
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="bg-purple-800 bg-opacity-40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-yellow-300/30 animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-yellow-300 p-3 rounded-full flex-shrink-0">
                {cert.id === 3 ? (
                  <GraduationCap className="text-purple-900" size={28} />
                ) : (
                  <Award className="text-purple-900" size={28} />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">{cert.title}</h3>
                <p className="text-gray-300 text-lg font-medium">{cert.issuer}</p>
              </div>
            </div>

            <p className="text-white mb-4 leading-relaxed">{cert.description}</p>

            <div className="border-t border-purple-600 pt-4 mt-4">
              <p className="text-yellow-300 font-semibold mb-3">{cert.date}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-white transition-colors group"
              >
                View Credential
                <Link className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Note */}
      <div className="mt-12 text-center bg-yellow-300 bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm animate-slideUp" style={{ animationDelay: `${certifications.length * 0.1}s` }}>
        <p className="text-white text-lg">
          <span className="text-yellow-300 font-bold">Continuous Learning:</span> I am committed to continuous professional development, constantly acquiring new skills to stay current with the rapidly evolving field of Artificial Intelligence.
        </p>
      </div>
    </div>
  );
}