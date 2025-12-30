import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoBackground } from './BentoGrid';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [displayedRole, setDisplayedRole] = useState('');
  const roles = t('hero.roles', { returnObjects: true }) as string[];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedRole.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedRole, isTyping, roleIndex, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <BentoBackground />

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <BentoGrid columns={4} className="items-stretch">
          {/* Main Hero Card - Featured */}
          <BentoCard size="featured" delay={0} className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-primary font-medium text-sm">{t('hero.greeting')}</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Martín{' '}
                <span className="gradient-text">Lucero</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-8"
              >
                <span className="text-xl md:text-2xl text-gray-400 font-medium">
                  {displayedRole}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </motion.div>

              {/* Location */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <span className="text-lg">📍</span>
                {t('hero.location')}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                >
                  {t('hero.cta')}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary"
                >
                  {t('hero.viewWork')}
                </button>
              </motion.div>
            </div>
          </BentoCard>

          {/* Profile Picture Card */}
          <BentoCard size="tall" delay={1} className="flex items-center justify-center p-4">
            <div className="relative w-full aspect-square max-w-[280px]">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #8B5CF6, #3B82F6, #10B981, #8B5CF6)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full bg-bento-card rounded-full" />
              </motion.div>

              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-bento-card">
                <img
                  src="/perfil.jpg"
                  alt="Martín Lucero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BentoCard>

          {/* Status Card */}
          <BentoCard delay={2} className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="status-dot status-dot-available" />
              <span className="text-secondary font-medium text-sm">
                {t('contact.info.availability')}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero.statusDescription')}
            </p>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard delay={3} className="flex flex-col justify-center">
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              {t('hero.connectHeader')}
            </h4>
            <div className="flex gap-3">
              <a
                href="mailto:martinolm1999@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tinchopps"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </BentoCard>

          {/* Quick Stats Card */}
          <BentoCard size="wide" delay={4} className="flex items-center">
            <div className="grid grid-cols-3 gap-6 w-full text-center">
              <div>
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-gray-400 mt-1">{t('experience.stats.yearsExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400 mt-1">{t('experience.stats.projectsCompleted')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-gray-400 mt-1">{t('experience.stats.industriesSectors')}</div>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
