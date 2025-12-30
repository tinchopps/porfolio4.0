import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

// NASA/ESA public domain images optimized for backgrounds
const planetBackgrounds = {
    // Sunday - Sun
    0: {
        dark: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1920&q=80', // Dark dramatic sun
        light: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=1920&q=80', // Bright warm sun
        name: 'Sun',
        emoji: '☀️'
    },
    // Monday - Moon
    1: {
        dark: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=1920&q=80', // Full moon night
        light: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1920&q=80', // Soft moon
        name: 'Moon',
        emoji: '🌙'
    },
    // Tuesday - Mars
    2: {
        dark: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1920&q=80', // Mars dark
        light: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=1920&q=80', // Mars surface
        name: 'Mars',
        emoji: '🔴'
    },
    // Wednesday - Mercury
    3: {
        dark: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80', // Mercury dark
        light: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?w=1920&q=80', // Mercury light
        name: 'Mercury',
        emoji: '☿️'
    },
    // Thursday - Jupiter
    4: {
        dark: 'https://images.unsplash.com/photo-1614732484003-ef9881c53c14?w=1920&q=80', // Jupiter bands
        light: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=1920&q=80', // Jupiter pastel
        name: 'Jupiter',
        emoji: '🪐'
    },
    // Friday - Venus
    5: {
        dark: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=1920&q=80', // Venus golden dark
        light: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&q=80', // Venus cream
        name: 'Venus',
        emoji: '♀️'
    },
    // Saturday - Saturn
    6: {
        dark: 'https://images.unsplash.com/photo-1614732484230-9d55c3c4e2e6?w=1920&q=80', // Saturn rings dark
        light: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?w=1920&q=80', // Saturn light
        name: 'Saturn',
        emoji: '🪐'
    }
};

export function DynamicBackground() {
    const { theme } = useTheme();

    const { backgroundUrl, planetName, emoji } = useMemo(() => {
        const dayOfWeek = new Date().getDay(); // 0 = Sunday, 6 = Saturday
        const planet = planetBackgrounds[dayOfWeek as keyof typeof planetBackgrounds];

        return {
            backgroundUrl: theme === 'dark' ? planet.dark : planet.light,
            planetName: planet.name,
            emoji: planet.emoji
        };
    }, [theme]);

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

            {/* Dark overlay for readability */}
            <div
                className={`fixed inset-0 -z-10 transition-all duration-500 ${theme === 'dark'
                    ? 'bg-black/40'
                    : 'bg-white/20'
                    }`}
            />

            {/* Gradient overlay for depth */}
            <div
                className={`fixed inset-0 -z-10 ${theme === 'dark'
                    ? 'bg-gradient-to-b from-transparent via-bento-dark/50 to-bento-dark'
                    : 'bg-gradient-to-b from-transparent via-white/30 to-white/80'
                    }`}
            />

            {/* Planet indicator badge */}
            <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-bento-card/80 backdrop-blur-sm border border-bento-border rounded-full text-xs text-gray-400">
                <span>{emoji}</span>
                <span className="hidden sm:inline">Today&apos;s Planet: </span>
                <span className="font-medium text-primary">{planetName}</span>
            </div>
        </>
    );
}

export default DynamicBackground;
