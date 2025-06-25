import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Symmetrical.AI",
      role: "Backend Developer",
      period: "Jan 2022 – present",
      description: "Working in a multicultural team with English as the primary language, contributing to projects from the very beginning—gathering requirements, breaking down tasks, and driving implementation. Actively involved in Jira management, task breakdown, sprint planning. Led meetings such as daily standups, retrospectives, and refinements.",
      details: [
        "Developed and maintained services for automating HR processes, such as time-off management, employee data, and contract handling",
        "Worked on various tools to support development and operations, including integrations (Kafka, Slack), data import solutions, and utility libraries to streamline workflows across teams"
      ],
      technologies: ["Kotlin", "Apache Kafka", "MongoDB", "Spring Framework", "CI/CD", "Jira", "Slack"],
      isActive: true
    },
    {
      company: "Softy Labs",
      role: "Java Developer",
      period: "Apr 2020 – Dec 2021",
      description: "Worked on solutions for a mobile ticketing client and participated in the integration of the BLIK payment system into client platforms. Contributed to the development of both an internet panel for an insurance company and a charitable donation platform.",
      details: [
        "Mobile ticketing client solutions with payment integration",
        "BLIK payment system integration into multiple client platforms",
        "Insurance company internet panel development",
        "Charitable donation platform implementation"
      ],
      technologies: ["Java", "Spring Framework", "Hibernate", "BLIK", "HTML", "CSS", "Bootstrap"],
      isActive: false
    },
    {
      company: "Rida Software",
      role: "Junior Fullstack Developer",
      period: "Jul 2020 – Sep 2020",
      description: "Contributed to the development of a car dealer application and a PDF extractor for automated invoice data processing.",
      details: [
        "Car dealer application development with modern web technologies",
        "PDF data extraction automation for invoice processing",
        "Full-stack development using Vue.js and C#"
      ],
      technologies: ["Vue.js", "C#", ".NET Core", "MS SQL", "Visual Studio", "PDF Processing"],
      isActive: false
    },
    {
      company: "Altar",
      role: "Backend Developer Intern",
      period: "Jul 2019 – Aug 2019",
      description: "Developed an email microservice and admin panel, focusing on IMAP integration and message management.",
      details: [
        "Email microservice development with IMAP integration",
        "Admin panel builder for message management",
        "Microservices architecture implementation"
      ],
      technologies: ["Java", "Spring Framework", "RabbitMQ", "JUnit5", "Mockito", "Maven", "Git", "GitLab", "IntelliJ IDEA"],
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

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-400"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 md:mb-16 text-right"
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-800 left-2 md:left-1/2 md:transform md:-translate-x-1/2 ${
                  exp.isActive ? 'animate-pulse shadow-lg shadow-purple-400/50' : ''
                }`}></div>

                {/* Content card */}
                <div className="ml-12 md:ml-0 md:mr-12">
                  <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-purple-400/50">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      {exp.isActive && (
                        <span className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                      <span className="text-purple-400 font-medium">{exp.period}</span>
                      <Calendar className="text-purple-400" size={16} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 text-right">{exp.company}</h3>
                    <h4 className="text-lg text-gray-300 mb-4 text-right">{exp.role}</h4>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-right">
                      {exp.description}
                    </p>
                    
                    {exp.details && (
                      <div className="text-gray-400 mb-4 space-y-1 text-right">
                        {exp.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm leading-relaxed">
                            {detail} •
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-purple-400/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/20"
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
