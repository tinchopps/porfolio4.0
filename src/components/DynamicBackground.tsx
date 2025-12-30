import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Info } from 'lucide-react';

// NASA/ESA public domain images optimized for backgrounds
const planetBackgrounds = {
    0: {
        dark: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=1920&q=80',
        key: 'sun',
        emoji: '☀️'
    },
    1: {
        dark: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1920&q=80',
        key: 'moon',
        emoji: '🌙'
    },
    2: {
        dark: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=1920&q=80',
        key: 'mars',
        emoji: '🔴'
    },
    3: {
        dark: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?w=1920&q=80',
        key: 'mercury',
        emoji: '☿️'
    },
    4: {
        dark: 'https://images.unsplash.com/photo-1614732484003-ef9881c53c14?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=1920&q=80',
        key: 'jupiter',
        emoji: '🪐'
    },
    5: {
        dark: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&q=80',
        key: 'venus',
        emoji: '♀️'
    },
    6: {
        dark: 'https://images.unsplash.com/photo-1614732484230-9d55c3c4e2e6?w=1920&q=80',
        light: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?w=1920&q=80',
        key: 'saturn',
        emoji: '🪐'
    }
};

export function DynamicBackground() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [showFact, setShowFact] = useState(false);
    const [currentFact, setCurrentFact] = useState('');

    const dayOfWeek = useMemo(() => new Date().getDay(), []);
    const planetConfig = planetBackgrounds[dayOfWeek as keyof typeof planetBackgrounds];

    const { backgroundUrl, planetName, emoji, facts } = useMemo(() => {
        const planetKey = planetConfig.key;
        return {
            backgroundUrl: theme === 'dark' ? planetConfig.dark : planetConfig.light,
            planetName: t(`planets.${planetKey}.name`),
            emoji: planetConfig.emoji,
            facts: t(`planets.${planetKey}.facts`, { returnObjects: true }) as string[]
        };
    }, [theme, planetConfig, t]);

    const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setCurrentFact(facts[randomIndex]);
        setShowFact(true);
    };

    return (
        <>
            {/* Main background image */}
            <div
                className="fixed inset-0 -z-20 transition-all duration-1000"
                style={{
                    backgroundImage: `url(${backgroundUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Overlays */}
            {/* Overlays - Adjusted for better planet visibility */}
            <div className={`fixed inset-0 -z-10 transition-all duration-500 ${theme === 'dark' ? 'bg-black/30' : 'bg-white/10'}`} />
            <div className={`fixed inset-0 -z-10 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-bento-dark/20 to-bento-dark/80' : 'bg-gradient-to-b from-transparent via-white/10 to-white/60'}`} />

            {/* Planet facts toggle */}
            <AnimatePresence>
                {showFact && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-20 right-4 z-50 max-w-xs"
                    >
                        <div className="bg-bento-card/90 backdrop-blur-md border border-primary/30 p-4 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <button
                                onClick={() => setShowFact(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                            <div className="flex gap-3">
                                <div className="mt-1">
                                    <Sparkles size={18} className="text-primary animate-pulse" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                        {t('planets.factLabel')}
                                    </span>
                                    <p className="text-xs text-gray-200 leading-relaxed font-medium">
                                        &quot;{currentFact}&quot;
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button
                                    onClick={getRandomFact}
                                    className="text-[10px] text-primary font-bold hover:underline underline-offset-2"
                                >
                                    {t('planets.getAnother')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Planet indicator badge */}
            {/* Redesigned Planet Toggle - Sleek Floating Pill */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div
                    onClick={getRandomFact}
                    className="group relative flex items-center bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full cursor-pointer hover:bg-white/20 dark:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                    {/* Collapsed State: Icon + Emoji */}
                    <div className="flex items-center gap-2 px-3 py-2">
                        <span className="text-xl filter drop-shadow-md">{emoji}</span>
                        <Info size={16} className="text-white/70 group-hover:text-primary transition-colors" />
                    </div>

                    {/* Expanded Content (Revealed on Hover) */}
                    <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-3 pr-4 whitespace-nowrap">
                            <div className="h-4 w-px bg-white/20" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-white/60 leading-none">
                                    {t('planets.label')}
                                </span>
                                <span className="text-sm font-bold text-white leading-tight">
                                    {planetName}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default DynamicBackground;
