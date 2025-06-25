
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual PDF
    console.log('Downloading CV...');
    // You would typically have a PDF file in the public folder
    // const link = document.createElement('a');
    // link.href = '/cv.pdf';
    // link.download = 'Beata_Koziel_CV.pdf';
    // link.click();
  };

  const handleContact = () => {
    window.location.href = 'mailto:beatakoziel.contact@gmail.com';
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent leading-tight">
              Hi, I'm Beata,
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">Software Engineer.</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-purple-400">
              Make it done is my mantra.
            </p>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              As Software Developer I'm focused on creating solutions that truly meet user needs and drive value. I believe we can accomplish much more together :)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Button
              onClick={handleDownloadCV}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            
            <Button
              onClick={handleContact}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
