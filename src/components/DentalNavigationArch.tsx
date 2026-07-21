import React from 'react';
import { motion } from 'motion/react';
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
  const navItems: NavItem[] = [
    {
      id: 'accueil',
      label: 'Accueil',
      frenchTitle: 'Sagesse d\'Accueil',
      toothNumber: 18,
      color: 'from-clinic-500 to-teal-500',
      expression: 'wise',
      accessory: 'glasses'
    },
    {
      id: 'scanner',
      label: 'Scanner 3D',
      frenchTitle: 'Incisive Interactive',
      toothNumber: 11,
      color: 'from-teal-400 to-clinic-500',
      expression: 'excited',
      accessory: 'stars'
    },
    {
      id: 'soins',
      label: 'Nos Soins',
      frenchTitle: 'Canine des Soins',
      toothNumber: 13,
      color: 'from-emerald-400 to-clinic-500',
      expression: 'kind',
      accessory: 'shield'
    },
    {
      id: 'avis',
      label: 'Témoignages',
      frenchTitle: 'Prémolaire d\'Or',
      toothNumber: 15,
      color: 'from-amber-400 to-clinic-500',
      expression: 'proud',
      accessory: 'crown'
    },
    {
      id: 'contact',
      label: 'Rendez-vous',
      frenchTitle: 'Molaire d\'Accès',
      toothNumber: 16,
      color: 'from-indigo-400 to-clinic-600',
      expression: 'welcoming',
      accessory: 'pin'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-40 mb-8">
      {/* Background Arch Line */}
      <div className="absolute top-[40%] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-clinic-200/40 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

      {/* Main Arch Grid */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              drag
              whileDrag={{ scale: 1.2, zIndex: 50, cursor: 'grabbing' }}
              onClick={() => onChangeTab(item.id)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center p-2 outline-none transition-all duration-300 cursor-grab active:cursor-grabbing ${
                isActive
                  ? 'text-clinic-600 font-extrabold scale-105'
                  : 'text-warmneutral-800 hover:text-clinic-500'
              }`}
            >
              {/* Active Aura glow behind item */}
              {isActive && (
                <motion.div
                  layoutId="activeNavAura"
                  className={`absolute -inset-3 rounded-full bg-gradient-to-br ${item.color} opacity-15 blur-xl -z-10`}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              {/* Tooth Number Tag */}
              <div className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-warmneutral-100 text-warmneutral-600 mb-2 border border-warmneutral-200 shadow-sm">
                Dent N° {item.toothNumber}
              </div>

              {/* Central Expressive Tooth Visual (No static icons or card frames) */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative mb-1.5">
                <ToothVisual
                  expression={item.expression}
                  accessory={item.accessory}
                  color={item.color}
                  isHovered={isActive}
                  animateMouth={isActive}
                  className="w-full h-full"
                />
              </div>

              {/* Item Text Title */}
              <span className="text-xs font-bold font-display tracking-tight mt-1 whitespace-nowrap">
                {item.label}
              </span>

              {/* Floating Indicator active tag */}
              {isActive && (
                <motion.div
                  layoutId="activeNavDot"
                  className="absolute -bottom-2.5 w-1.5 h-1.5 rounded-full bg-clinic-600 shadow-[0_0_8px_rgba(20,184,166,1)]"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
