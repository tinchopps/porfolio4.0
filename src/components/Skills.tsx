import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Award, ExternalLink, Code, Database, Brain, Monitor, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('frontend');

  // Obtener los datos de habilidades desde i18n
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

  // Obtener el array de resumen desde i18n
  const summary = t('skills.summary', { returnObjects: true }) as string[];

  const categories = [
    { key: 'frontend', icon: Code, label: t('skills.categories.frontend') },
    { key: 'backend', icon: Database, label: t('skills.categories.backend') },
    { key: 'database', icon: Database, label: t('skills.categories.database') },
    { key: 'ai', icon: Brain, label: t('skills.categories.ai') },
    { key: 'devops', icon: Monitor, label: 'DevOps' },
    { key: 'tools', icon: Wrench, label: t('skills.categories.tools') }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diploma':
      case 'specialization':
        return '🎓';
      case 'certification':
        return '📜';
      case 'course':
        return '📚';
      case 'project':
        return '🚀';
      case 'program':
        return '🏛️';
      case 'tool':
        return '🛠️';
      case 'self-study':
        return '📖';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'diploma':
      case 'specialization':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'certification':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'course':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'project':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'program':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'tool':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'self-study':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                <category.icon size={18} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="space-y-6">
            {skillsData[activeCategory as keyof typeof skillsData].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-purple-400 font-medium">{item.institution}</p>
                      </div>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{item.duration}</div>
                    <span className={`px-3 py-1 text-xs rounded-full border ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {summary.map((item, index) => {
              const parts = item.split(' ');
              const value = parts[0];
              const label = parts.slice(1).join(' ');
              
              return (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    index === 0 ? 'text-purple-400' : index === 1 ? 'text-blue-400' : 'text-green-400'
                  }`}>
                    {value}
                  </div>
                  <div className="text-gray-300">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;