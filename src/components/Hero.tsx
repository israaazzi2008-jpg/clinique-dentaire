import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Star, MapPin, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import Logo from './Logo';

export function ToothSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 20 40 C 20 20, 35 15, 50 25 C 65 15, 80 20, 80 40 C 80 55, 75 65, 70 70 C 68 75, 65 90, 60 92 C 55 94, 50 80, 50 70 C 50 80, 45 94, 40 92 C 35 90, 32 75, 30 70 C 25 65, 20 55, 20 40 Z" />
    </svg>
  );
}

export default function Hero() {
  const floatingTeeth = [
    { size: 40, x: "10%", y: "25%", delay: 0, duration: 8, opacity: 0.12 },
    { size: 28, x: "85%", y: "15%", delay: 1, duration: 6, opacity: 0.08 },
    { size: 52, x: "5%", y: "70%", delay: 2, duration: 10, opacity: 0.06 },
    { size: 36, x: "90%", y: "65%", delay: 1.5, duration: 7, opacity: 0.1 },
    { size: 24, x: "45%", y: "12%", delay: 3, duration: 9, opacity: 0.05 },
    { size: 32, x: "80%", y: "82%", delay: 0.5, duration: 8.5, opacity: 0.09 },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] pt-28 md:pt-36 pb-16 px-4 md:px-10 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-red-50/30"
    >
      {/* Decorative colored radial blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/60 rounded-full filter blur-[120px] opacity-50 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-red-100/60 rounded-full filter blur-[150px] opacity-40 -z-10" />

      {/* Floating moving teeth particles */}
      {floatingTeeth.map((tooth, i) => (
        <motion.div
          key={i}
          className="absolute text-clinic-500 pointer-events-none -z-10"
          style={{
            left: tooth.x,
            top: tooth.y,
            width: tooth.size,
            height: tooth.size,
            opacity: tooth.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: tooth.duration,
            repeat: Infinity,
            delay: tooth.delay,
            ease: "easeInOut",
          }}
        >
          <ToothSVG className="w-full h-full" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-clinic-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6 shadow-2xs border border-clinic-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-clinic-600 animate-pulse" />
            <span>Abir Smile Clinic Dentaire • Dr. Ghouti Mohamed Cherif</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-tight mb-6"
          >
            Votre plus beau <span className="text-clinic-600 relative inline-block">sourire
              <svg className="absolute left-0 bottom-[-4px] w-full h-2 text-ruby-500/80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>,<br />
            façonné avec passion.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8 font-medium"
          >
            Radio numérique RVG, détartrage ultrasonique, extractions dentaires, chirurgies, prothèses amovibles et fixes, blanchiment dentaire, ODF, prise en charge des douleurs ATM, botox et filler.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-clinic-600 hover:bg-clinic-700 text-white font-bold py-4 px-8 rounded-2xl text-sm text-center tracking-wide shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Me Contacter</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Core Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-slate-200/80 pt-8 mt-10 w-full"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-ruby-600">10</span>
              <span className="text-xs text-slate-600 font-bold flex items-center gap-1 mt-1">
                <HeartPulse className="w-3.5 h-3.5 text-ruby-500" /> Soins Spécialisés
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-clinic-600">RVG 3D</span>
              <span className="text-xs text-slate-600 font-bold flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-clinic-600" /> Radio Numérique
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-ruby-600">100%</span>
              <span className="text-xs text-slate-600 font-bold flex items-center gap-1 mt-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Satisfaction Patient
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right graphic column with Logo showcase */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl p-8 sm:p-12 bg-white shadow-[0_4px_24px_rgba(56,189,248,0.25),0_4px_24px_rgba(225,29,72,0.25)] border-2 border-sky-500/80 hover:border-ruby-500 flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Background glowing halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-blue-100 to-red-100 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <Logo size="xl" showDoctors={true} className="mb-6" />

              <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-medium mb-6">
                Bienvenue au cabinet dentaire Abir Smile. Une équipe expérimentée pour tous vos besoins de soins dentaires et d'esthétique du sourire.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  Facebook Officiel
                </a>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                >
                  Carte Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
