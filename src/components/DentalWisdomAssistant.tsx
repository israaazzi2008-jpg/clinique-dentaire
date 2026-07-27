import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ToothSVG } from './Hero';
import { Sparkles, X } from 'lucide-react';

const DENTAL_TIPS = [
  "Brossez-vous les dents 2 fois par jour pendant 2 minutes complètes !",
  "L'émail de vos dents est plus dur que vos os. Prenez-en grand soin !",
  "Le fil dentaire nettoie les 40% de surfaces que la brosse ne peut atteindre.",
  "Changez de brosse à dents tous les 3 mois pour garder une efficacité optimale !",
  "Le Dr. Ghouti Mohamed Cherif utilise une radio numérique RVG de haute précision.",
  "Évitez de vous rincer la bouche tout de suite après le brossage pour laisser agir le fluor.",
  "Une rage de dent ? Notre cabinet garde des créneaux de consultation prioritaires.",
  "Le blanchiment dentaire professionnel préserve l'émail tout en rajeunissant le sourire."
];

export default function DentalWisdomAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(DENTAL_TIPS[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    // Show tip bubble after 2.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleToothClick = () => {
    // Perform a fun spin animation
    setIsSpinning(true);
    // Change to a new random tip
    const randomIndex = Math.floor(Math.random() * DENTAL_TIPS.length);
    setCurrentTip(DENTAL_TIPS[randomIndex]);
    setIsOpen(true);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Tip Speech Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            className="mb-3 max-w-[240px] sm:max-w-xs bg-white p-4 rounded-2xl shadow-md border border-sky-200 hover:border-ruby-200 text-left relative pointer-events-auto"
          >
            {/* Close speech bubble button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5 text-clinic-600 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-clinic-500 animate-spin" />
              <span>Chicot, le Guide Volant</span>
            </div>

            <p className="text-xs text-slate-800 leading-relaxed font-medium pr-3">
              "{currentTip}"
            </p>

            {/* Bubble Tail */}
            <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white border-r border-b border-clinic-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive Tooth Companion */}
      <motion.button
        onClick={handleToothClick}
        animate={
          isSpinning
            ? { rotate: 360, scale: [1, 1.3, 1] }
            : {
                y: [0, -12, 0],
                rotate: [0, 8, -8, 0],
              }
        }
        transition={
          isSpinning
            ? { duration: 0.8, ease: "easeInOut" }
            : {
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }
        }
        className="pointer-events-auto flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-clinic-500 via-clinic-600 to-ruby-500 text-white shadow-md border-2 border-white hover:border-clinic-300 shadow-clinic-500/10 cursor-pointer relative group"
        title="Cliquez pour un conseil dentaire !"
      >
        {/* Pulse outline rings */}
        <div className="absolute inset-0 rounded-full border border-clinic-300 animate-ping opacity-25" />

        <ToothSVG className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
        
        {/* Sparkles element */}
        <div className="absolute -top-1 -left-1 text-ruby-500 opacity-0 group-hover:opacity-100 transition-opacity">
          ✦
        </div>
      </motion.button>
    </div>
  );
}
