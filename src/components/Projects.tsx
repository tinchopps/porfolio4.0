import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Bot, Code2, Globe } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';
import Modal from './Modal';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Project categories for visual distinction
  const getCategoryIcon = (id: string) => {
    if (id.includes('bot') || id.includes('asistente') || id.includes('chatbot')) {
      return { icon: Bot, gradient: 'from-purple-500 to-pink-500' };
    }
    if (id.includes('quiz') || id.includes('trivia')) {
      return { icon: Sparkles, gradient: 'from-amber-500 to-orange-500' };
    }
    if (id.includes('ticket') || id.includes('support')) {
      return { icon: Code2, gradient: 'from-blue-500 to-cyan-500' };
    }
    return { icon: Globe, gradient: 'from-green-500 to-emerald-500' };
  };

  const projects = [
    {
      id: 'one_piece_quiz',
      image: '/op.png',
      status: 'completed',
      available: true,
      externalUrl: 'https://trivia-nakama.netlify.app/',
      githubUrl: 'https://github.com/tinchopps/one_piece_quiz_4.0',
      featured: true,
    },
    {
      id: 'asistente_restaurante',
      image: '/bot_restaruante1.png',
      status: 'completed',
      available: true,
      externalUrl: 'https://github.com/tinchopps/asistente-restaurante/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/asistente-restaurante',
      featured: true,
    },
    {
      id: 'countdown',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'completed',
      available: true,
      externalUrl: 'https://hoziercountdown.netlify.app/',
      githubUrl: 'https://github.com/tinchopps/hosierCountdown',
    },
    {
      id: 'ticket_support',
      image: '/ticket_support1.png',
      status: 'in-progress',
      available: true,
      externalUrl: 'https://github.com/tinchopps/ticket_support/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/ticket_support',
    },
    {
      id: 'bot_pedidos_whatsapp',
      image: '/order_bot.png',
      status: 'in-progress',
      available: true,
      externalUrl: 'https://github.com/tinchopps/bot_pedidos_whatsapp/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/bot_pedidos_whatsapp',
    },
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.available) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalMessage(t('projects.inProgressMessage'));
      setModalOpen(true);
    }
  };

  const handleViewCode = (project: typeof projects[0], e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.available) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalMessage(t('projects.inProgressMessage'));
      setModalOpen(true);
    }
  };

  return (
    <>
      <BentoSection id="projects" title={t('projects.title')}>
        <BentoGrid columns={3}>
          {projects.map((project, index) => {
            const category = getCategoryIcon(project.id);
            const CategoryIcon = category.icon;

            return (
              <BentoCard
                key={project.id}
                size={project.featured ? 'wide' : 'default'}
                delay={index}
                className="group cursor-pointer p-0 overflow-hidden"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={t(`projects.items.${project.id}.title`)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bento-card via-bento-card/50 to-transparent" />

                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 p-2 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                    <CategoryIcon size={16} className="text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'completed'
                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                      {project.status === 'completed' ? '✓ Live' : '⚡ WIP'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {t(`projects.items.${project.id}.title`)}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(() => {
                      const techs = t(`projects.items.${project.id}.tech`, { returnObjects: true });
                      if (!Array.isArray(techs)) return null;
                      return techs.slice(0, 4).map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ));
                    })()}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{t('projects.viewProject')}</span>
                    </button>
                    <button
                      onClick={(e) => handleViewCode(project, e)}
                      className="p-2 border border-bento-border hover:border-primary text-gray-400 hover:text-primary rounded-lg transition-colors"
                      aria-label="View code on GitHub"
                    >
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </BentoSection>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚧</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            {t('projects.modalTitle')}
          </h3>
          <p className="text-gray-300">
            {modalMessage}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Projects;