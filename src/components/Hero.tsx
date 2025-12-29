import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
<div className="
  absolute inset-0 
  bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20
  bg-hero-gradient
"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-12 sm:py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-purple-400 font-medium text-lg">{t('hero.greeting')}</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Martín Omar<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Lucero</span>
              </h1>
              <p className="text-xl text-gray-300 font-medium">{t('hero.role')}</p>
              <p className="text-gray-400 flex items-center">
                📍 {t('hero.location')}
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed w-full sm:max-w-lg md:max-w-xl">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-8 py-3 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                {t('hero.viewWork')}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:martinolm1999@gmail.com"
                className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 group"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-purple-400" />
              </a>
              <a
                href="https://github.com/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 group"
              >
                <Github size={20} className="text-gray-400 group-hover:text-purple-400" />
              </a>
              <a
                href="https://linkedin.com/in/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 group"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-purple-400" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border-4 border-gray-600 overflow-hidden">
                <img
                  src="/perfil.jpg" // Cambiado de 'src/perfil.jpg'
                  alt="Martín Lucero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
