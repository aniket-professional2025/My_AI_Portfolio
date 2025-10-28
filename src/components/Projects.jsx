// Projects Component: New Code

import React from 'react';
import { Brain, Code, Cpu, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      icon: <Brain className="text-purple-900" size={32} />,
      title: "RAG Based ChatBot",
      description: "Developed a ChatBot Using GPT API with Retrieval Augmented Generation using Hawaii Wildfire data",
      technologies: ["Python", "Langchain", "OpenAI", "Langraph", "FAISS", "Streamlit"],
      githubUrl: "https://github.com/aniket-professional2025/RAG_ChatBot"
    },
    {
      id: 2,
      icon: <Code className="text-purple-900" size={32} />,
      title: "Audio to Text Summarizer",
      description: "Built a Audio to Text Summarizer Using Open AI Whisper and Gemini Model for an Indian Paint Company",
      technologies: ["Python", "LLM", "OpenAI", "Whisper", "Gemini", "Flask Server"],
      githubUrl: "https://github.com/aniket-professional2025/LLM_Audio_Text_Summarizer"
    },
    {
      id: 3,
      icon: <Cpu className="text-purple-900" size={32} />,
      title: "Cluad Website Builder",
      description: "A Gen AI projkect that builds modern websites with Gen AI on command",
      technologies: ["Python", "Gemini", "Streamlit", "HTML", "CSS"],
      githubUrl: "https://github.com/aniket-professional2025/Claub-Webite-Builder"
    },
    {
     id: 4,
     icon: <Brain className="text-purple-900" size={32} />,
     title: "Human Movement Tracking",
     description: "Developed an system to track human movement using meta's Segment Anything Model 2 along with COCO dataset",
     technologies: ["Python", "SAM", "OpenCV", "PIL", "COCO", "Key Points"],
     githubUrl: "https://github.com/aniket-professional2025/SAM2_Human_Video_Tracking"
    },
    {
      id: 5,
      icon: <Code className="text-purple-900" size={32} />,
      title: "Image Search Algorithm",
      description: "Implemented Google's ViTs to extract Image features and match images based on image textures",
      technologies: ["Python", "ViTs", "Hugging Face", "Streamlit", "feature database", "Json"],
      githubUrl: "https://github.com/aniket-professional2025/Image_Search_Algorithm"
    },
    {
      id: 6,
      icon: <Cpu className="text-purple-900" size={32} />,
      title: "Image Generation Color Picker",
      description: "Built Gen AI based system that uses prompts and convert them into Images. Integrated with Color Picker Feature.",
      technologies: ["Python", "Open AI", "Matplotlib", "Flask Server", "Color Picker"],
      githubUrl: "https://github.com/aniket-professional2025/GPT_Text_To_Image_ColorPicker"
    },
    {
     id: 7,
     icon: <Cpu className="text-purple-900" size={32} />,
     title: "Database DevOps-Tech Stack",
     description: "Implemented distributed systems to make demos of fault tolerant systems in different scenarios",
     technologies: ["Python", "Docker", "Kafka", "Cassandra", "Redis", "Prometheus"],
     githubUrl: "https://github.com/aniket-professional2025/Database_Distributed_Data_Streaming_Platform_TechStack"
    },
    {
     id: 8,
     icon: <Cpu className="text-purple-900" size={32} />,
     title: "Video Generation - Animation",
     description: "Generated videos from images using python libraries from scratch and add animations in them",
     technologies: ["Python", "PIL", "OpenCV", "Numpy", "Textwrap"],
     githubUrl: "https://github.com/aniket-professional2025/Python_Software_Engineering_Video_Creation"
    },
    {
     id: 9,
     icon: <Cpu className="text-purple-900" size={32} />,
     title: "AI Car Inspection - Reporting",
     description: "Developed an advanced object detection system that detects car parts and defects and make excel reports of them",
     technologies: ["Python", "YOLO", "RoboFlow", "Computer Vision", "OpenCV", "Streamlit"],
     githubUrl: "https://github.com/aniket-professional2025/AI_Car_Inspection_Reporting_System"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Projects
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
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              // Added cursor-pointer to the GitHub link
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              <Github className="mr-2" size={20} />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}