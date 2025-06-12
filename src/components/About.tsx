import React from 'react';
import { Cuboid as Cube, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cube,
      title: 'AR/VR Systems',
      description: 'Developing innovative virtual and augmented reality applications for collaborative environments'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Designing systems that enable seamless collaboration in virtual spaces'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of human-computer interaction in immersive technologies'
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Committed to advancing the field through rigorous research and publications'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-6">
                Bridging Virtual Worlds and Human Collaboration
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a PhD student and Graduate Research Assistant at Augusta University, I am dedicated to exploring 
                the intersection of human collaboration and immersive technologies. My research focuses on developing 
                innovative systems that enable seamless interaction and cooperation within virtual and augmented reality environments.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My work encompasses the design and implementation of collaborative frameworks that leverage the unique 
                capabilities of AR/VR technologies to enhance human communication, learning, and problem-solving in virtual spaces.
                I am particularly interested in how these technologies can transform the way we work, learn, and interact with each other.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am passionate about creating technology that brings people together, regardless of physical distance, 
                and enables new forms of collaborative experiences that were previously impossible. My goal is to contribute 
                to the advancement of immersive technologies that can positively impact society.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-600 to-blue-700 p-8 rounded-2xl shadow-xl">
                <div className="text-white">
                  <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      Collaborative VR/AR Systems
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      Human-Computer Interaction
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      Immersive Technologies
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      Virtual Collaboration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      Mixed Reality Applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="bg-navy-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-navy-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-navy-800 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;