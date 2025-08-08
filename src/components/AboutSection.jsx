import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import data from '../data/data.json';

const AboutSection = () => {
  const { personal, skills, stats, experience } = data;
  
  const iconMap = {
    Globe,
    Server,
    Database,
    Smartphone,
    Code,
    Palette
  };

  const skillsWithIcons = skills.map(skill => ({
    ...skill,
    icon: iconMap[skill.icon]
  }));

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 w-full overflow-hidden">
      <div className="container-max section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-lg text-white mx-auto">
            Soy un desarrollador apasionado por crear soluciones digitales innovadoras. 
            Con experiencia en desarrollo web y móvil, me especializo en construir 
            aplicaciones escalables y experiencias de usuario excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="card">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-20"></div>
                  <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{personal.title}</h3>
                <p className="text-white">
                  {personal.experience}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Proyectos Completados</span>
                  <span className="font-semibold text-primary-600">{stats.projects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Tecnologías</span>
                  <span className="font-semibold text-primary-600">{stats.technologies}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Clientes Satisfechos</span>
                  <span className="font-semibold text-primary-600">{stats.clients}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skillsWithIcons.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mr-3">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experiencia Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Mi <span className="gradient-text">Experiencia</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-accent-500 h-full"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card">
                      <div className="mb-2">
                        <span className="text-primary-500 font-semibold text-sm">{exp.year}</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-white">{exp.title}</h4>
                      <p className="text-white mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="skill-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
