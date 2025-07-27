
import { Wrench, Cog, Truck, Zap, Settings } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const [sectionRef, inView] = useInView(0.2);

  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Ink Filling Machine",
      description: "Precision ink filling machines designed for consistent and accurate dispensing.",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-400 to-purple-500",
      iconColor: "text-blue-400"
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Jig & Fixture Design Service",
      description: "Custom jig and fixture solutions to enhance manufacturing precision and efficiency.",
      gradient: "from-green-500 to-teal-600",
      hoverGradient: "from-green-400 to-teal-500",
      iconColor: "text-green-400"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Manufacturing of SPM",
      description: "Special Purpose Machines tailored to your specific manufacturing requirements.",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "from-purple-400 to-pink-500",
      iconColor: "text-purple-400"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Control Panel Work",
      description: "Advanced control panel systems for automated machinery and industrial processes.",
      gradient: "from-yellow-500 to-orange-600",
      hoverGradient: "from-yellow-400 to-orange-500",
      iconColor: "text-yellow-400"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Conveyors",
      description: "Custom conveyor systems designed for efficient material handling and workflow.",
      gradient: "from-red-500 to-pink-600",
      hoverGradient: "from-red-400 to-pink-500",
      iconColor: "text-red-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="text-white">Services</span>
          </h2>
          <p className={`text-xl text-blue-200 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive automation solutions designed to transform your manufacturing processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20 hover:border-white/40 overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className={`relative z-10 ${service.iconColor} mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-6">
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-24 transition-all duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
