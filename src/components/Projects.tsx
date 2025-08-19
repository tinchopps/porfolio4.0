import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import Modal from './Modal';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const projects = [

    {
      id: 'one_piece_quiz',
      image: '/op.png',
      status: 'completed',
      available: true,
      externalUrl: 'https://trivia-nakama.netlify.app/',
      githubUrl: 'https://github.com/tinchopps/one_piece_quiz_4.0'
    },
    {
      id: 'countdown',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'completed',
      available: true,
      externalUrl: 'https://hoziercountdown.netlify.app/',
      githubUrl: 'https://github.com/tinchopps/hosierCountdown'
    },
    {
      id: 'asistente_restaurante',
  image: '/bot_restaruante1.png',
      status: 'in-progress',
      available: true,
  externalUrl: 'https://github.com/tinchopps/asistente-restaurante/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/asistente-restaurante'
    },
    {
      id: 'ticket_support',
  image: '/ticket_support1.png',
      status: 'in-progress',
      available: true,
  externalUrl: 'https://github.com/tinchopps/ticket_support/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/ticket_support'
    },
    {
      id: 'bot_pedidos_whatsapp',
  image: '/order_bot.png',
      status: 'in-progress',
      available: true,
  externalUrl: 'https://github.com/tinchopps/bot_pedidos_whatsapp/blob/main/README.md',
      githubUrl: 'https://github.com/tinchopps/bot_pedidos_whatsapp'
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.available) {
        window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
        return;
      
      // Handle navigation for other available projects
      console.log('Navigate to project:', project.id);
    } else {
      // Show modal for in-progress projects
      setModalMessage(t('projects.inProgressMessage'));
      setModalOpen(true);
    }
  };

  const handleViewCode = (project: typeof projects[0]) => {
    if (project.available) {
      // Si es el proyecto de Hozier, abrir el link de GitHub
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
        return;
      // Handle GitHub navigation for other available projects
      console.log('Navigate to GitHub:', project.id);
    } else {
      // Show modal for in-progress projects
      setModalMessage(t('projects.inProgressMessage'));
      setModalOpen(true);
    }
  };

  const handleCardClick = (project: typeof projects[0]) => {
    if (!project.available) {
      setModalMessage(t('projects.inProgressMessage'));
      setModalOpen(true);
      return;
    }
  };

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('projects.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/50 dark:bg-gray-800/50 light:bg-white backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200 rounded-xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.items.${project.id}.title`)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-3 group-hover:text-purple-400 transition-colors">
                    {t(`projects.items.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 text-sm leading-relaxed">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const techs = t(`projects.items.${project.id}.tech`, { returnObjects: true });
                        if (!Array.isArray(techs)) return null;
                        return techs.map((tech: any, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-100 text-gray-300 dark:text-gray-300 light:text-gray-700 text-xs rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300"
                          >
                            {tech}
                          </span>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>{t('projects.viewProject')}</span>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewCode(project);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-600 dark:border-gray-600 light:border-gray-300 hover:border-purple-400 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-purple-400 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      <span>{t('projects.viewCode')}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚧</span>
          </div>
          <h3 id="modal-title" className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.modalTitle')}
          </h3>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            {modalMessage}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Projects;