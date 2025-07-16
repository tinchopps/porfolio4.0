import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Globe, MessageCircle, GraduationCap, ShoppingCart, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 'fullstack-freelance',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50'
    },
    {
      id: 'interpreter',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      hoverBorder: 'hover:border-green-500/50'
    },
    {
      id: 'educator',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50'
    },
    {
      id: 'entrepreneur',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      hoverBorder: 'hover:border-orange-500/50'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('experience.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`group ${exp.bgColor} backdrop-blur-sm border ${exp.borderColor} ${exp.hoverBorder} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Timeline */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      <exp.icon className="text-white" size={28} />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                          {t(`experience.items.${exp.id}.role`)}
                        </h3>
                        <p className="text-purple-400 font-medium text-lg mb-2">
                          {t(`experience.items.${exp.id}.company`)}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar size={16} />
                          <span className="font-medium">{t(`experience.items.${exp.id}.period`)}</span>
                        </div>
                        {t(`experience.items.${exp.id}.location`) && (
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin size={16} />
                            <span className="text-sm">{t(`experience.items.${exp.id}.location`)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {t(`experience.items.${exp.id}.description`)}
                      </p>
                      
                      {/* Key Responsibilities */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">{t('experience.keyResponsibilities')}:</h4>
                        <ul className="space-y-2">
                          {t(`experience.items.${exp.id}.responsibilities`, { returnObjects: true }).map((responsibility: string, respIndex: number) => (
                            <li key={respIndex} className="flex items-start space-x-3 text-gray-300">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Results (if available) */}
                      {t(`experience.items.${exp.id}.results`, { returnObjects: true, defaultValue: [] }).length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">{t('experience.keyResults')}:</h4>
                          <ul className="space-y-2">
                            {t(`experience.items.${exp.id}.results`, { returnObjects: true }).map((result: string, resultIndex: number) => (
                              <li key={resultIndex} className="flex items-start space-x-3 text-gray-300">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills Developed */}
                      {t(`experience.items.${exp.id}.skills`, { returnObjects: true, defaultValue: [] }).length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">{t('experience.skillsDeveloped')}:</h4>
                          <div className="flex flex-wrap gap-2">
                            {t(`experience.items.${exp.id}.skills`, { returnObjects: true }).map((skill: string, skillIndex: number) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-100 text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-300">{t('experience.stats.yearsExperience')}</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">{t('experience.stats.projectsCompleted')}</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300">{t('experience.stats.industriesSectors')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;