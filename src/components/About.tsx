import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor, TrendingUp, Calendar, ExternalLink,
  ChevronRight, Info, X, GraduationCap, Leaf, Brain
} from 'lucide-react';
import { BentoCard, BentoCardHeader, BentoCardContent } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

// Import local images
import photo1 from '/horizon.png';
import photo2 from '/abrazo.jpg';
import photo3 from '/martin_lechuzas.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  // Photo cycling state
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const photoData = [
    {
      url: photo1,
      location: t('about.photoData.0.location'),
      date: t('about.photoData.0.date'),
      description: t('about.photoData.0.description'),
      pointofinterest: t('about.photoData.0.pointofinterest')
    },
    {
      url: photo2,
      location: t('about.photoData.1.location'),
      date: t('about.photoData.1.date'),
      description: t('about.photoData.1.description'),
      pointofinterest: t('about.photoData.1.pointofinterest')
    },
    {
      url: photo3,
      location: t('about.photoData.2.location'),
      date: t('about.photoData.2.date'),
      description: t('about.photoData.2.description'),
      pointofinterest: t('about.photoData.2.pointofinterest')
    },
  ];

  const photoPanelLabels = t('about.photoPanelLabels', { returnObjects: true }) as string[];
  const photoPanelIcons = t('about.photoPanelIcons', { returnObjects: true }) as string[];

  const handlePhotoChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photoData.length);
      setIsTransitioning(false);
    }, 150);
  };

  const toggleInfoPanel = () => setShowInfoPanel(!showInfoPanel);
  const currentPhoto = photoData[currentPhotoIndex];

  const specialties = [
    {
      icon: Monitor,
      key: 'frontend',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      key: 'dataAnalysis',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      key: 'seoMarketing',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const education = [
    { icon: '🎓', key: 'systemsEngineering', status: 'current' },
    { icon: '👨‍🏫', key: 'teachingDegree', status: 'current' },
    { icon: '🤖', key: 'aiDiploma', status: 'completed' },
  ];

  return (
    <BentoSection id="about" title={t('about.title')}>
      <BentoGrid columns={4} className="mb-12">
        {/* Who Am I - Main Card */}
        <BentoCard size="wide" delay={0} className="md:row-span-2">
          <BentoCardHeader
            icon={<Info size={20} />}
            title={t('about.whoAmI.title')}
          />
          <BentoCardContent>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
              <p>{t('about.intro.paragraph1')}</p>
              <p className="hidden md:block">{t('about.intro.paragraph2')}</p>
              <p className="hidden lg:block">{t('about.intro.paragraph3')}</p>
            </div>
          </BentoCardContent>
        </BentoCard>

        {/* Nature Connection - Photo Card */}
        <BentoCard size="tall" delay={1} hover={false} className="p-0 overflow-hidden">
          <div className="relative w-full h-full min-h-[300px]">
            {/* Photo */}
            <motion.img
              key={currentPhotoIndex}
              src={currentPhoto.url}
              alt="Martín in nature"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransitioning ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bento-dark via-transparent to-transparent" />

            {/* Photo indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photoData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentPhotoIndex ? 'bg-white scale-125' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={toggleInfoPanel}
                className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-primary/50 transition-colors"
                aria-label="Photo info"
              >
                <Info size={16} className="text-white" />
              </button>
              <button
                onClick={handlePhotoChange}
                className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-primary/50 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={16} className="text-white" />
              </button>
            </div>

            {/* Nature badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <Leaf size={14} className="text-secondary" />
              <span className="text-xs text-secondary font-medium">Nature</span>
            </div>

            {/* Info Panel */}
            <AnimatePresence>
              {showInfoPanel && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-x-4 bottom-12 bg-bento-card/95 backdrop-blur-md rounded-xl p-4 border border-bento-border"
                >
                  <button
                    onClick={toggleInfoPanel}
                    className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded"
                  >
                    <X size={14} className="text-gray-400" />
                  </button>
                  <p className="text-sm font-medium text-white mb-1">
                    {photoPanelLabels[0]} {currentPhotoIndex + 1} {photoPanelLabels[1]} {photoData.length}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span>{photoPanelIcons[0]} {currentPhoto.location}</span>
                    <span>{photoPanelIcons[1]} {currentPhoto.date}</span>
                  </div>
                  <p className="text-xs text-gray-300">{currentPhoto.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BentoCard>

        {/* Specialties Cards */}
        {specialties.map((specialty, index) => (
          <BentoCard key={specialty.key} delay={index + 2}>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4`}>
              <specialty.icon size={20} className="text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2 text-sm">
              {t(`about.specialties.items.${specialty.key}.title`)}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
              {t(`about.specialties.items.${specialty.key}.description`)}
            </p>
          </BentoCard>
        ))}
      </BentoGrid>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <GraduationCap className="text-primary" />
          {t('about.education.title')}
        </h3>

        <BentoGrid columns={3}>
          {education.map((edu, index) => (
            <BentoCard key={edu.key} delay={index}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">{edu.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-semibold text-white text-sm">
                      {t(`about.education.items.${edu.key}.title`)}
                    </h4>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${edu.status === 'current'
                      ? 'bg-secondary/20 text-secondary border border-secondary/30'
                      : 'bg-accent/20 text-accent border border-accent/30'
                      }`}>
                      {t(`about.education.status.${edu.status}`)}
                    </span>
                  </div>
                  <p className="text-primary text-xs font-medium mb-1">
                    {t(`about.education.items.${edu.key}.institution`)}
                  </p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                    <Calendar size={12} />
                    <span>{t(`about.education.items.${edu.key}.period`)}</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {t(`about.education.items.${edu.key}.description`)}
                  </p>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </motion.div>

      {/* CV CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="https://www.canva.com/design/DAGaIcXyFOk/EEEP-P69hocoVdRLNqCgWA/view"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>{t('about.cta.viewCV')}</span>
          <ExternalLink size={18} />
        </a>
      </motion.div>
    </BentoSection>
  );
};

export default About;