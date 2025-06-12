import React from 'react';
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hanieh Rashidpour</h3>
              <p className="text-gray-300 leading-relaxed">
                PhD Student & Graduate Research Assistant specializing in Collaborative Systems 
                in Virtual and Augmented Reality at Augusta University.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Research', 'Publications', 'Education', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Research Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Virtual Reality Collaboration</li>
                <li>• Augmented Reality Interfaces</li>
                <li>• Human-Computer Interaction</li>
                <li>• Immersive Technologies</li>
                <li>• Mixed Reality Applications</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-300 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart size={16} className="mx-2 text-red-400" />
                <span>for advancing AR/VR research</span>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/hrashidpour', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/hanieh-rashidpour', label: 'LinkedIn' },
                  { icon: ExternalLink, href: 'https://scholar.google.com/citations?user=foWdHhEAAAAJ&hl=en', label: 'Google Scholar' },
                  { icon: Mail, href: 'mailto:rashidpourhanieh@gmail.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm mt-4">
              © {currentYear} Hanieh Rashidpour. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;