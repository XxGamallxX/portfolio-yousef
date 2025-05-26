
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Lightbulb, label: "Ideas Implemented", value: "100+" },
    { icon: Users, label: "Happy Clients", value: "25+" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate frontend developer with a keen eye for design and a love for clean, efficient code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a frontend developer with 5+ years of experience creating modern, responsive web applications. 
              My journey began with a curiosity about how websites work, and it has evolved into a passion for 
              crafting exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in React, TypeScript, and modern CSS frameworks. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest web technologies and best practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while planning my next project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <IconComponent className="text-blue-400 mx-auto mb-4" size={32} />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
