import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hanieh
              <span className="block text-blue-300">Rashidpour</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              PhD Student & Graduate Research Assistant
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Exploring the frontiers of Collaborative Systems in Virtual and Augmented Reality
              at Augusta University
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#research"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              View Research
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/hrashidpour', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/hanieh-rashidpour', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rashidpourhanieh@gmail.com', label: 'Email' },
              { icon: FileText, href: 'https://scholar.google.com/citations?user=foWdHhEAAAAJ&hl=en', label: 'Google Scholar' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-300 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;