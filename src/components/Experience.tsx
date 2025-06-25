
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Symmetrical.AI",
      role: "Backend Developer",
      period: "2022 – now",
      description: "Kotlin, Kafka, Mongo, CI/CD stuff, led standups & refinements.",
      technologies: ["Kotlin", "Kafka", "MongoDB", "CI/CD"],
      isActive: true
    },
    {
      company: "Softy Labs",
      role: "Java Developer",
      period: "2020 – 2021",
      description: "Spring/Hibernate stuff + BLIK payment integration.",
      technologies: ["Java", "Spring", "Hibernate", "BLIK"],
      isActive: false
    },
    {
      company: "Rida Software",
      role: "Fullstack Intern",
      period: "2020",
      description: "Vue + C# + invoice PDF parser. Wild combo but it worked.",
      technologies: ["Vue.js", "C#", "PDF Processing"],
      isActive: false
    },
    {
      company: "Altar",
      role: "Email Microservice Intern",
      period: "2019",
      description: "IMAP sorcery + admin panel builder.",
      technologies: ["IMAP", "Microservices", "Admin Panel"],
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey through various companies and technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-emerald-400"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-800 left-2 md:left-1/2 md:transform md:-translate-x-1/2 ${
                  exp.isActive ? 'animate-pulse shadow-lg shadow-emerald-400/50' : ''
                }`}></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-emerald-400/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-emerald-400" size={16} />
                      <span className="text-emerald-400 font-medium">{exp.period}</span>
                      {exp.isActive && (
                        <span className="bg-emerald-400/20 text-emerald-400 px-2 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <h4 className="text-lg text-gray-300 mb-3">{exp.role}</h4>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
