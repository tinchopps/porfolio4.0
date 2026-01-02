import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Info } from 'lucide-react';
import { planetIcons, PlanetKey } from './PlanetIcons';

// NASA/ESA public domain images optimized for backgrounds
const planetBackgrounds = {
    0: {
        dark: '/assets/backgrounds/sun_dark.jpg',
        light: '/assets/backgrounds/sun_light.jpg',
        key: 'sun' as PlanetKey,
    },
    1: {
        dark: '/assets/backgrounds/moon_dark.jpg',
        light: '/assets/backgrounds/moon_light.jpg',
        key: 'moon' as PlanetKey,
    },
    2: {
        dark: '/assets/backgrounds/mars_dark.jpg',
        light: '/assets/backgrounds/mars_light.jpg',
        key: 'mars' as PlanetKey,
    },
    3: {
        dark: '/assets/backgrounds/mercury_dark.jpg',
        light: '/assets/backgrounds/mercury_light.jpg',
        key: 'mercury' as PlanetKey,
    },
    4: {
        dark: '/assets/backgrounds/jupiter_dark.jpg',
        light: '/assets/backgrounds/jupiter_light.jpg',
        key: 'jupiter' as PlanetKey,
    },
    5: {
        dark: '/assets/backgrounds/venus_dark.jpg',
        light: '/assets/backgrounds/venus_lightv2.jpg',
        key: 'venus' as PlanetKey,
    },
    6: {
        dark: '/assets/backgrounds/saturn_dark.jpg',
        light: '/assets/backgrounds/saturn_light.jpg',
        key: 'saturn' as PlanetKey,
    }
};

export function DynamicBackground() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [showFact, setShowFact] = useState(false);
    const [currentFact, setCurrentFact] = useState('');

    const dayOfWeek = useMemo(() => new Date().getDay(), []);
    const planetConfig = planetBackgrounds[dayOfWeek as keyof typeof planetBackgrounds];

    const { backgroundUrl, planetName, PlanetIcon, facts } = useMemo(() => {
        const planetKey = planetConfig.key;
        const bgUrl = theme === 'dark' ? planetConfig.dark : planetConfig.light;

        return {
            backgroundUrl: bgUrl,
            planetName: t(`planets.${planetKey}.name`),
            PlanetIcon: planetIcons[planetKey],
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
                }}
            />

            {/* Overlays */}
            {/* Overlays - Softened to preserve background definition */}
            <div className={`fixed inset-0 -z-10 transition-all duration-500 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/10'}`} />
            <div className={`fixed inset-0 -z-10 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-bento-dark/10 to-bento-dark/80' : 'bg-gradient-to-b from-transparent via-white/10 to-white/60'}`} />

            {/* Planet facts toggle */}
            <AnimatePresence>
                {showFact && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-20 right-4 z-50 max-w-xs"
                    >
                        <div className="bg-white/90 dark:bg-bento-card/90 backdrop-blur-md border border-black/10 dark:border-primary/30 p-4 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <button
                                onClick={() => setShowFact(false)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors"
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
                                    <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
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
                    className="group relative flex items-center bg-white/80 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full cursor-pointer hover:bg-white/90 dark:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                    {/* Collapsed State: Planet Icon */}
                    <div className="flex items-center gap-2 px-3 py-2">
                        <PlanetIcon size={28} className="filter drop-shadow-md dark:drop-shadow-lg" />
                        <Info size={16} className="text-gray-500 dark:text-white/70 group-hover:text-primary transition-colors" />
                    </div>

                    {/* Expanded Content (Revealed on Hover) */}
                    <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-3 pr-4 whitespace-nowrap">
                            <div className="h-4 w-px bg-black/10 dark:bg-white/20" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-white/60 leading-none">
                                    {t('planets.label')}
                                </span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
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
