
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechFlow Solutions",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead a team of 4 frontend developers in building responsive web applications",
        "Implemented modern React patterns and TypeScript resulting in 40% fewer bugs",
        "Collaborated with UX/UI designers to create pixel-perfect user interfaces",
        "Optimized application performance, reducing load times by 35%"
      ]
    },
    {
      company: "Digital Innovations Inc",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Worked closely with backend developers to integrate RESTful APIs",
        "Implemented responsive designs using CSS Grid and Flexbox",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Junior Frontend Developer",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Built user interfaces for a fast-growing SaaS platform",
        "Converted design mockups into functional React components",
        "Collaborated in an Agile development environment",
        "Gained experience with modern development tools and workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              
              <div className="bg-gray-800 rounded-lg p-6 ml-6 hover:bg-gray-750 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <h4 className="text-blue-400 font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
