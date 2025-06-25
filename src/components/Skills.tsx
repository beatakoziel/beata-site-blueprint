import { Code, Database, Settings, TestTube } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend & Testing",
            icon: Database,
            skills: [
                "Kotlin", "Java", "Groovy", "Spring Framework", "Apache Kafka",
                "MongoDB", "MySQL", "PostgreSQL", "Elasticsearch",
                "JUnit5", "Kotest", "Spock", "Testcontainers", "Mockito", "RestAssured"
            ],
            color: "purple"
        },
        {
            title: "Dev Tools & CI/CD",
            icon: Settings,
            skills: [
                "Git", "GitHub", "GitLab", "Bitbucket",
                "Docker", "Jenkins", "Gradle", "Maven",
                "Jira", "Grafana", "Postman", "IntelliJ IDEA", "Visual Studio",
                "Copilot", "Junie"
            ],
            color: "indigo"
        }
    ];


  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        icon: "text-purple-400",
        hover: "hover:border-purple-400/50"
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        icon: "text-blue-400",
        hover: "hover:border-blue-400/50"
      },
      indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        icon: "text-indigo-400",
        hover: "hover:border-indigo-400/50"
      },
      violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        text: "text-violet-400",
        icon: "text-violet-400",
        hover: "hover:border-violet-400/50"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills & Tech
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

          <div className="px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto place-items-center">
                  {skillCategories.map((category, index) => {
                      const colorClasses = getColorClasses(category.color);
                      const Icon = category.icon;

                      return (
                          <div
                              key={index}
                              className={`w-full bg-gray-800 rounded-xl p-6 h-full border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col`}
                          >
                              <div className="flex items-center mb-4">
                                  <Icon className={`${colorClasses.icon} mr-3`} size={24} />
                                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                              </div>

                              <div className="flex flex-wrap gap-2 mt-auto">
                                  {category.skills.map((skill, skillIndex) => (
                                      <div
                                          key={skillIndex}
                                          className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1.5 rounded-md text-sm font-medium border ${colorClasses.border} transition-all duration-200 hover:scale-105`}
                                      >
                                          {skill}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>


        {/* Additional highlight section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-8 border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about clean code, backend architecture, and staying up-to-date with the latest technologies. 
              Currently exploring advanced Kafka patterns and distributed systems design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
