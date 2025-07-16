import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'pt', name: 'PT' },
    { code: 'ja', name: 'JA' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 backdrop-blur-md border-b border-gray-800/50 dark:border-gray-800/50 light:border-gray-300/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            ML
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 rounded-lg text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-purple-400 hover:bg-gray-800/10 dark:hover:bg-gray-800/10 light:hover:bg-gray-100/50 transition-all duration-200 font-medium"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors">
                <Globe size={18} />
                <span className="text-sm font-medium dark:text-gray-300 light:text-gray-600">{i18n.language.toUpperCase()}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 bg-gray-800/95 backdrop-blur-md rounded-lg border border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 transition-colors ${
                      i18n.language === lang.code ? 'text-purple-400' : 'text-gray-300'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800/95 dark:bg-gray-800/95 light:bg-white/95 backdrop-blur-md rounded-lg border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50">
            {['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full px-6 py-3 text-left text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-purple-400 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-100/50 transition-colors"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;