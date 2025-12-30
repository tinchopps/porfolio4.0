import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
    columns?: 1 | 2 | 3 | 4;
}

export function BentoGrid({ children, className, columns = 4 }: BentoGridProps) {
    const columnClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'grid gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]',
                columnClasses[columns],
                className
            )}
        >
            {children}
        </motion.div>
    );
}

interface BentoSectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
}

export function BentoSection({
    id,
    children,
    className,
    title,
    subtitle,
}: BentoSectionProps) {
    return (
        <section id={id} className={cn('py-12 md:py-20', className)}>
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        {title && (
                            <h2 className="section-title">
                                <span className="gradient-text">{title}</span>
                            </h2>
                        )}
                        {subtitle && (
                            <p className="section-subtitle mt-2">{subtitle}</p>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
}

// Container for the full page layout
interface BentoLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoLayout({ children, className }: BentoLayoutProps) {
    return (
        <div className={cn('min-h-screen', className)}>
            {children}
        </div>
    );
}

// Animated background decoration
export function BentoBackground() {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)'} 1px, transparent 1px),
                           linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)'} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />
        </div>
    );
}
