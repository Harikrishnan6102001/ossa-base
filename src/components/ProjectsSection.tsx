
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const ProjectsSection = () => {
  const [sectionRef, inView] = useInView(0.2);
  const projects = [
    {
      title: "Automation SPM Machine",
      description: "Custom-designed tailored solutions for industrial automation processes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Industrial SPM Machine",
      description: "Task-specific customized machinery for enhanced manufacturing efficiency.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop"
    },
    {
      title: "SPM Cutting Machines",
      description: "High-precision cutting machines created off-shelf for various applications.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop"
    },
    {
      title: "SPM Drilling Machine",
      description: "Custom multi-head drilling machines for precision manufacturing needs.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
    },
    {
      title: "SPM Machine Control Panel",
      description: "Advanced control systems for Pharma, FMCG, Packaging, and Food Processing industries.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      title: "Software Solutions",
      description: "Comprehensive software solutions to operate computers and execute complex tasks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Showcasing our expertise in delivering cutting-edge automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn">
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
