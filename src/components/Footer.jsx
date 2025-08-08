import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
      ]
    },
    {
      title: 'Proyectos',
      links: [
        { name: 'TodoSuma', href: '#' },
        { name: 'App Municipal', href: '#' },
        { name: 'Sistema de Cine', href: '#' },
        { name: 'Quebrados', href: '#' },
      ]
    },
    {
      title: 'Contacto',
      links: [
        { name: 'Email', href: 'mailto:juan@email.com' },
        { name: 'GitHub', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'CV', href: '#' },
      ]
    }
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white relative overflow-hidden w-full">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 w-full">
          <div className="absolute inset-0 w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='15' cy='5' r='1'/%3E%3Ccircle cx='25' cy='5' r='1'/%3E%3Ccircle cx='35' cy='5' r='1'/%3E%3Ccircle cx='45' cy='5' r='1'/%3E%3Ccircle cx='55' cy='5' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container-max section-padding w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 w-full">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">Juan.dev</h3>
                <p className="text-gray-400 leading-relaxed">
                  Desarrollador Full Stack especializado en crear experiencias 
                  digitales excepcionales con tecnologías modernas.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'React Native', 'Laravel'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-sm">
                Disponible para proyectos freelance y oportunidades de colaboración.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Juan.dev</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Términos
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacidad
                </a>
                <span>•</span>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </>
  );
};

export default Footer;
