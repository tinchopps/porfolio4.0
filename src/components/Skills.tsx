import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Code, Database, Brain, Wrench, Server, Layers } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = t('skills.data', { returnObjects: true }) as {
    [key: string]: Array<{
      title: string;
      institution: string;
      date: string;
      duration: string;
      skills: string[];
      type: string;
    }>
  };

  const summary = t('skills.summary', { returnObjects: true }) as string[];

  const categories = [
    { key: 'frontend', icon: Code, label: t('skills.categories.frontend'), gradient: 'from-blue-500 to-cyan-500' },
    { key: 'backend', icon: Server, label: t('skills.categories.backend'), gradient: 'from-green-500 to-emerald-500' },
    { key: 'database', icon: Database, label: t('skills.categories.database'), gradient: 'from-purple-500 to-pink-500' },
    { key: 'ai', icon: Brain, label: t('skills.categories.ai'), gradient: 'from-amber-500 to-orange-500' },
    { key: 'devops', icon: Layers, label: t('skills.categories.devops'), gradient: 'from-red-500 to-rose-500' },
    { key: 'tools', icon: Wrench, label: t('skills.categories.tools'), gradient: 'from-indigo-500 to-violet-500' }
  ];

  const getTypeEmoji = (type: string) => {
    const map: Record<string, string> = {
      diploma: '🎓', specialization: '🎓', certification: '📜',
      course: '📚', project: '🚀', program: '🏛️', tool: '🛠️', 'self-study': '📖'
    };
    return map[type] || '📋';
  };

  const getTypeStyle = (type: string) => {
    const styles: Record<string, string> = {
      diploma: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      specialization: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      certification: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      course: 'bg-green-500/20 text-green-400 border-green-500/30',
      project: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      program: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      tool: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'self-study': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    };
    return styles[type] || styles.tool;
  };

  const currentCategory = categories.find(c => c.key === activeCategory);
  const currentSkills = skillsData[activeCategory] || [];

  return (
    <BentoSection id="skills" title={t('skills.title')}>
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => {
          const isActive = activeCategory === category.key;
          return (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${isActive
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                : 'bg-bento-card border border-bento-border text-gray-400 hover:text-white hover:border-primary/50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={16} />
              <span>{category.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <BentoGrid columns={3}>
            {currentSkills.map((item, index) => (
              <BentoCard key={`${activeCategory}-${index}`} delay={index * 0.5}>
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentCategory?.gradient} flex items-center justify-center text-lg shrink-0`}>
                    {getTypeEmoji(item.type)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm leading-tight mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-primary truncate">{item.institution}</p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-badge text-xs">
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 4 && (
                    <span className="tech-badge text-xs">+{item.skills.length - 4}</span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-bento-border">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-full border ${getTypeStyle(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </motion.div>
      </AnimatePresence>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <BentoGrid columns={3}>
          {summary.map((item, index) => {
            const parts = item.split(' ');
            const value = parts[0];
            const label = parts.slice(1).join(' ');
            const gradients = ['from-primary to-accent', 'from-accent to-secondary', 'from-secondary to-primary'];

            return (
              <BentoCard key={index} delay={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`}>
                  {value}
                </div>
                <div className="text-sm text-gray-400">{label}</div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </motion.div>
    </BentoSection>
  );
};

export default Skills;