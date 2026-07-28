import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ToothVisual from './ToothVisual';

interface NavItem {
  id: string;
  label: string;
  frenchTitle: string;
  toothNumber: number;
  color: string;
  expression: 'wise' | 'excited' | 'kind' | 'proud' | 'welcoming';
  accessory?: 'glasses' | 'stars' | 'shield' | 'crown' | 'pin';
}

interface DentalNavigationArchProps {
  activeTab: string;
  onChangeTab: (tabId: string) => void;
}

export default function DentalNavigationArch({ activeTab, onChangeTab }: DentalNavigationArchProps) {
  const [hoveredTabId, setHoveredTabId] = useState<string | null>(null);
  const navItems: NavItem[] = [
    {
      id: 'accueil',
      label: 'Accueil',
      frenchTitle: 'Sagesse d\'Accueil',
      toothNumber: 18,
      color: 'from-clinic-500 from-40% to-ruby-500 to-60%',
      expression: 'wise',
      accessory: 'glasses'
    },
    {
      id: 'scanner',
      label: 'Scanner 3D',
      frenchTitle: 'Incisive Interactive',
      toothNumber: 11,
      color: 'from-clinic-500 from-40% to-ruby-500 to-60%',
      expression: 'excited',
      accessory: 'stars'
    },
    {
      id: 'soins',
      label: 'Nos Soins',
      frenchTitle: 'Canine des Soins',
      toothNumber: 13,
      color: 'from-clinic-500 from-40% to-ruby-500 to-60%',
      expression: 'kind',
      accessory: 'shield'
    },
    {
      id: 'avis',
      label: 'Témoignages',
      frenchTitle: 'Prémolaire d\'Or',
      toothNumber: 15,
      color: 'from-clinic-500 from-40% to-ruby-500 to-60%',
      expression: 'proud',
      accessory: 'crown'
    },
    {
      id: 'contact',
      label: 'Contact',
      frenchTitle: 'Molaire de Contact',
      toothNumber: 16,
      color: 'from-clinic-500 from-40% to-ruby-500 to-60%',
      expression: 'welcoming',
      accessory: 'pin'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-40 mb-8">
      {/* Background Arch Line */}
      <div className="absolute top-[40%] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-clinic-200/40 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

      {/* Main Arch Grid */}
      <div className="grid grid-cols-6 gap-y-4 gap-x-1 sm:flex sm:flex-wrap items-center justify-center sm:gap-10 md:gap-14">
        {navItems.map((item, idx) => {
          const isActive = activeTab === item.id;
          
          // Layout placement for mobile 3-in-top-row, 2-underneath grid
          const mobileGridClass = idx === 3 
            ? 'col-start-2 col-span-2 sm:col-start-auto sm:col-span-auto' 
            : 'col-span-2 sm:col-span-auto';
          
          return (
            <motion.div
              key={item.id}
              drag
              dragSnapToOrigin={false}
              dragMomentum={true}
              whileDrag={{ scale: 1.2, zIndex: 100, cursor: 'grabbing' }}
              whileHover={{ scale: 1.1 }}
              onTap={() => onChangeTab(item.id)}
              onPointerEnter={() => setHoveredTabId(item.id)}
              onPointerLeave={() => setHoveredTabId(null)}
              className={`relative flex flex-col items-center p-1 sm:p-2 outline-none cursor-grab active:cursor-grabbing touch-none select-none ${mobileGridClass} ${
                isActive
                  ? 'text-clinic-600 font-extrabold'
                  : 'text-warmneutral-800 hover:text-ruby-600'
              }`}
            >
              {/* Active Aura glow behind item - vivid cyan & red light glow */}
              {isActive && (
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-ruby-500 to-sky-400 opacity-60 blur-md -z-10 shadow-[0_0_20px_rgba(14,165,233,0.8),0_0_20px_rgba(239,68,68,0.8)]" />
              )}

              {/* Tooth Number Tag */}
              <div className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 mb-2 border border-slate-200 shadow-sm">
                Dent N° {item.toothNumber}
              </div>

              {/* Central Expressive Tooth Visual */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-1.5">
                <div className="relative z-10 w-full h-full">
                  <ToothVisual
                    expression={item.expression}
                    accessory={item.accessory}
                    color={item.color}
                    isHovered={isActive || hoveredTabId === item.id}
                    animateMouth={isActive}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Item Text Title */}
              <span className="text-xs font-bold font-display tracking-tight mt-1 whitespace-nowrap">
                {item.label}
              </span>

              {/* Floating Indicator active tag */}
              {isActive && (
                <div className="absolute -bottom-2.5 w-2 h-2 rounded-full bg-ruby-600 shadow-[0_0_8px_rgba(220,38,38,1)]" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
