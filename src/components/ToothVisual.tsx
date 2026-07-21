import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Star, MapPin } from 'lucide-react';

interface ToothVisualProps {
  expression: 'wise' | 'excited' | 'kind' | 'proud' | 'welcoming';
  accessory?: 'glasses' | 'stars' | 'shield' | 'crown' | 'pin';
  color: string;
  isBlinking?: boolean;
  isHovered?: boolean;
  animateMouth?: boolean;
  className?: string;
}

export default function ToothVisual({
  expression,
  accessory,
  color,
  isBlinking = false,
  isHovered = false,
  animateMouth = true,
  className = ""
}: ToothVisualProps) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Glow Aura */}
      <div className={`absolute inset-2 rounded-full bg-gradient-to-tr ${color} opacity-20 blur-xl -z-10`} />

      {/* Main SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-white fill-current drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tooth Outline & Shading */}
        <path
          d="M 20 40 C 20 20, 35 15, 50 25 C 65 15, 80 20, 80 40 C 80 55, 75 65, 70 70 C 68 75, 65 90, 60 92 C 55 94, 50 80, 50 70 C 50 80, 45 94, 40 92 C 35 90, 32 75, 30 70 C 25 65, 20 55, 20 40 Z"
          className="fill-white stroke-clinic-100"
          strokeWidth="2.5"
        />

        {/* Inner 3D shading highlight */}
        <path
          d="M 23 41 C 23 23, 36 19, 50 28 C 64 19, 77 23, 77 41 C 77 53, 72 63, 68 67"
          fill="none"
          stroke="url(#toothHighlightGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="opacity-45"
        />

        <defs>
          <linearGradient id="toothHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Face Expressions */}
        <g>
          {/* Eyes */}
          {isBlinking ? (
            <>
              <line x1="33" y1="42" x2="43" y2="42" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
              <line x1="57" y1="42" x2="67" y2="42" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : expression === 'wise' ? (
            <>
              <circle cx="38" cy="42" r="4.5" fill="#0F172A" />
              <circle cx="62" cy="42" r="4.5" fill="#0F172A" />
              <circle cx="38" cy="41" r="1.5" fill="#FFFFFF" />
              <circle cx="62" cy="41" r="1.5" fill="#FFFFFF" />
            </>
          ) : expression === 'excited' ? (
            <>
              <path d="M 33 45 Q 38 37 43 45" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 57 45 Q 62 37 67 45" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
            </>
          ) : expression === 'kind' ? (
            <>
              <path d="M 34 41 Q 38 35 42 41" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 58 41 Q 62 35 66 41" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
            </>
          ) : (
            // Regular happy/proud/welcoming eyes
            <>
              <circle cx="38" cy="42" r="4.2" fill="#0F172A" />
              <circle cx="62" cy="42" r="4.2" fill="#0F172A" />
              <circle cx="39.5" cy="40.5" r="1.2" fill="#FFFFFF" />
              <circle cx="63.5" cy="40.5" r="1.2" fill="#FFFFFF" />
            </>
          )}

          {/* Mouth */}
          {animateMouth ? (
            <motion.path
              d="M 42 54 Q 50 62 58 54"
              fill="none"
              stroke="#0F172A"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={{
                scaleY: [1, 2.2, 0.8, 1.8, 1],
                y: [0, 1.5, -0.5, 1, 0]
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          ) : (
            <path
              d="M 42 54 Q 50 61 58 54"
              fill="none"
              stroke="#0F172A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          )}

          {/* Rosy Cheeks */}
          <circle cx="28" cy="48" r="4" className="fill-rose-400/35" />
          <circle cx="72" cy="48" r="4" className="fill-rose-400/35" />

          {/* SVG glasses overlay */}
          {accessory === 'glasses' && (
            <g id="glasses-layer" className="pointer-events-none">
              {/* Left Lens */}
              <circle cx="38" cy="42" r="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
              {/* Right Lens */}
              <circle cx="62" cy="42" r="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
              {/* Glossy Glare Reflections */}
              <path d="M 34 38 L 38 42" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              <path d="M 58 38 L 62 42" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              {/* Connector Bridge */}
              <path d="M 46 42 Q 50 39 54 42" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
              {/* Left Temple */}
              <path d="M 30 42 Q 26 40 22 43" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              {/* Right Temple */}
              <path d="M 70 42 Q 74 40 78 43" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
        </g>
      </svg>

      {/* Accessories */}
      {accessory === 'stars' && (
        <div className="absolute top-[20%] right-[10%] text-yellow-400 text-lg animate-bounce">
          <Sparkles className="w-5 h-5 fill-current" />
        </div>
      )}

      {accessory === 'shield' && (
        <div className="absolute top-[22%] left-[10%] text-clinic-600">
          <Shield className="w-5 h-5 fill-clinic-100" />
        </div>
      )}

      {accessory === 'crown' && (
        <div className="absolute top-[-3%] left-1/2 -translate-x-1/2 text-amber-400 drop-shadow-sm">
          <Star className="w-7 h-7 fill-amber-400" />
        </div>
      )}

      {accessory === 'pin' && (
        <div className="absolute top-[18%] left-[12%] text-indigo-500 animate-pulse">
          <MapPin className="w-5 h-5 fill-indigo-100" />
        </div>
      )}
    </div>
  );
}
