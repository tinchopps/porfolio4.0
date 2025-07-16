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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Martín Lucero
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
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
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
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
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
            <h3 className="text-white font-semibold mb-4">{t('footer.builtWith')}</h3>
            <div className="flex flex-wrap gap-2">
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
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Martín Lucero. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1 mt-2 md:mt-0">
              <span>{t('footer.built')}</span>
              <Heart size={14} className="text-red-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;