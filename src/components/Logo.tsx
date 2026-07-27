import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDoctors?: boolean;
}

export default function Logo({ className = '', size = 'md', showDoctors = true }: LogoProps) {
  // Height and scale scaling
  const heightMap = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28'
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 190"
        className={`w-auto ${heightMap[size]} max-w-full drop-shadow-sm`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* 1. Red Sunburst Rays behind tooth */}
        <g fill="#DC2626">
          {/* Top vertical ray */}
          <polygon points="250,15 246,55 254,55" />
          {/* Diagonal rays radiating from center (250, 75) */}
          <polygon points="230,22 238,58 244,55" />
          <polygon points="270,22 256,55 262,58" />
          <polygon points="212,35 230,64 235,60 font" />
          <polygon points="288,35 265,60 270,64" />
          <polygon points="198,52 222,72 226,67" />
          <polygon points="302,52 274,67 278,72" />
          <polygon points="190,72 218,80 220,74" />
          <polygon points="310,72 280,74 282,80" />
        </g>

        {/* 2. Red Dynamic Swoops framing the tooth */}
        <path
          d="M 160 90 Q 210 70 240 85 Q 210 82 160 90 Z"
          fill="#DC2626"
        />
        <path
          d="M 340 90 Q 290 70 260 85 Q 290 82 340 90 Z"
          fill="#DC2626"
        />
        <path
          d="M 170 92 Q 220 78 250 90 Q 280 78 330 92 Q 280 83 250 92 Q 220 83 170 92 Z"
          fill="#DC2626"
        />

        {/* 3. Central Royal Blue Tooth */}
        <g transform="translate(222, 45)">
          {/* Outer Tooth Contour */}
          <path
            d="M 28 5 
               C 38 2, 48 2, 53 10 
               C 56 16, 54 26, 52 35 
               C 50 44, 46 54, 42 62 
               C 40 66, 38 72, 34 72 
               C 31 72, 30 65, 28 58 
               C 26 65, 25 72, 22 72 
               C 18 72, 16 66, 14 62 
               C 10 54, 6 44, 4 35 
               C 2 26, 0 16, 3 10 
               C 8 2, 18 2, 28 5 Z"
            fill="white"
            stroke="#1D4ED8"
            strokeWidth="5.5"
            strokeLinejoin="round"
          />
          {/* Inner Tooth Highlights / Shading */}
          <path
            d="M 18 18 C 22 14, 34 14, 38 18"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 28 22 L 28 50"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 16 30 C 18 42, 20 50, 22 58"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 40 30 C 38 42, 36 50, 34 58"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* 4. Text "Abir Smile" in Blue Script Style */}
        <text
          x="250"
          y="136"
          textAnchor="middle"
          fill="#1D4ED8"
          fontFamily="'Outfit', 'Georgia', serif"
          fontWeight="800"
          fontSize="36"
          fontStyle="italic"
          letterSpacing="0.5"
        >
          Abir Smile
        </text>

        {/* 5. Text "Dental Clinic / Clinic Dentaire" in Blue Serif/Italic Style */}
        <text
          x="250"
          y="166"
          textAnchor="middle"
          fill="#1D4ED8"
          fontFamily="'Outfit', 'Georgia', serif"
          fontWeight="800"
          fontSize="26"
          fontStyle="italic"
          letterSpacing="1"
        >
          Clinic Dentaire
        </text>

        {/* 6. Blue Flourish Underline Curve */}
        <path
          d="M 110 178 
             Q 150 188 180 178 
             Q 210 168 250 178 
             Q 290 188 320 178 
             Q 350 168 390 178"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Swirl loops at ends */}
        <circle cx="110" cy="178" r="3" fill="none" stroke="#1D4ED8" strokeWidth="2" />
        <circle cx="390" cy="178" r="3" fill="none" stroke="#1D4ED8" strokeWidth="2" />
      </svg>

      {showDoctors && (
        <div className="text-center mt-1">
          <span className="text-xs font-bold text-slate-800 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block shadow-2xs">
            Dr. Ghouti Mohamed Cherif
          </span>
        </div>
      )}
    </div>
  );
}
