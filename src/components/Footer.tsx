import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  const techStack = ['React', 'TypeScript', 'Tailwind', 'Vite', 'Framer Motion'];

  return (
    <footer className="bg-bento-dark border-t border-bento-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold gradient-text">Martín Lucero</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:martinolm1999@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer.builtWith')}</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bento-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Martín Lucero. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-xs flex items-center gap-1">
              {t('footer.built')}
              <Heart size={12} className="text-red-400" />
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-bento-card border border-bento-border rounded-lg hover:border-primary hover:text-primary transition-colors text-gray-400"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;