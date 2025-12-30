import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

export type BentoCardSize = 'default' | 'wide' | 'tall' | 'featured';

interface BentoCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: React.ReactNode;
    size?: BentoCardSize;
    className?: string;
    delay?: number;
    hover?: boolean;
}

const sizeClasses: Record<BentoCardSize, string> = {
    default: '',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    featured: 'md:col-span-2 md:row-span-2',
};

export function BentoCard({
    children,
    size = 'default',
    className,
    delay = 0,
    hover = true,
    ...props
}: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
            className={cn(
                'bento-card',
                sizeClasses[size],
                'relative overflow-hidden',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface BentoCardHeaderProps {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    action?: React.ReactNode;
    className?: string;
}

export function BentoCardHeader({
    icon,
    title,
    subtitle,
    action,
    className,
}: BentoCardHeaderProps) {
    return (
        <div className={cn('flex items-start justify-between mb-4', className)}>
            <div className="flex items-center gap-3">
                {icon && (
                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                        {icon}
                    </div>
                )}
                <div>
                    <h3 className="font-semibold text-white dark:text-white text-lg">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-sm text-gray-400">{subtitle}</p>
                    )}
                </div>
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}

interface BentoCardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoCardContent({ children, className }: BentoCardContentProps) {
    return (
        <div className={cn('flex-1', className)}>
            {children}
        </div>
    );
}

interface BentoCardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoCardFooter({ children, className }: BentoCardFooterProps) {
    return (
        <div className={cn('mt-4 pt-4 border-t border-bento-border', className)}>
            {children}
        </div>
    );
}
