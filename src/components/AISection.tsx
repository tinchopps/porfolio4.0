import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    Brain, Sparkles, Terminal, Cpu, Database, Cloud,
    MessageSquare, Zap, ChevronRight, Bot
} from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

const AISection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [terminalText, setTerminalText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    // Terminal typing effect
    const terminalLines = [
        '> Initializing AI Assistant...',
        '> Loading Gemini capabilities...',
        '> Connecting to BigQuery ML...',
        '> Ready to assist! 🚀',
    ];

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let currentText = '';

        const typeNextChar = () => {
            if (lineIndex >= terminalLines.length) {
                setIsTyping(false);
                return;
            }

            const currentLine = terminalLines[lineIndex];
            if (charIndex < currentLine.length) {
                currentText += currentLine[charIndex];
                setTerminalText(currentText);
                charIndex++;
                setTimeout(typeNextChar, 50);
            } else {
                currentText += '\n';
                setTerminalText(currentText);
                lineIndex++;
                charIndex = 0;
                setTimeout(typeNextChar, 500);
            }
        };

        const timeout = setTimeout(typeNextChar, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const aiTools = [
        { icon: Sparkles, name: 'Gemini AI', desc: 'Generative AI & LLMs' },
        { icon: Database, name: 'BigQuery ML', desc: 'Data Analytics' },
        { icon: Cloud, name: 'Google Cloud', desc: 'Cloud Platform' },
        { icon: Cpu, name: 'Python ML', desc: 'Machine Learning' },
    ];

    const aiProjects = [
        {
            title: i18n.language === 'es' ? 'Chatbot Académico UNLu' : 'UNLu Academic Chatbot',
            desc: i18n.language === 'es'
                ? 'Asistente con IA para consultas estudiantiles usando GPT-4 y RAG'
                : 'AI Assistant for student queries using GPT-4 and RAG',
            tech: ['OpenAI', 'FastAPI', 'PostgreSQL'],
            status: 'completed'
        },
        {
            title: i18n.language === 'es' ? 'Bot de Restaurante' : 'Restaurant Bot',
            desc: i18n.language === 'es'
                ? 'Automatización de pedidos con procesamiento de lenguaje natural'
                : 'Order automation with natural language processing',
            tech: ['Python', 'NLP', 'Flask'],
            status: 'completed'
        },
        {
            title: i18n.language === 'es' ? 'Análisis de Sentimientos' : 'Sentiment Analysis',
            desc: i18n.language === 'es'
                ? 'Pipeline de análisis de texto con spaCy y NLTK'
                : 'Text analysis pipeline with spaCy and NLTK',
            tech: ['spaCy', 'NLTK', 'Python'],
            status: 'learning'
        },
    ];

    return (
        <BentoSection
            id="ai"
            title={i18n.language === 'es' ? 'Inteligencia Artificial' : 'Artificial Intelligence'}
            subtitle={i18n.language === 'es'
                ? 'Explorando el futuro de la tecnología con IA Generativa'
                : 'Exploring the future of technology with Generative AI'}
        >
            <BentoGrid columns={4}>
                {/* Terminal Card - Featured */}
                <BentoCard size="wide" delay={0} className="md:row-span-2 bg-black/80 p-0 overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-bento-card border-b border-bento-border">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-gray-400 font-mono ml-2">martin@ai-portfolio ~ </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm">
                        <pre className="text-green-400 whitespace-pre-wrap">
                            {terminalText}
                            {isTyping && <span className="animate-pulse">▊</span>}
                        </pre>

                        {!isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 space-y-3"
                            >
                                <div className="flex items-center gap-2 text-gray-400">
                                    <ChevronRight size={14} className="text-primary" />
                                    <span>
                                        {i18n.language === 'es'
                                            ? '¿Querés saber más sobre mis proyectos de IA?'
                                            : 'Want to learn more about my AI projects?'}
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg text-primary hover:bg-primary/30 transition-colors"
                                >
                                    <MessageSquare size={16} />
                                    <span>{i18n.language === 'es' ? 'Hablemos' : 'Let\'s talk'}</span>
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </BentoCard>

                {/* AI Tools Grid */}
                {aiTools.map((tool, index) => (
                    <BentoCard key={tool.name} delay={index + 1}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
                                    <tool.icon size={24} className="text-primary" />
                                </div>
                                <h4 className="font-semibold text-white mb-1">{tool.name}</h4>
                                <p className="text-xs text-gray-400">{tool.desc}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-xs text-secondary">
                                <Zap size={12} />
                                <span>{i18n.language === 'es' ? 'Activo' : 'Active'}</span>
                            </div>
                        </div>
                    </BentoCard>
                ))}

                {/* AI Diploma Badge */}
                <BentoCard delay={5} className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">🎓</div>
                        <div>
                            <h4 className="font-semibold text-white text-sm">
                                {i18n.language === 'es' ? 'Diplomatura IA' : 'AI Diploma'}
                            </h4>
                            <p className="text-xs text-primary">Google & UNDelta</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">
                        {i18n.language === 'es'
                            ? 'Formación en IA Generativa, GCP y BigQuery ML'
                            : 'Training in Generative AI, GCP and BigQuery ML'}
                    </p>
                </BentoCard>
            </BentoGrid>

            {/* AI Projects Showcase */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
            >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Bot className="text-primary" />
                    {i18n.language === 'es' ? 'Proyectos con IA' : 'AI Projects'}
                </h3>

                <BentoGrid columns={3}>
                    {aiProjects.map((project, index) => (
                        <BentoCard key={project.title} delay={index}>
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-white text-sm">{project.title}</h4>
                                <span className={`px-2 py-0.5 text-xs rounded-full ${project.status === 'completed'
                                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                    }`}>
                                    {project.status === 'completed'
                                        ? (i18n.language === 'es' ? '✓ Completo' : '✓ Done')
                                        : (i18n.language === 'es' ? '📚 Aprendiendo' : '📚 Learning')}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                                ))}
                            </div>
                        </BentoCard>
                    ))}
                </BentoGrid>
            </motion.div>
        </BentoSection>
    );
};

export default AISection;
