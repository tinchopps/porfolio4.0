import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    Sparkles, Cpu, Database, Cloud,
    MessageSquare, Zap, ChevronRight, Bot
} from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';

const AISection: React.FC = () => {
    const { t } = useTranslation();
    const [terminalText, setTerminalText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const terminalLines = useMemo(() => [
        t('ai.terminal.init'),
        t('ai.terminal.loading'),
        t('ai.terminal.connecting'),
        t('ai.terminal.ready'),
    ], [t]);

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let currentText = '';
        setTerminalText('');
        setIsTyping(true);

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

        const timeout = setTimeout(typeNextChar, 500);
        return () => clearTimeout(timeout);
    }, [terminalLines]);

    const aiTools = [
        { icon: Sparkles, name: t('ai.tools.items.gemini.name'), desc: t('ai.tools.items.gemini.desc') },
        { icon: Database, name: t('ai.tools.items.bigquery.name'), desc: t('ai.tools.items.bigquery.desc') },
        { icon: Cloud, name: t('ai.tools.items.googlecloud.name'), desc: t('ai.tools.items.googlecloud.desc') },
        { icon: Cpu, name: t('ai.tools.items.pythonml.name'), desc: t('ai.tools.items.pythonml.desc') },
    ];

    const aiProjects = [
        {
            title: t('ai.projects.chatbot.title'),
            desc: t('ai.projects.chatbot.desc'),
            tech: ['OpenAI', 'FastAPI', 'PostgreSQL'],
            status: 'completed'
        },
        {
            title: t('ai.projects.restaurant.title'),
            desc: t('ai.projects.restaurant.desc'),
            tech: ['Python', 'NLP', 'Flask'],
            status: 'completed'
        },
        {
            title: t('ai.projects.sentiment.title'),
            desc: t('ai.projects.sentiment.desc'),
            tech: ['spaCy', 'NLTK', 'Python'],
            status: 'learning'
        },
    ];

    return (
        <BentoSection
            id="ai"
            title={t('ai.title')}
            subtitle={t('ai.subtitle')}
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
                        <span className="text-xs text-[#9ca3af] font-mono ml-2">martin@ai-portfolio ~ </span>
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
                                <div className="flex items-center gap-2 text-[#9ca3af]">
                                    <ChevronRight size={14} className="text-primary" />
                                    <span>{t('ai.terminal.question')}</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg text-primary hover:bg-primary/30 transition-colors shadow-lg shadow-primary/10"
                                >
                                    <MessageSquare size={16} />
                                    <span className="font-bold">{t('ai.terminal.cta')}</span>
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
                                <span>{t('ai.tools.active')}</span>
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
                                {t('ai.diploma.title')}
                            </h4>
                            <p className="text-xs text-primary">Google & UNDelta</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">
                        {t('ai.diploma.desc')}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Bot className="text-primary" />
                    {t('ai.projects.title')}
                </h3>

                <BentoGrid columns={3}>
                    {aiProjects.map((project, index) => (
                        <BentoCard key={project.title} delay={index}>
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-white text-sm leading-tight">{project.title}</h4>
                                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full shrink-0 ${project.status === 'completed'
                                    ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                    }`}>
                                    {project.status === 'completed'
                                        ? t('ai.projects.status.completed')
                                        : t('ai.projects.status.learning')}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-badge text-[10px]">{tech}</span>
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
