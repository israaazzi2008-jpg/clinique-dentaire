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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DENTAL_SERVICES.map((service: DentalService) => {
            const isUrgency = service.urgencyLevel === 'Urgence';
            const isPrioritaire = service.urgencyLevel === 'Prioritaire';

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: '0 25px 30px -5px rgba(20, 184, 166, 0.12), 0 12px 14px -5px rgba(20, 184, 166, 0.06)',
                }}
                className="bg-gradient-to-b from-white to-warmneutral-50 rounded-3xl p-8 border border-clinic-100 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Tooth watermark watermark */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 text-clinic-100/20 group-hover:text-clinic-200/30 group-hover:scale-125 transition-all duration-500 pointer-events-none">
                  <ToothSVG className="w-full h-full fill-current" />
                </div>

                {/* Animated Flying/Floating Tooth on Hover */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6 text-clinic-400 opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:text-clinic-500 transition-all duration-300 w-7 h-7"
                >
                  <ToothSVG className="w-full h-full fill-current" />
                </motion.div>

                {/* Glow bar at top of card on hover */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-clinic-400 to-sky-400 rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div>
                  {/* Card Header (Icon & Urgency Label) */}
                  <div className="flex items-start justify-between mb-6 pr-6">
                    <div className="p-3.5 bg-white rounded-2xl text-clinic-600 shadow-sm border border-clinic-50/50 group-hover:bg-clinic-500 group-hover:text-white transition-all duration-300">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
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
                  <h3 className="font-display font-extrabold text-xl text-warmneutral-900 group-hover:text-clinic-600 transition-colors mb-3 text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-warmneutral-800 leading-relaxed mb-6 text-left">
                    {service.description}
                  </p>

                  {/* Benefits bullets list */}
                  <ul className="space-y-3.5 mb-8 border-t border-clinic-100/50 pt-5 text-left">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-warmneutral-800 leading-relaxed">
                        <Icons.Check className="w-4 h-4 text-clinic-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer of Card */}
                <div className="flex items-center justify-between border-t border-clinic-100/40 pt-4 mt-auto">
                  <span className="text-[11px] font-mono font-semibold text-warmneutral-800 flex items-center gap-1.5">
                    <Icons.Clock className="w-3.5 h-3.5 text-clinic-500" />
                    {service.duration}
                  </span>
                  
                  <span className="text-xs font-bold text-clinic-600 group-hover:text-clinic-700 flex items-center gap-1 transition-colors">
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
