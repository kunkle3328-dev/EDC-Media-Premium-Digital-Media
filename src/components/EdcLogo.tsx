import React from 'react';

interface EdcLogoProps {
  variant?: 'chrome' | 'white' | 'compact' | 'monochrome';
  className?: string;
  showTagline?: boolean;
  showScript?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const EdcLogo: React.FC<EdcLogoProps> = ({
  variant = 'chrome',
  className = '',
  showTagline = false,
  showScript = false,
  size = 'md',
}) => {
  const isCompact = variant === 'compact';
  const isChrome = variant === 'chrome';

  // Dimension scaling
  const scaleMap = {
    sm: { width: isCompact ? 36 : 140, height: isCompact ? 36 : 42 },
    md: { width: isCompact ? 48 : 200, height: isCompact ? 48 : 58 },
    lg: { width: isCompact ? 64 : 280, height: isCompact ? 64 : 82 },
    xl: { width: isCompact ? 80 : 380, height: isCompact ? 80 : 110 },
  };

  const { width, height } = scaleMap[size];

  if (isCompact) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="EDC Media Symbol"
          role="img"
        >
          <defs>
            <linearGradient id="chromeGradCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="75%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="blueGlowCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#19B5FF" />
              <stop offset="100%" stopColor="#008CFF" />
            </linearGradient>
            <filter id="glowCompact" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#008CFF" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Background Rounded Shield */}
          <rect width="100" height="100" rx="20" fill="#0A1019" stroke="#1D3045" strokeWidth="2" />

          {/* Stylized 'D' with Play Button */}
          <path
            d="M 28 22 L 56 22 C 72 22 78 32 78 50 C 78 68 72 78 56 78 L 28 78 Z M 40 34 L 40 66 L 54 66 C 62 66 66 60 66 50 C 66 40 62 34 54 34 Z"
            fill={isChrome ? 'url(#chromeGradCompact)' : '#FFFFFF'}
          />
          {/* Electric Blue Play Triangle */}
          <polygon
            points="44,38 60,50 44,62"
            fill="url(#blueGlowCompact)"
            filter="url(#glowCompact)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 440 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="EDC Media Official Logo"
        role="img"
      >
        <defs>
          {/* Metallic Brushed Chrome Gradients */}
          <linearGradient id="edcChrome1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#E2E8F0" />
            <stop offset="45%" stopColor="#64748B" />
            <stop offset="70%" stopColor="#CBD5E1" />
            <stop offset="90%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          <linearGradient id="edcBevel" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#19B5FF" />
            <stop offset="100%" stopColor="#008CFF" />
          </linearGradient>

          <linearGradient id="electricBlueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          <filter id="blueNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softChromeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        <g filter="url(#softChromeShadow)">
          {/* LETTER 'E' */}
          <g>
            {/* Base E */}
            <path
              d="M 20 15 L 140 15 L 140 33 L 56 33 L 56 46 L 126 46 L 126 62 L 56 62 L 56 75 L 140 75 L 140 93 L 20 93 Z"
              fill={isChrome ? 'url(#edcChrome1)' : '#FFFFFF'}
            />
            {/* Top Cut Chamfer Accent */}
            <path
              d="M 20 15 L 38 15 L 20 33 Z"
              fill="#FFFFFF"
              opacity={isChrome ? 0.7 : 0.2}
            />
            {/* Bevel highlight line */}
            <path
              d="M 20 15 L 140 15 L 136 21 L 56 21 L 56 93 L 20 93 Z"
              fill="url(#edcBevel)"
              opacity={isChrome ? 0.4 : 0}
            />
          </g>

          {/* LETTER 'D' WITH PLAY BUTTON COUNTER */}
          <g>
            {/* Outer D with geometric angled corners */}
            <path
              d="M 158 15 L 235 15 C 275 15 292 30 292 54 C 292 78 275 93 235 93 L 158 93 Z M 194 33 L 194 75 L 230 75 C 255 75 264 68 264 54 C 264 40 255 33 230 33 Z"
              fill={isChrome ? 'url(#edcChrome1)' : '#FFFFFF'}
            />
            {/* Top Left D highlight */}
            <path
              d="M 158 15 L 176 15 L 158 33 Z"
              fill="#FFFFFF"
              opacity={isChrome ? 0.7 : 0.2}
            />
            {/* Electric Blue Play Triangle in D Counter */}
            <polygon
              points="212,38 248,54 212,70"
              fill="url(#electricBlue)"
              filter="url(#blueNeonGlow)"
            />
            {/* Specular reflection on play button */}
            <polygon
              points="212,38 234,48 212,54"
              fill="#FFFFFF"
              opacity={0.5}
            />
          </g>

          {/* LETTER 'C' WITH LOWER-RIGHT ELECTRIC BLUE ACCENT */}
          <g>
            {/* Outer C */}
            <path
              d="M 420 34 L 396 34 C 388 24 374 21 355 21 C 324 21 308 34 308 54 C 308 74 324 87 355 87 C 375 87 390 82 400 70 L 422 70 C 408 90 384 99 355 99 C 310 99 284 79 284 54 C 284 29 310 9 355 9 C 382 9 407 18 420 34 Z"
              fill={isChrome ? 'url(#edcChrome1)' : '#FFFFFF'}
            />
            {/* Chamfer highlight */}
            <path
              d="M 312 30 L 328 16 L 355 9 L 340 18 Z"
              fill="#FFFFFF"
              opacity={isChrome ? 0.6 : 0.2}
            />
            {/* Distinctive Electric Blue Lower Terminal Accent Cut */}
            <polygon
              points="388,72 422,72 402,94 378,94"
              fill="url(#electricBlue)"
              filter="url(#blueNeonGlow)"
            />
          </g>
        </g>

        {/* 'MEDIA' SUB-HEADING */}
        <text
          x="220"
          y="118"
          textAnchor="middle"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.65em"
          fill={isChrome ? 'url(#edcChrome1)' : '#FFFFFF'}
          fontFamily="'Plus Jakarta Sans', 'Syne', sans-serif"
          className="uppercase tracking-[0.65em]"
        >
          MEDIA
        </text>
      </svg>

      {/* Optional Tagline: CREATE / MARKET / BUILD / GROW */}
      {showTagline && (
        <div className="flex items-center justify-center gap-2 mt-2 text-[10px] md:text-xs font-semibold tracking-[0.3em] text-[#A7B3C3] uppercase">
          <span className="hover:text-white transition-colors">CREATE</span>
          <span className="text-[#008CFF] font-bold">/</span>
          <span className="hover:text-white transition-colors">MARKET</span>
          <span className="text-[#008CFF] font-bold">/</span>
          <span className="hover:text-white transition-colors">BUILD</span>
          <span className="text-[#008CFF] font-bold">/</span>
          <span className="hover:text-white transition-colors">GROW</span>
        </div>
      )}

      {/* Supporting script accent: Your Vision. Our Execution. */}
      {showScript && (
        <span className="font-script text-xl md:text-2xl text-[#19B5FF] tracking-wide mt-1 transform -rotate-1 drop-shadow-[0_0_12px_rgba(0,140,255,0.6)]">
          Your Vision. Our Execution.
        </span>
      )}
    </div>
  );
};
