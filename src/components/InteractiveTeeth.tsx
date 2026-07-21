import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOOTH_NODES } from '../data';
import { ToothNode } from '../types';
import ToothVisual from './ToothVisual';
import { AlertCircle, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function InteractiveTeeth() {
  const [selectedTooth, setSelectedTooth] = useState<ToothNode>(TOOTH_NODES[0]);
  const [hoveredToothId, setHoveredToothId] = useState<string | null>(null);

  // Helper to get tooth visual representation styles
  const getToothVisualInfo = (type: string) => {
    switch (type) {
      case 'incisive':
        return { expression: 'excited' as const, accessory: 'stars' as const, color: 'from-teal-400 to-clinic-500', name: 'Incisive' };
      case 'canine':
        return { expression: 'kind' as const, accessory: 'shield' as const, color: 'from-emerald-400 to-clinic-500', name: 'Canine' };
      case 'premolaire':
        return { expression: 'proud' as const, accessory: 'crown' as const, color: 'from-amber-400 to-clinic-500', name: 'Prémolaire' };
      case 'molaire':
        return { expression: 'welcoming' as const, accessory: 'pin' as const, color: 'from-indigo-400 to-clinic-600', name: 'Molaire' };
      case 'sagesse':
        return { expression: 'wise' as const, accessory: 'glasses' as const, color: 'from-clinic-500 to-teal-500', name: 'Sagesse' };
      default:
        return { expression: 'welcoming' as const, accessory: undefined, color: 'from-clinic-400 to-sky-500', name: 'Dent' };
    }
  };

  const handleToothClick = (tooth: ToothNode) => {
    setSelectedTooth(tooth);
  };

  const visual = getToothVisualInfo(selectedTooth.type);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* 1. Moving Teeth Interactive Arch (No card frames or game overlays) */}
        <div className="max-w-5xl mx-auto mb-10 relative py-4">
          
          {/* Interactive Row */}
          <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-8 md:gap-12 py-12 relative">
            {/* Horizontal connecting arch line with motion pulse */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-clinic-200 to-transparent -translate-y-1/2 -z-10 hidden sm:block" />

            {TOOTH_NODES.map((tooth, idx) => {
              const isSelected = selectedTooth.id === tooth.id;
              const isHovered = hoveredToothId === tooth.id;
              const visualStyle = getToothVisualInfo(tooth.type);

              // Distinct bobbing rates to emphasize natural "moving teeth" lévitation
              const bobOffsets = [-8, -14, -6, -16, -10];
              const rotateOffsets = [-5, 8, -8, 6, -6];
              const durations = [3.2, 4.0, 3.5, 4.4, 3.8];
              const delay = idx * 0.35;

              return (
                <motion.div
                  key={tooth.id}
                  drag
                  whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
                  className="relative flex flex-col items-center cursor-grab active:cursor-grabbing"
                >
                  
                  {/* Outer glowing aura */}
                  <AnimatePresence>
                    {(isSelected || isHovered) && (
                      <motion.div
                        layoutId={`aura-${tooth.id}`}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1.3 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        className={`absolute -inset-4 rounded-full bg-gradient-to-tr ${visualStyle.color} opacity-25 blur-xl -z-10`}
                        transition={{ type: "spring", stiffness: 180, damping: 15 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Pulsing ring around active tooth */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-3 w-16 h-16 border border-clinic-500 rounded-full pointer-events-none"
                    />
                  )}

                  {/* Bobbing Interactive Tooth Button */}
                  <motion.button
                    onClick={() => handleToothClick(tooth)}
                    onMouseEnter={() => setHoveredToothId(tooth.id)}
                    onMouseLeave={() => setHoveredToothId(null)}
                    animate={{
                      y: isSelected ? -15 : [0, bobOffsets[idx % bobOffsets.length], 0],
                      scale: isSelected ? 1.2 : isHovered ? 1.1 : 1,
                      rotate: isSelected ? [0, 8, -8, 0] : isHovered ? [0, -4, 4, 0] : [0, rotateOffsets[idx % rotateOffsets.length], 0],
                    }}
                    transition={{
                      y: isSelected
                        ? { type: "spring", stiffness: 400, damping: 12 }
                        : { duration: durations[idx % durations.length], repeat: Infinity, delay: delay, ease: "easeInOut" },
                      scale: { type: "spring", stiffness: 300, damping: 15 },
                      rotate: isSelected 
                        ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        : { duration: durations[idx % durations.length] * 1.5, repeat: Infinity, delay: delay, ease: "easeInOut" }
                    }}
                    className="cursor-pointer p-2 outline-none transition-all duration-300 bg-transparent border-0 shadow-none relative"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
                      <ToothVisual
                        expression={visualStyle.expression}
                        accessory={visualStyle.accessory}
                        color={visualStyle.color}
                        isHovered={isHovered || isSelected}
                        animateMouth={isSelected}
                        className="w-full h-full"
                      />
                    </div>
                    
                    {/* Tooth Number tag */}
                    <div className="mt-2.5 text-[10px] font-mono font-bold text-warmneutral-600 bg-warmneutral-100 px-2.5 py-0.5 rounded-full inline-block border border-warmneutral-200 shadow-sm">
                      N° {tooth.number}
                    </div>
                  </motion.button>

                  {/* Active Indicator label below */}
                  {isSelected && (
                    <motion.span
                      layoutId="arch-active-badge"
                      className="absolute -bottom-7 bg-clinic-600 text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-md animate-pulse"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      DÉCODÉE
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Quick labels below */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono font-bold text-warmneutral-800 pt-5 border-t border-clinic-50 mt-4">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-sm" /> Incisives</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm" /> Canines</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-sm" /> Prémolaires</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm" /> Molaires</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-sm" /> Sagesses</span>
          </div>
        </div>

        {/* 3. Detailed Procedure Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTooth.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-clinic-100 text-left relative overflow-hidden"
            >
              {/* Simplified Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Tooth Type & Role Description */}
                <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-clinic-50 pb-6 md:pb-0 md:pr-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-clinic-50 text-clinic-700 text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-clinic-100/50">
                      DENT N° {selectedTooth.number}
                    </span>
                    <span className="text-xs font-mono text-warmneutral-800 capitalize font-medium">
                      {selectedTooth.type}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-warmneutral-900 mb-3 tracking-tight">
                    {selectedTooth.nameInFrench}
                  </h3>

                  <p className="text-sm text-warmneutral-800 leading-relaxed font-medium">
                    {selectedTooth.roleDescription}
                  </p>
                </div>

                {/* Treatment Details */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clinic-600 block mb-1">
                      Soin Principal :
                    </span>
                    <h4 className="font-display font-bold text-lg text-clinic-700 mb-3 leading-tight">
                      {selectedTooth.primaryProcedure}
                    </h4>
                    <p className="text-xs sm:text-sm text-warmneutral-800 leading-relaxed font-medium mb-5">
                      {selectedTooth.procedureDetail}
                    </p>
                  </div>

                  {/* Metadata tags row */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-clinic-50">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-warmneutral-800 uppercase block">Durée</span>
                      <span className="text-xs sm:text-sm text-warmneutral-900 font-extrabold">{selectedTooth.treatmentDuration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-warmneutral-800 uppercase block">Bénéfice</span>
                      <span className="text-xs sm:text-sm text-warmneutral-900 font-extrabold">{selectedTooth.aestheticImpact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
