import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Heart, Lightbulb, Users, GraduationCap, Rocket } from 'lucide-react';

const MoreAbout: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: GraduationCap,
      key: 'continuousLearning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      key: 'growthMindset',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      key: 'teamwork',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      key: 'practicalCreativity',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🌟 {t('moreAbout.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          {/* Quote Section */}
          <div className="mb-16">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-6xl text-purple-500/20 font-serif">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-purple-500/20 font-serif rotate-180">"</div>
              
              <blockquote className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 italic">
                  {t('moreAbout.quote.text')}
                </p>
                <footer className="text-purple-400 font-medium text-lg">
                  {t('moreAbout.quote.author')}
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="mb-16">
            <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
                {t('moreAbout.philosophy')}
              </p>

              {/* Values Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="text-white" size={24} />
                      </div>
                      <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                        {t(`moreAbout.values.${value.key}`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Placeholder */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('moreAbout.testimonials.title')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-3 italic">
                      {t('moreAbout.testimonials.testimonial1.text')}
                    </p>
                    <div>
                      <p className="text-white font-medium">{t('moreAbout.testimonials.testimonial1.name')}</p>
                      <p className="text-purple-400 text-sm">{t('moreAbout.testimonials.testimonial1.role')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">AM</span>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-3 italic">
                      {t('moreAbout.testimonials.testimonial2.text')}
                    </p>
                    <div>
                      <p className="text-white font-medium">{t('moreAbout.testimonials.testimonial2.name')}</p>
                      <p className="text-green-400 text-sm">{t('moreAbout.testimonials.testimonial2.role')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Human CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('moreAbout.cta.title')}
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                {t('moreAbout.cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-3"
                >
                  <MessageCircle size={20} className="group-hover:animate-bounce" />
                  <span>{t('moreAbout.cta.button')}</span>
                </button>
                
                <div className="flex items-center space-x-2 text-gray-400">
                  <Heart size={16} className="text-red-400" />
                  <span className="text-sm">{t('moreAbout.cta.responseTime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;