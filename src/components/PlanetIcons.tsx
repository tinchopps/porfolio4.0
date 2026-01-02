import React from 'react';

interface PlanetIconProps {
    size?: number;
    className?: string;
}

// ☀️ Sol - Radiante con corona solar
export const SunIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF7B0" />
                <stop offset="40%" stopColor="#FFD93D" />
                <stop offset="70%" stopColor="#FF9500" />
                <stop offset="100%" stopColor="#FF6B00" />
            </radialGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </radialGradient>
            <filter id="sunBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
        </defs>
        {/* Glow externo */}
        <circle cx="32" cy="32" r="28" fill="url(#sunGlow)" filter="url(#sunBlur)" />
        {/* Corona solar / rayos */}
        <g opacity="0.9">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                    key={i}
                    x1="32"
                    y1="32"
                    x2={32 + Math.cos((angle * Math.PI) / 180) * 28}
                    y2={32 + Math.sin((angle * Math.PI) / 180) * 28}
                    stroke="#FFD93D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                />
            ))}
        </g>
        {/* Rayos pequeños */}
        <g opacity="0.6">
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
                <line
                    key={i}
                    x1={32 + Math.cos((angle * Math.PI) / 180) * 18}
                    y1={32 + Math.sin((angle * Math.PI) / 180) * 18}
                    x2={32 + Math.cos((angle * Math.PI) / 180) * 24}
                    y2={32 + Math.sin((angle * Math.PI) / 180) * 24}
                    stroke="#FFF7B0"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            ))}
        </g>
        {/* Cuerpo principal */}
        <circle cx="32" cy="32" r="16" fill="url(#sunGradient)" />
        {/* Brillo interno */}
        <circle cx="28" cy="28" r="5" fill="#FFFDE7" opacity="0.5" />
    </svg>
);

// 🌙 Luna - Creciente elegante
export const MoonIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="moonGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#F5F5F5" />
                <stop offset="50%" stopColor="#E8E8E8" />
                <stop offset="100%" stopColor="#BDBDBD" />
            </radialGradient>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E3F2FD" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#90CAF9" stopOpacity="0" />
            </radialGradient>
            <filter id="moonShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#90CAF9" floodOpacity="0.4" />
            </filter>
        </defs>
        {/* Glow */}
        <circle cx="32" cy="32" r="24" fill="url(#moonGlow)" />
        {/* Luna principal */}
        <circle cx="32" cy="32" r="20" fill="url(#moonGradient)" filter="url(#moonShadow)" />
        {/* Sombra para crear efecto creciente */}
        <circle cx="42" cy="28" r="16" fill="#1a1a2e" opacity="0.85" />
        {/* Cráteres sutiles */}
        <circle cx="24" cy="36" r="3" fill="#BDBDBD" opacity="0.4" />
        <circle cx="30" cy="42" r="2" fill="#BDBDBD" opacity="0.3" />
        <circle cx="20" cy="30" r="1.5" fill="#BDBDBD" opacity="0.3" />
        {/* Estrellas decorativas */}
        <circle cx="50" cy="18" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="12" cy="14" r="0.8" fill="#FFFFFF" opacity="0.6" />
        <circle cx="54" cy="40" r="0.6" fill="#FFFFFF" opacity="0.5" />
    </svg>
);

// 🔴 Marte - Planeta rojo con detalles
export const MarsIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="marsGradient" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FF6B4A" />
                <stop offset="50%" stopColor="#D84315" />
                <stop offset="100%" stopColor="#8B2500" />
            </radialGradient>
            <radialGradient id="marsGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D84315" stopOpacity="0" />
            </radialGradient>
        </defs>
        {/* Glow */}
        <circle cx="32" cy="32" r="26" fill="url(#marsGlow)" />
        {/* Planeta base */}
        <circle cx="32" cy="32" r="20" fill="url(#marsGradient)" />
        {/* Casquete polar */}
        <ellipse cx="32" cy="16" rx="8" ry="3" fill="#FFCCBC" opacity="0.7" />
        {/* Valles Marineris (cañón) */}
        <path
            d="M18 30 Q28 34 42 28"
            stroke="#8B2500"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
            fill="none"
        />
        {/* Cráteres */}
        <circle cx="36" cy="36" r="4" fill="#BF360C" opacity="0.4" />
        <circle cx="26" cy="40" r="2.5" fill="#BF360C" opacity="0.3" />
        <circle cx="40" cy="26" r="2" fill="#BF360C" opacity="0.35" />
        {/* Brillo */}
        <circle cx="26" cy="26" r="4" fill="#FFAB91" opacity="0.3" />
    </svg>
);

// ☿️ Mercurio - Pequeño y cratérico
export const MercuryIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="mercuryGradient" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#B0BEC5" />
                <stop offset="50%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
            </radialGradient>
            <radialGradient id="mercuryGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#B0BEC5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#455A64" stopOpacity="0" />
            </radialGradient>
        </defs>
        {/* Glow */}
        <circle cx="32" cy="32" r="24" fill="url(#mercuryGlow)" />
        {/* Planeta base */}
        <circle cx="32" cy="32" r="18" fill="url(#mercuryGradient)" />
        {/* Cráteres grandes */}
        <circle cx="28" cy="28" r="5" fill="#546E7A" opacity="0.5" />
        <circle cx="38" cy="35" r="4" fill="#546E7A" opacity="0.4" />
        <circle cx="26" cy="40" r="3" fill="#546E7A" opacity="0.45" />
        {/* Cráteres pequeños */}
        <circle cx="36" cy="24" r="2" fill="#455A64" opacity="0.4" />
        <circle cx="42" cy="30" r="1.5" fill="#455A64" opacity="0.35" />
        <circle cx="22" cy="34" r="2" fill="#455A64" opacity="0.4" />
        <circle cx="34" cy="42" r="1.5" fill="#455A64" opacity="0.3" />
        {/* Brillo */}
        <circle cx="26" cy="24" r="3" fill="#CFD8DC" opacity="0.4" />
    </svg>
);

// 🪐 Júpiter - Gigante con bandas
export const JupiterIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="jupiterGradient" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FFE0B2" />
                <stop offset="50%" stopColor="#FFAB40" />
                <stop offset="100%" stopColor="#E65100" />
            </radialGradient>
            <radialGradient id="jupiterGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFAB40" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
            </radialGradient>
            <clipPath id="jupiterClip">
                <circle cx="32" cy="32" r="20" />
            </clipPath>
        </defs>
        {/* Glow */}
        <circle cx="32" cy="32" r="26" fill="url(#jupiterGlow)" />
        {/* Planeta base */}
        <circle cx="32" cy="32" r="20" fill="url(#jupiterGradient)" />
        {/* Bandas atmosféricas */}
        <g clipPath="url(#jupiterClip)">
            <rect x="12" y="20" width="40" height="4" fill="#D84315" opacity="0.5" />
            <rect x="12" y="26" width="40" height="3" fill="#FFE0B2" opacity="0.4" />
            <rect x="12" y="32" width="40" height="5" fill="#BF360C" opacity="0.4" />
            <rect x="12" y="40" width="40" height="3" fill="#FFCC80" opacity="0.5" />
            <rect x="12" y="45" width="40" height="4" fill="#E65100" opacity="0.3" />
        </g>
        {/* Gran Mancha Roja */}
        <ellipse cx="38" cy="34" rx="5" ry="3.5" fill="#D32F2F" opacity="0.7" />
        <ellipse cx="38" cy="34" rx="3" ry="2" fill="#EF5350" opacity="0.5" />
        {/* Brillo */}
        <circle cx="24" cy="24" r="4" fill="#FFF3E0" opacity="0.3" />
    </svg>
);

// ♀️ Venus - Brillante y misterioso
export const VenusIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="venusGradient" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFF8E1" />
                <stop offset="40%" stopColor="#FFE082" />
                <stop offset="100%" stopColor="#FF8F00" />
            </radialGradient>
            <radialGradient id="venusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFE082" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF8F00" stopOpacity="0" />
            </radialGradient>
            <filter id="venusBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>
        </defs>
        {/* Glow intenso (Venus es muy brillante) */}
        <circle cx="32" cy="32" r="28" fill="url(#venusGlow)" />
        {/* Planeta base */}
        <circle cx="32" cy="32" r="20" fill="url(#venusGradient)" />
        {/* Nubes/atmósfera densa */}
        <g opacity="0.4" filter="url(#venusBlur)">
            <ellipse cx="28" cy="26" rx="8" ry="4" fill="#FFFDE7" />
            <ellipse cx="38" cy="32" rx="7" ry="5" fill="#FFF8E1" />
            <ellipse cx="30" cy="38" rx="9" ry="4" fill="#FFFDE7" />
            <ellipse cx="36" cy="24" rx="6" ry="3" fill="#FFF8E1" />
        </g>
        {/* Brillo superior */}
        <circle cx="26" cy="26" r="5" fill="#FFFFFF" opacity="0.35" />
        {/* Swirls atmosféricos */}
        <path
            d="M20 32 Q28 28 36 32 Q44 36 48 32"
            stroke="#FFF8E1"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
        />
    </svg>
);

// 🪐 Saturno - Con sus icónicos anillos
export const SaturnIcon: React.FC<PlanetIconProps> = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="saturnGradient" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FFF3E0" />
                <stop offset="50%" stopColor="#FFCC80" />
                <stop offset="100%" stopColor="#E65100" />
            </radialGradient>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D7CCC8" stopOpacity="0.2" />
                <stop offset="20%" stopColor="#BCAAA4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A1887F" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#BCAAA4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D7CCC8" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="saturnGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFCC80" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
            </radialGradient>
        </defs>
        {/* Glow */}
        <circle cx="32" cy="32" r="28" fill="url(#saturnGlow)" />
        {/* Anillo trasero */}
        <ellipse
            cx="32"
            cy="32"
            rx="28"
            ry="8"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="4"
            opacity="0.6"
            transform="rotate(-15 32 32)"
        />
        {/* Planeta base */}
        <circle cx="32" cy="32" r="14" fill="url(#saturnGradient)" />
        {/* Bandas sutiles */}
        <path d="M18 30 Q32 28 46 30" stroke="#E65100" strokeWidth="1" opacity="0.3" fill="none" />
        <path d="M19 34 Q32 36 45 34" stroke="#FFCC80" strokeWidth="1.5" opacity="0.4" fill="none" />
        {/* Anillo frontal */}
        <ellipse
            cx="32"
            cy="32"
            rx="28"
            ry="8"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="4"
            strokeDasharray="0 88 60 0"
            transform="rotate(-15 32 32)"
        />
        {/* Separación de anillos (Cassini Division) */}
        <ellipse
            cx="32"
            cy="32"
            rx="24"
            ry="6.5"
            fill="none"
            stroke="#1a1a2e"
            strokeWidth="1"
            opacity="0.3"
            transform="rotate(-15 32 32)"
        />
        {/* Brillo */}
        <circle cx="26" cy="28" r="3" fill="#FFF8E1" opacity="0.4" />
    </svg>
);

// Mapa de iconos por key del planeta
export const planetIcons = {
    sun: SunIcon,
    moon: MoonIcon,
    mars: MarsIcon,
    mercury: MercuryIcon,
    jupiter: JupiterIcon,
    venus: VenusIcon,
    saturn: SaturnIcon,
};

export type PlanetKey = keyof typeof planetIcons;
