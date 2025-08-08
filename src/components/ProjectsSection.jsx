import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import data from '../data/data.json';
import { getImageUrl } from '../utils/imageUtils';

const ProjectsSection = () => {
  const { projects } = data;
  
  const iconMap = {
    Database,
    Smartphone,
    Globe
  };
  
  const projectsWithIcons = projects.map(project => ({
    ...project,
    icon: iconMap[project.icon]
  }));

  const [filter, setFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projectsWithIcons);

  React.useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsWithIcons);
    } else {
      setFilteredProjects(projectsWithIcons.filter(project => 
        project.category.toLowerCase().includes(filter.toLowerCase())
      ));
    }
  }, [filter, projectsWithIcons]);

  const categories = ['all', 'web app', 'mobile app'];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
      <div className="container-max section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-lg text-white mx-auto mb-8">
            Una selección de proyectos que demuestran mi experiencia en desarrollo 
            web y móvil, desde aplicaciones empresariales hasta soluciones educativas.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Proyectos <span className="gradient-text">Destacados</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsWithIcons.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={getImageUrl(project.image)} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.links.demo}
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.links.github}
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <project.icon className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-primary-500">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-white mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="skill-badge text-xs">
                        +{project.tech.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={getImageUrl(project.image)} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <a 
                    href={project.links.demo}
                    className="w-8 h-8 rounded-full glass-effect flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.links.github}
                    className="w-8 h-8 rounded-full glass-effect flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center mb-2">
                <project.icon className="w-4 h-4 text-primary-500 mr-2" />
                <span className="text-xs font-medium text-primary-500">{project.category}</span>
              </div>
              
              <h3 className="font-bold mb-2 group-hover:text-primary-500 transition-colors text-white">
                {project.title}
              </h3>
              
              <p className="text-sm text-white mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="skill-badge text-xs">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
