import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Lightbulb, Users, GraduationCap, Rocket } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

const MoreAbout: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    { icon: GraduationCap, key: 'continuousLearning', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, key: 'growthMindset', gradient: 'from-purple-500 to-pink-500' },
    { icon: Users, key: 'teamwork', gradient: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, key: 'practicalCreativity', gradient: 'from-orange-500 to-red-500' },
  ];

  const testimonials = [
    { key: 'testimonial1', initials: 'MG', gradient: 'from-purple-500 to-blue-500' },
    { key: 'testimonial2', initials: 'EM', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <BentoSection title={`🌟 ${t('moreAbout.title')}`}>
      <BentoGrid columns={2} className="mb-12">
        {/* Quote Card */}
        <BentoCard size="wide" delay={0} className="relative overflow-hidden">
          <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">"</div>
          <div className="absolute bottom-4 right-4 text-6xl text-primary/10 font-serif rotate-180">"</div>

          <div className="relative z-10 text-center py-6">
            <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-4 italic">
              {t('moreAbout.quote.text')}
            </blockquote>
            <footer className="text-primary font-medium">
              {t('moreAbout.quote.author')}
            </footer>
          </div>
        </BentoCard>

        {/* Philosophy */}
        <BentoCard size="wide" delay={1}>
          <p className="text-gray-300 leading-relaxed mb-6 text-center">
            {t('moreAbout.philosophy')}
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <value.icon size={18} className="text-white" />
                </div>
                <p className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {t(`moreAbout.values.${value.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </BentoCard>

        {/* Testimonials */}
        {testimonials.map((testimonial, index) => (
          <BentoCard key={testimonial.key} delay={index + 2}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shrink-0`}>
                <span className="text-white font-bold text-sm">{testimonial.initials}</span>
              </div>
              <div>
                <p className="text-gray-300 text-sm italic mb-3 line-clamp-3">
                  "{t(`moreAbout.testimonials.${testimonial.key}.text`)}"
                </p>
                <p className="text-white font-medium text-sm">
                  {t(`moreAbout.testimonials.${testimonial.key}.name`)}
                </p>
                <p className="text-primary text-xs">
                  {t(`moreAbout.testimonials.${testimonial.key}.role`)}
                </p>
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bento-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {t('moreAbout.cta.title')}
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            {t('moreAbout.cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>{t('moreAbout.cta.button')}</span>
            </motion.button>

            <span className="flex items-center gap-2 text-gray-500 text-sm">
              <Heart size={14} className="text-red-400" />
              <span>{t('moreAbout.cta.responseTime')}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </BentoSection>
  );
};

export default MoreAbout;