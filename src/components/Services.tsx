import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { DENTAL_SERVICES } from '../data';
import { DentalService } from '../types';
import { ToothSVG } from './Hero';

// Dynamic icon helper to handle pre-compiled Lucide icons safely
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Activity className={className} />;
  return <IconComponent className={className} />;
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {DENTAL_SERVICES.map((service: DentalService) => {
            const isUrgency = service.urgencyLevel === 'Urgence';
            const isPrioritaire = service.urgencyLevel === 'Prioritaire';

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 25px -5px rgba(56, 189, 248, 0.2), 0 8px 10px -5px rgba(225, 29, 72, 0.15)',
                }}
                className="h-full bg-white rounded-2xl p-4 sm:p-5 border-2 border-sky-400/60 hover:border-ruby-500/80 shadow-xs flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Tooth watermark */}
                <div className="absolute -bottom-5 -right-5 w-20 h-20 text-clinic-100/30 group-hover:text-clinic-200/40 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <ToothSVG className="w-full h-full fill-current" />
                </div>

                {/* Glow bar at top of card on hover */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-clinic-500 via-sky-400 to-ruby-500 rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="flex flex-col flex-grow">
                  {/* Card Header (Icon & Urgency Label) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-clinic-50 to-ruby-50 rounded-xl text-clinic-600 shadow-2xs border border-clinic-100/80 group-hover:bg-gradient-to-br group-hover:from-clinic-600 group-hover:to-ruby-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap flex-shrink-0 ${
                        isUrgency
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : isPrioritaire
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-clinic-100 text-clinic-800 border border-clinic-200/50'
                      }`}
                    >
                      {service.urgencyLevel}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-clinic-600 transition-colors mb-1.5 text-left leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed text-left font-medium mb-3 min-h-[2.5rem]">
                    {service.description}
                  </p>

                  {/* Benefits bullets list */}
                  <ul className="space-y-1.5 mb-4 border-t border-slate-100 pt-3 text-left flex-grow">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-800 font-medium leading-normal">
                        <Icons.Check className="w-3.5 h-3.5 text-clinic-500 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer of Card */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
                  <span className="text-[11px] font-mono font-bold text-slate-600 flex items-center gap-1.5">
                    <Icons.Clock className="w-3.5 h-3.5 text-clinic-500" />
                    {service.duration}
                  </span>
                  
                  <span className="text-xs font-extrabold text-clinic-600 group-hover:text-ruby-600 flex items-center gap-1 transition-colors">
                    S'informer <Icons.ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
