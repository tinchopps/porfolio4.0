import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, GraduationCap, ShoppingCart, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>('fullstack-freelance');

  const experiences = [
    {
      id: 'fullstack-freelance',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'interpreter',
      icon: MessageCircle,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'educator',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'entrepreneur',
      icon: ShoppingCart,
      gradient: 'from-orange-500 to-red-500',
    }
  ];

  return (
    <BentoSection id="experience" title={t('experience.title')}>
      <div className="max-w-4xl mx-auto space-y-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          const ExpIcon = exp.icon;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`bento-card cursor-pointer transition-all duration-300 ${isExpanded ? 'ring-2 ring-primary/50' : ''
                  }`}
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              >
                {/* Header - Always visible */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shrink-0`}>
                      <ExpIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">
                        {t(`experience.items.${exp.id}.role`)}
                      </h3>
                      <p className="text-sm text-primary">
                        {t(`experience.items.${exp.id}.company`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{t(`experience.items.${exp.id}.period`)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{t(`experience.items.${exp.id}.location`)}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-bento-border space-y-4">
                        {/* Mobile date/location */}
                        <div className="sm:hidden flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {t(`experience.items.${exp.id}.period`)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {t(`experience.items.${exp.id}.location`)}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {t(`experience.items.${exp.id}.description`)}
                        </p>

                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">{t('experience.keyResponsibilities')}:</h4>
                          <ul className="space-y-1">
                            {(t(`experience.items.${exp.id}.responsibilities`, { returnObjects: true }) as string[]).slice(0, 3).map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        {(() => {
                          const skills = t(`experience.items.${exp.id}.skills`, { returnObjects: true, defaultValue: [] }) as string[];
                          if (skills.length === 0) return null;
                          return (
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill, i) => (
                                <span key={i} className="tech-badge text-xs">{skill}</span>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <BentoGrid columns={3}>
          <BentoCard delay={0} className="text-center">
            <div className="text-4xl font-bold gradient-text mb-1">6+</div>
            <div className="text-sm text-gray-400">{t('experience.stats.yearsExperience')}</div>
          </BentoCard>
          <BentoCard delay={1} className="text-center">
            <div className="text-4xl font-bold gradient-text mb-1">50+</div>
            <div className="text-sm text-gray-400">{t('experience.stats.projectsCompleted')}</div>
          </BentoCard>
          <BentoCard delay={2} className="text-center">
            <div className="text-4xl font-bold gradient-text mb-1">4+</div>
            <div className="text-sm text-gray-400">{t('experience.stats.industriesSectors')}</div>
          </BentoCard>
        </BentoGrid>
      </motion.div>
    </BentoSection>
  );
};

export default Experience;