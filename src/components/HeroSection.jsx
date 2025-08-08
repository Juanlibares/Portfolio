import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronDown } from 'lucide-react';
import data from '../data/data.json';
import { getImageUrl } from '../utils/imageUtils';

// Componente Hero Section
const HeroSection = () => {
  const { personal, socialMedia } = data;

  const iconMap = {
    Github,
    Linkedin,
    Mail
  };

  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="text-center w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse"></div>
              <img
                src={getImageUrl(personal.profileImage)}
                alt={`${personal.fullName} Profile`}
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 relative z-10"
              />
            </div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hola, soy{' '}
              <span className="gradient-text font-display">{personal.name}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personal.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary group">
                <span className="flex items-center gap-2">
                  Ver Proyectos
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialMedia.map(({ icon, url, label }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={url}
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:text-primary-500 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Flecha hacia abajo - fuera del contenedor principal */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
