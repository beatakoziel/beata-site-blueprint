
import { Code, Database, Settings, TestTube } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: Database,
      skills: ["Kotlin", "Java", "Groovy", "Spring", "Kafka", "MongoDB"],
      color: "emerald"
    },
    {
      title: "Frontend",
      icon: Code,
      skills: ["Vue.js", "HTML", "CSS"],
      color: "blue"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Git", "Jira", "Docker", "Jenkins", "Grafana"],
      color: "purple"
    },
    {
      title: "Testing",
      icon: TestTube,
      skills: ["JUnit5", "Kotest", "Spock", "Testcontainers"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        icon: "text-emerald-400",
        hover: "hover:border-emerald-400/50"
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        icon: "text-blue-400",
        hover: "hover:border-blue-400/50"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        icon: "text-purple-400",
        hover: "hover:border-purple-400/50"
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        text: "text-orange-400",
        icon: "text-orange-400",
        hover: "hover:border-orange-400/50"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-6 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`${colorClasses.icon} mr-3`} size={24} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colorClasses.bg} ${colorClasses.text} px-3 py-2 rounded-md text-sm font-medium border ${colorClasses.border} transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-8 border border-emerald-500/20 max-w-4xl mx-auto">
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
