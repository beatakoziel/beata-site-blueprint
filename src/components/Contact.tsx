
import { Mail, MapPin, Linkedin, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "beatakoziel.contact@gmail.com",
      action: () => window.location.href = 'mailto:beatakoziel.contact@gmail.com',
      color: "purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kielce, Poland",
      action: () => {},
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      action: () => window.open('https://www.linkedin.com/in/bkozie%C5%82/', '_blank'),
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
        hover: "hover:border-purple-400/50 hover:shadow-purple-400/25"
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        icon: "text-blue-400",
        hover: "hover:border-blue-400/50 hover:shadow-blue-400/25"
      },
      indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        icon: "text-indigo-400",
        hover: "hover:border-indigo-400/50 hover:shadow-indigo-400/25"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss your next project or just want to say hello?
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const colorClasses = getColorClasses(method.color);
              const Icon = method.icon;
              
              return (
                <div
                  key={index}
                  onClick={method.action}
                  className={`${colorClasses.bg} rounded-lg p-6 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group`}
                >
                  <div className="text-center">
                    <Icon className={`${colorClasses.icon} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={32} />
                    <h3 className="text-lg font-bold text-white mb-2">
                      {method.label}
                    </h3>
                    <p className={`${colorClasses.text} font-medium`}>
                      {method.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm always interested in new opportunities and challenges. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            
            <Button
              onClick={() => window.location.href = 'mailto:beatakoziel.contact@gmail.com'}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
