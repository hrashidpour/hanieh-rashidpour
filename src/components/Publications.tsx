import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Asymmetric Cross-Reality Collaboration for Urban Sustainability Education',
      authors: 'Argo, E., Eisalou, E. K., Rashidpour, H., Schwertfeger, S., Nasibli, N., & Grandi, J.',
      venue: 'IEEE VR Conference',
      year: '2025',
      type: 'Conference Paper',
      status: 'Published',
      doi: 'https://doi.org/10.1109/VRW66409.2025.00415'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-6">Publications & Research</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Contributing to the advancement of collaborative systems in virtual and augmented reality
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-navy-100 p-2 rounded-lg">
                        <BookOpen className="text-navy-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-navy-800 mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {pub.year}
                          </span>
                          <span className="font-medium">{pub.venue}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {pub.status}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {pub.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Paper
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-navy-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-navy-100 mb-6">
              Follow my latest research and publications in AR/VR collaborative systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://scholar.google.com/citations?user=foWdHhEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Google Scholar
              </a>
              <a
                href="https://www.researchgate.net/scientific-contributions/Hanieh-Rashidpour-2290353679"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                ResearchGate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;