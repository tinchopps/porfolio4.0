import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Database, Search, GraduationCap, Calendar, ExternalLink, Monitor, BarChart3, TrendingUp, ChevronLeft, ChevronRight, Info, X } from 'lucide-react';

// 1. Importa tus imágenes locales aquí:
import photo1 from '/horizon.png'; // Asegúrate de que la ruta sea correcta
import photo2 from '/abrazo.jpg';
import photo3 from '/martin_lechuzas.jpg';
// Agrega más si tienes más fotos

const About: React.FC = () => {
  const { t } = useTranslation();
  
  // Photo cycling state
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 2. Usa las imágenes importadas en el array photoData:
  const photoData = [
    {
      url: photo1,
      location: t('about.photoData.0.location'),
      date: t('about.photoData.0.date'),
      description: t('about.photoData.0.description'),
      pointofinterest: t('about.photoData.0.pointofinterest') // Agrega este campo si es necesario

    },
    {
      url: photo2,
      location: t('about.photoData.1.location'),
      date: t('about.photoData.1.date'),
      description: t('about.photoData.1.description'),
      pointofinterest: t('about.photoData.1.pointofinterest') // Agrega este campo si es necesario

    },
    {
      url: photo3,
      location: t('about.photoData.2.location'),
      date: t('about.photoData.2.date'),
      description: t('about.photoData.2.description'),
      pointofinterest: t('about.photoData.2.pointofinterest') // Agrega este campo si es necesario
    },
    // Agrega más objetos si tienes más fotos
  ];

  // Use i18n photo panel texts
  const photoPanelHints = t('about.photoPanelHints', { returnObjects: true }) as string[];
  const photoPanelLabels = t('about.photoPanelLabels', { returnObjects: true }) as string[];
  const photoPanelIcons = t('about.photoPanelIcons', { returnObjects: true }) as string[];
  
  // Photo cycling functionality
  const handlePhotoChange = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photoData.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };
  
  // Info panel toggle
  const toggleInfoPanel = () => {
    setShowInfoPanel(!showInfoPanel);
  };
  
  const currentPhoto = photoData[currentPhotoIndex];

  const specialties = [
    {
      icon: Monitor,
      key: 'frontend',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50'
    },
    {
      icon: BarChart3,
      key: 'dataAnalysis',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50'
    },
    {
      icon: TrendingUp,
      key: 'seoMarketing',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      hoverBorder: 'hover:border-green-500/50'
    },
  ];

  const education = [
    {
      icon: '🎓',
      key: 'systemsEngineering',
      status: 'current'
    },
    {
      icon: '👨‍🏫',
      key: 'teachingDegree',
      status: 'current'
    },
    {
      icon: '🤖',
      key: 'aiDiploma',
      status: 'completed'
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative">
        <div className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <div className="w-12 h-1 sm:w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 items-start mb-10 sm:mb-20">
            {/* Who Am I Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></span>
                  {t('about.whoAmI.title')}
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    {t('about.intro.paragraph1')}
                  </p>
                  <p>
                    {t('about.intro.paragraph2')}
                  </p>
                  <p>
                    {t('about.intro.paragraph3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Image/Avatar */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square relative">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-full border-2 sm:border-4 border-gray-600/50 overflow-hidden backdrop-blur-sm group">
                    <img
                      src={currentPhoto.url}
                      alt="Martín Lucero"
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                    
                    {/* Photo counter indicator */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {photoData.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentPhotoIndex 
                              ? 'bg-white shadow-lg' 
                              : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Upper floating button - Photo cycling */}
                  <button
                    onClick={handlePhotoChange}
                    aria-label="Change profile photo"
                    className="absolute -top-2 -right-2 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 dark:from-blue-500/25 dark:to-cyan-500/25 light:from-blue-500/35 light:to-cyan-500/35 backdrop-blur-md border-2 border-blue-400/40 dark:border-blue-400/40 light:border-blue-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:bg-gradient-to-br hover:from-blue-500/35 hover:to-cyan-500/35 hover:border-blue-400/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-blue-500/50 group animate-bounce-subtle"
                  >
                    <ChevronRight className="text-blue-300 dark:text-blue-300 light:text-blue-600 group-hover:text-blue-200 group-hover:translate-x-1 group-active:scale-90 transition-all duration-200 drop-shadow-sm" size={22} />
                  </button>
                  
                  {/* Lower floating button - Info panel */}
                  <button
                    onClick={toggleInfoPanel}
                    aria-label="Show photo details"
                    className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/25 to-pink-500/25 dark:from-purple-500/25 dark:to-pink-500/25 light:from-purple-500/35 light:to-pink-500/35 backdrop-blur-md border-2 border-purple-400/40 dark:border-purple-400/40 light:border-purple-500/50 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:bg-gradient-to-br hover:from-purple-500/35 hover:to-pink-500/35 hover:border-purple-400/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-purple-500/50 group animate-bounce-subtle"
                  >
                    <Info className="text-purple-300 dark:text-purple-300 light:text-purple-600 group-hover:text-purple-200 group-hover:scale-110 group-active:scale-90 transition-all duration-200 drop-shadow-sm" size={22} />
                  </button>
                  
                  {/* Information Panel */}
                  {showInfoPanel && (
                    <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 translate-y-full w-full max-w-xs sm:max-w-sm md:max-w-md z-50">
                      <div className="bg-white/90 dark:bg-gray-800/90 light:bg-white/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 light:border-gray-300/50 rounded-xl p-6 shadow-2xl animate-fade-in">
                        {/* Close button */}
                        <button
                          onClick={toggleInfoPanel}
                          aria-label="Close photo details"
                          className="absolute top-3 right-3 w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 light:hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded"
                        >
                          <X size={16} />
                        </button>
                        
                        {/* Panel content */}
                        <div className="space-y-4">
                          <div className="border-b border-gray-200/50 dark:border-gray-700/50 light:border-gray-300/50 pb-3">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white light:text-gray-900 mb-1">
                              {photoPanelLabels[0]} {currentPhotoIndex + 1} {photoPanelLabels[1]} {photoData.length}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 light:text-gray-600">
                              <span className="flex items-center space-x-1">
                                <span>{photoPanelIcons[0]}</span>
                                <span>{currentPhoto.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <span>{photoPanelIcons[1]}</span>
                                <span>{currentPhoto.date}</span>
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-gray-800 dark:text-gray-200 light:text-gray-800 mb-1">{photoPanelLabels[2]}</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                                {currentPhoto.description}
                              </p>
                              {currentPhoto.pointofinterest && (
                                <p className="text-xs text-purple-400 mt-2">
                                  {currentPhoto.pointofinterest}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          {/* Navigation hint */}
                          <div className="pt-3 border-t border-gray-200/50 dark:border-gray-700/50 light:border-gray-300/50">
                            <p className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500 text-center">
                              {photoPanelHints[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('about.specialties.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className={`group ${specialty.bgColor} backdrop-blur-sm border ${specialty.borderColor} ${specialty.hoverBorder} rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer`}
                >
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${specialty.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <specialty.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {t(`about.specialties.items.${specialty.key}.title`)}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t(`about.specialties.items.${specialty.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('about.education.title')}</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {t(`about.education.items.${edu.key}.title`)}
                        </h4>
                        {edu.status === 'current' && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                            {t('about.education.status.current')}
                          </span>
                        )}
                        {edu.status === 'completed' && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                            {t('about.education.status.completed')}
                          </span>
                        )}
                      </div>
                      <p className="text-purple-400 font-medium mb-1">{t(`about.education.items.${edu.key}.institution`)}</p>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                        <Calendar size={14} />
                        <span>{t(`about.education.items.${edu.key}.period`)}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{t(`about.education.items.${edu.key}.description`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://www.canva.com/design/DAGaIcXyFOk/EEEP-P69hocoVdRLNqCgWA/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 group"
            >
              <span>{t('about.cta.viewCV')}</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;