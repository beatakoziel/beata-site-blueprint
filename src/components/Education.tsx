
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Kielce University",
      year: "2022",
      type: "degree",
      icon: GraduationCap
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Kielce University",
      year: "2021",
      type: "degree",
      icon: GraduationCap
    }
  ];

  const training = [
    {
      course: "Introduction to DDD",
      provider: "Bottega IT Minds",
      type: "training",
      icon: BookOpen
    },
    {
      course: "Testing Microservices",
      provider: "Bottega IT Minds",
      type: "training",
      icon: BookOpen
    },
    {
      course: "Apache Kafka",
      provider: "Bottega IT Minds",
      type: "training",
      icon: BookOpen
    },
    {
      course: "MongoDB Java Developer Path",
      provider: "MongoDB",
      type: "training",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Education & Training
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic background and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center">
              <GraduationCap className="mr-3" size={28} />
              Academic Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start mb-4">
                    <edu.icon className="text-purple-400 mr-3 mt-1" size={24} />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
              <Award className="mr-3" size={28} />
              T R A I N I N G S
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {training.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-center">
                    <course.icon className="text-blue-400 mx-auto mb-4" size={32} />
                    <h4 className="text-lg font-bold text-white mb-2">
                      {course.course}
                    </h4>
                    <p className="text-gray-300 mb-3">{course.provider}</p>
                    <span className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      Certified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700">
              <blockquote className="text-xl italic text-gray-300 leading-relaxed">
                "The more I learn, the more I realize how much I don't know."
              </blockquote>
              <cite className="text-purple-400 mt-4 block">– Einstein (probably)</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
