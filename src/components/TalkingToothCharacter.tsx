import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Heart, Shield, Star, MapPin, Smile } from 'lucide-react';
import ToothVisual from './ToothVisual';

interface TalkingToothProps {
  id: string;
  name: string;
  role: string;
  expression: 'wise' | 'excited' | 'kind' | 'proud' | 'welcoming';
  color: string;
  accessory?: 'glasses' | 'stars' | 'shield' | 'crown' | 'pin';
  text: string;
  interactiveContent?: React.ReactNode;
}

export default function TalkingToothCharacter({
  id,
  name,
  role,
  expression,
  color,
  accessory,
  text,
  interactiveContent
}: TalkingToothProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Random blink interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-4">
      {/* 1. Open Talking Tooth Header (No outer box/cadre wrapper) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-2 px-1 relative z-10">
        
        {/* Interactive Tooth Character Visual */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-400/50 via-ruby-500/50 to-sky-400/50 opacity-60 blur-xl -z-10 animate-pulse" />
          
          <motion.div
            drag
            dragSnapToOrigin={false}
            dragMomentum={true}
            whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 100 }}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className="relative w-28 h-28 sm:w-36 sm:h-36 select-none cursor-grab active:cursor-grabbing z-20 touch-none"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              animate={{
                y: isHovered ? [0, -10, 0] : [0, -6, 0],
                rotate: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5]
              }}
              transition={{
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="w-full h-full"
            >
              <ToothVisual
                expression={expression}
                accessory={accessory}
                color={color}
                isBlinking={isBlinking}
                isHovered={isHovered}
                animateMouth={true}
                className="w-full h-full filter drop-shadow-md"
              />
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-clinic-600 text-white font-mono text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs whitespace-nowrap pointer-events-none">
            ● Parle
          </div>
        </div>

        {/* Speech Bubble / Message Content (Clean, borderless floating layout) */}
        <div className="flex-grow text-center sm:text-left min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                {name}
              </h3>
              <span className={`text-[10px] font-mono font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider text-white bg-gradient-to-r ${color} shadow-2xs`}>
                {role}
              </span>
            </div>

            {/* Soundwave animation */}
            <div className="hidden sm:flex items-center gap-1 h-3.5 px-2">
              <motion.div className="w-0.5 h-3 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 2.2, 0.8, 2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
              <motion.div className="w-0.5 h-2 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 1.8, 0.5, 2.2, 1] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} />
              <motion.div className="w-0.5 h-3.5 bg-ruby-500 rounded-full" animate={{ scaleY: [1, 2, 0.8, 1.8, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
            </div>
          </div>

          <p className="text-sm sm:text-base font-extrabold text-slate-800 italic leading-relaxed">
            "{text}"
          </p>
        </div>

      </div>

      {/* 2. Full-Width Interactive Section Content */}
      {interactiveContent && (
        <div className="w-full">
          {interactiveContent}
        </div>
      )}
    </div>
  );
}
