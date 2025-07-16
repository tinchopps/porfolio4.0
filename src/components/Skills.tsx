import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Award, ExternalLink, Code, Database, Brain, Monitor, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      {
        title: 'Especialización en Programación Web',
        institution: 'CFP 401',
        date: '2024',
        duration: '6 meses',
        skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
        type: 'specialization'
      },
      {
        title: 'Programación Frontend',
        institution: 'Digital House',
        date: '2023',
        duration: '4 meses',
        skills: ['React', 'Redux', 'Webpack', 'SASS'],
        type: 'course'
      },
      {
        title: 'Desarrollo Web Frontend',
        institution: 'Potrero Digital',
        date: '2023',
        duration: '3 meses',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        type: 'course'
      },
      {
        title: 'Responsive Web Design',
        institution: 'FreeCodeCamp',
        date: '2022',
        duration: '300 horas',
        skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Accessibility'],
        type: 'certification'
      },
      {
        title: 'Bootstrap Framework',
        institution: 'FreeCodeCamp',
        date: '2022',
        duration: '50 horas',
        skills: ['Bootstrap 5', 'Component System', 'Grid System'],
        type: 'certification'
      },
      {
        title: 'JavaScript Algorithms',
        institution: 'SoloLearn',
        date: '2022',
        duration: '40 horas',
        skills: ['ES6+', 'DOM Manipulation', 'Async/Await'],
        type: 'certification'
      }
    ],
    backend: [
      {
        title: 'Node.js Development',
        institution: 'Digital House',
        date: '2023',
        duration: '3 meses',
        skills: ['Express.js', 'REST APIs', 'Middleware', 'Authentication'],
        type: 'course'
      },
      {
        title: 'Python Programming',
        institution: 'SoloLearn',
        date: '2023',
        duration: '60 horas',
        skills: ['Python 3', 'OOP', 'Libraries', 'Data Structures'],
        type: 'certification'
      },
      {
        title: 'PHP Web Development',
        institution: 'FreeCodeCamp',
        date: '2022',
        duration: '80 horas',
        skills: ['PHP 8', 'MySQL Integration', 'MVC Pattern'],
        type: 'certification'
      },
      {
        title: 'FastAPI Framework',
        institution: 'Autodidacta',
        date: '2024',
        duration: 'Proyecto personal',
        skills: ['FastAPI', 'Pydantic', 'Async Programming'],
        type: 'project'
      }
    ],
    database: [
      {
        title: 'PostgreSQL Administration',
        institution: 'Digital House',
        date: '2023',
        duration: '2 meses',
        skills: ['SQL Queries', 'Database Design', 'Performance Tuning'],
        type: 'course'
      },
      {
        title: 'MongoDB Fundamentals',
        institution: 'SoloLearn',
        date: '2023',
        duration: '40 horas',
        skills: ['NoSQL', 'Aggregation', 'Indexing'],
        type: 'certification'
      },
      {
        title: 'SQL Database Design',
        institution: 'FreeCodeCamp',
        date: '2022',
        duration: '100 horas',
        skills: ['Relational Design', 'Normalization', 'Complex Queries'],
        type: 'certification'
      },
      {
        title: 'Firebase Integration',
        institution: 'Proyecto Chatbot UNLu',
        date: '2024',
        duration: 'Implementación práctica',
        skills: ['Firestore', 'Real-time Database', 'Authentication'],
        type: 'project'
      }
    ],
    ai: [
      {
        title: 'Diplomatura en IA Generativa',
        institution: 'Google & Universidad Nacional del Salvador',
        date: '2024',
        duration: '6 meses',
        skills: ['Gemini AI', 'BigQuery', 'GCP', 'Prompt Engineering'],
        type: 'diploma'
      },
      {
        title: 'Machine Learning Fundamentals',
        institution: 'SoloLearn',
        date: '2024',
        duration: '50 horas',
        skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Data Preprocessing'],
        type: 'certification'
      },
      {
        title: 'OpenAI API Integration',
        institution: 'Proyecto Chatbot Académico',
        date: '2024',
        duration: 'Implementación práctica',
        skills: ['GPT-4', 'Embeddings', 'Fine-tuning', 'RAG'],
        type: 'project'
      },
      {
        title: 'Natural Language Processing',
        institution: 'Autodidacta',
        date: '2024',
        duration: 'Estudio continuo',
        skills: ['NLTK', 'spaCy', 'Text Analysis', 'Sentiment Analysis'],
        type: 'self-study'
      }
    ],
    devops: [
      {
        title: 'Docker Containerization',
        institution: 'Digital House',
        date: '2023',
        duration: '1 mes',
        skills: ['Docker', 'Docker Compose', 'Container Orchestration'],
        type: 'course'
      },
      {
        title: 'AWS Cloud Fundamentals',
        institution: 'SoloLearn',
        date: '2023',
        duration: '30 horas',
        skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
        type: 'certification'
      },
      {
        title: 'Git Version Control',
        institution: 'FreeCodeCamp',
        date: '2022',
        duration: '20 horas',
        skills: ['Git', 'GitHub', 'Branching', 'Collaboration'],
        type: 'certification'
      },
      {
        title: 'CI/CD Pipelines',
        institution: 'Proyecto Personal',
        date: '2024',
        duration: 'Implementación práctica',
        skills: ['GitHub Actions', 'Automated Testing', 'Deployment'],
        type: 'project'
      }
    ],
    tools: [
      {
        title: 'Soporte Informático',
        institution: 'Potrero Digital & Cisco',
        date: '2023',
        duration: '4 meses',
        skills: ['Hardware', 'Redes', 'Troubleshooting', 'Help Desk'],
        type: 'course'
      },
      {
        title: 'Argentina Programa',
        institution: 'Gobierno Nacional',
        date: '2022',
        duration: '6 meses',
        skills: ['Fundamentos IT', 'Lógica de Programación', 'Metodologías'],
        type: 'program'
      },
      {
        title: 'Visual Studio Code',
        institution: 'Uso profesional',
        date: 'Continuo',
        duration: 'Herramienta principal',
        skills: ['Extensions', 'Debugging', 'Git Integration'],
        type: 'tool'
      },
      {
        title: 'Postman API Testing',
        institution: 'Uso profesional',
        date: 'Continuo',
        duration: 'Testing APIs',
        skills: ['API Testing', 'Collections', 'Automation'],
        type: 'tool'
      },
      {
        title: 'Figma Design',
        institution: 'Autodidacta',
        date: '2023',
        duration: 'Diseño UI/UX',
        skills: ['Prototyping', 'Component Design', 'Collaboration'],
        type: 'tool'
      }
    ]
  };

  const categories = [
    { key: 'frontend', icon: Code, label: 'Frontend' },
    { key: 'backend', icon: Database, label: 'Backend' },
    { key: 'database', icon: Database, label: 'Bases de Datos' },
    { key: 'ai', icon: Brain, label: 'IA y Datos' },
    { key: 'devops', icon: Monitor, label: 'DevOps' },
    { key: 'tools', icon: Wrench, label: 'Herramientas' }
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
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Certificaciones</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Horas de Estudio</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-300">Proyectos Aplicados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;