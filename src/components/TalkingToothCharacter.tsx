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
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-6 max-w-4xl mx-auto">
      {/* 1. Interactive Talking Tooth Character Visual */}
      <div className="relative flex-shrink-0">
        {/* Vibrant Red & Blue Dual Light Glow Aura around the character */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-ruby-500 to-sky-400 opacity-60 blur-lg -z-10 shadow-[0_0_30px_rgba(14,165,233,0.8),0_0_30px_rgba(239,68,68,0.8)] animate-pulse" />
        
        <motion.div
          drag
          dragSnapToOrigin={false}
          dragElastic={0.1}
          dragMomentum={false}
          whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 30 }}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          className="relative w-48 h-48 sm:w-56 sm:h-56 select-none cursor-grab active:cursor-grabbing z-20 touch-none"
        >
          <div className="w-full h-full relative">
            <motion.div
              animate={{
                y: isHovered ? [0, -15, 0] : [0, -8, 0],
                rotate: isHovered ? [-2, 2, -2] : [-1, 1, -1]
              }}
              transition={{
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="relative z-10 w-full h-full"
            >
              <ToothVisual
                expression={expression}
                accessory={accessory}
                color={color}
                isBlinking={isBlinking}
                isHovered={isHovered}
                animateMouth={true}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Small Talk Indicator Overlay Badge */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-clinic-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-[0_1px_2px_rgba(0,0,0,0.04)] animate-pulse">
          ● Parle
        </div>
      </div>

      {/* 2. Elegant, Comic-Style Speech Bubble (Displays Content Simplistically) */}
      <div className="flex-grow w-full text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-500/80 hover:border-ruby-500 shadow-[0_4px_24px_rgba(56,189,248,0.25),0_4px_24px_rgba(225,29,72,0.25)] relative"
        >
          {/* Arrow pointing at the tooth */}
          <div className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-white via-sky-50/20 to-ruby-50/20 border-l-2 border-b-2 border-clinic-100 rotate-45 hidden md:block" />
          <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-white via-sky-50/20 to-ruby-50/20 border-t-2 border-l-2 border-clinic-100 rotate-45 md:hidden" />

          {/* Name & Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-warmneutral-100 pb-3.5 mb-4">
            <div>
              <h3 className="font-display font-extrabold text-xl text-warmneutral-900 flex items-center gap-2">
                <span>{name}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-widest text-white bg-gradient-to-r ${color}`}>
                  {role}
                </span>
              </h3>
            </div>
            
            {/* Visual Equalizer / Soundwave to indicate speaking */}
            <div className="flex items-center gap-0.5 h-3.5 px-2">
              <motion.div className="w-0.5 h-3 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 2.5, 0.8, 2.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
              <motion.div className="w-0.5 h-2 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 1.8, 0.5, 2.5, 1] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} />
              <motion.div className="w-0.5 h-4 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 2.2, 0.8, 1.8, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
              <motion.div className="w-0.5 h-1 bg-clinic-500 rounded-full" animate={{ scaleY: [1, 3.0, 0.4, 2.0, 1] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }} />
            </div>
          </div>

          {/* Main "Spoken" simplistic content bubble */}
          <p className="text-base font-semibold text-warmneutral-900 leading-relaxed italic mb-5">
            "{text}"
          </p>

          {/* Interactive or detailed micro-content (renders simple lists or form components without heavy text) */}
          {interactiveContent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-warmneutral-50 rounded-2xl p-4 sm:p-5 border border-warmneutral-100"
            >
              {interactiveContent}
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
