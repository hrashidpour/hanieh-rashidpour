import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'Augusta University',
      location: 'Augusta, GA, USA',
      period: '2022 - Present',
      focus: 'Collaborative Systems in Virtual and Augmented Reality',
      details: [
        'Research focus on multi-user VR/AR interaction systems',
        'Graduate Research Assistant'
      ],
      status: 'current'
    },
    {
      degree: 'Master of Science in System Telecommunication Engineering',
      institution: 'Malek University',
      location: 'Tehran, Iran',
      period: '2018 - 2021',
      focus: 'Providing a Method for Identification and Classification of Media Access Control (MAC) Protocols in ISM band',
      status: 'completed'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Bu-Ali Sina University',
      location: 'Hamedan, Iran',
      period: '2012 - 2016',
      focus: 'Studying and Assessing on Ultrasonic Sensors',
      status: 'completed'
    }
  ];

  const achievements = [
    {
      title: 'Graduate Research Assistant',
      organization: 'Augusta University',
      description: 'Full research assistantship for PhD studies in AR/VR collaboration'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-6">Education & Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Academic journey and recognition in computer science and AR/VR research
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-navy-800 mb-8">Academic Background</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        edu.status === 'current' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        <GraduationCap size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-xl font-semibold text-navy-800">{edu.degree}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === 'current'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {edu.status === 'current' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-3">
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {edu.institution}, {edu.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-navy-700 font-medium mb-3">{edu.focus}</p>
                        <ul className="space-y-1">
                          {edu.details?.map((detail, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-8">Recognition & Roles</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-navy-100 p-2 rounded-lg">
                        <Award className="text-navy-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-800 mb-1">{achievement.title}</h4>
                        <p className="text-sm text-navy-600 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-navy-600 to-blue-700 rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-3">Research Interests</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                    Virtual Reality Systems
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                    Augmented Reality Interfaces
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                    Collaborative Computing
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                    Human-Computer Interaction
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                    Mixed Reality Applications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;