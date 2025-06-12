import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      title: 'Collaborative VR Framework',
      description: 'A comprehensive framework for enabling real-time collaboration in virtual reality environments, focusing on gesture recognition and spatial audio.',
      technologies: ['Unity', 'C#', 'WebRTC', 'Node.js'],
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/8566460/pexels-photo-8566460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'AR-Based Learning Platform',
      description: 'An augmented reality platform designed to enhance collaborative learning experiences in educational settings.',
      technologies: ['ARCore', 'Unity', 'Firebase', 'ML Kit'],
      status: 'Published',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Multi-User Virtual Workspace',
      description: 'A virtual workspace that allows multiple users to collaborate on 3D design tasks with real-time synchronization.',
      technologies: ['WebXR', 'Three.js', 'Socket.io', 'React'],
      status: 'In Development',
      image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const researchAreas = [
    'Virtual Reality Collaboration',
    'Augmented Reality Interfaces',
    'Human-Computer Interaction',
    'Distributed Systems',
    'Real-time Communication',
    'Spatial Computing'
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-6">Research & Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Exploring innovative solutions in collaborative virtual and augmented reality systems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Published' 
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center text-navy-600 hover:text-navy-800 transition-colors duration-200">
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm font-medium">View</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
                      <Github size={16} className="mr-1" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-navy-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6 text-center">Research Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center"
                >
                  <ArrowRight size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;