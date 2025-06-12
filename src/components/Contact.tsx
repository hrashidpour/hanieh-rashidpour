import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Interested in collaboration, research opportunities, or discussing AR/VR innovations? 
              I'd love to connect with fellow researchers and industry professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center group">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">rashidpourhanieh@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-medium">Augusta University, Augusta, GA</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-medium">Available upon request</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Github, label: 'GitHub', href: 'https://github.com/hrashidpour' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanieh-rashidpour' },
                    { icon: FileText, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=foWdHhEAAAAJ&hl=en' },
                    { icon: ExternalLink, label: 'ResearchGate', href: 'https://www.researchgate.net/scientific-contributions/Hanieh-Rashidpour-2290353679' }
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600/20 hover:bg-blue-600/40 p-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center"
                      aria-label={label}
                    >
                      <Icon size={20} className="mr-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="Research Collaboration"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                    placeholder="I'm interested in discussing potential collaboration opportunities in AR/VR research..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4">Research Collaboration</h4>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I'm always open to discussing research collaborations, joint publications, 
                and innovative projects in the AR/VR space. Whether you're a fellow researcher, 
                industry professional, or student interested in immersive technologies, 
                feel free to reach out to explore potential opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;