import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-base md:text-lg">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Martín Lucero
            </div>
            <p className="text-gray-400 text-base md:text-lg">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:martinolm1999@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 md:mb-6 text-lg md:text-xl">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 md:mb-6 text-lg md:text-xl">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li>General Rodríguez, Buenos Aires</li>
              <li>Argentina</li>
              <li>
                <a href="mailto:martinolm1999@gmail.com" className="hover:text-purple-400 transition-colors">
                  martinolm1999@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-6 md:mb-6 text-lg md:text-xl">{t('footer.builtWith')}</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-base md:text-lg">
              © 2025 Martín Lucero. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-base md:text-lg flex items-center space-x-2 mt-2 md:mt-0">   
              <span>{t('footer.built')}</span>
              <Heart size={18} className="text-red-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;