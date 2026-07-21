import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Smile } from 'lucide-react';
import { CLINIC_INFO } from '../data';

const dentistHeroImage = "/src/assets/images/dentist_hero_banner_1784556584458.jpg";

// Reusable Tooth SVG Path Component
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
  // Config for floating teeth backgrounds
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
      className="relative min-h-screen pt-28 md:pt-36 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-dot-grid"
    >
      {/* Decorative colored radial blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-clinic-100 rounded-full filter blur-[120px] opacity-40 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-clinic-200 rounded-full filter blur-[150px] opacity-30 -z-10" />

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
          {/* Tag badge with stagger entry */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-clinic-100 text-clinic-800 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 shadow-sm border border-clinic-200/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-clinic-600 animate-pulse" />
            <span>Cabinet Conventionné • Dr. Émilie Laurent</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-warmneutral-900 tracking-tight leading-tight mb-6"
          >
            Votre plus beau <span className="text-clinic-600 relative inline-block">sourire
              <svg className="absolute left-0 bottom-[-4px] w-full h-2 text-clinic-200/80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>,<br />commence en douceur.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-warmneutral-800 leading-relaxed max-w-2xl mb-8"
          >
            Alliant une expertise de pointe en implantologie et esthétique avec une écoute attentive et bienveillante. Nous vous garantissons des soins de haute qualité, sans douleur, dans un cadre moderne et rassurant.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#interactif"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-clinic-500 hover:bg-clinic-600 text-white font-semibold py-4 px-8 rounded-full text-sm text-center tracking-wide shadow-lg shadow-clinic-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Découvrir le Sourire Interactif</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#soins"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-clinic-50 text-clinic-600 border border-clinic-200 font-semibold py-4 px-8 rounded-full text-sm text-center tracking-wide shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explorer nos traitements</span>
            </motion.a>
          </motion.div>

          {/* Core Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-clinic-100/60 pt-8 mt-10 w-full"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-bold text-clinic-600">4.9/5</span>
              <span className="text-xs text-warmneutral-800 font-medium flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Google Avis
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-bold text-clinic-600">100%</span>
              <span className="text-xs text-warmneutral-800 font-medium flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3 h-3 text-clinic-500" /> Sans Douleur
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-bold text-clinic-600">Option</span>
              <span className="text-xs text-warmneutral-800 font-medium flex items-center gap-1 mt-1">
                <Smile className="w-3 h-3 text-clinic-500" /> Alignement 3D
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right graphic column */}
        <div className="lg:col-span-5 relative">
          {/* Framed Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square lg:aspect-[4/5] object-cover bg-clinic-50"
          >
            {/* The generated dentist image */}
            <img
              src={dentistHeroImage}
              alt="Le Cabinet Dentaire Lumineux du Dr. Émilie Laurent"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Glassmorphic card overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 shadow-lg flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-clinic-500 flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <Smile className="w-5.5 h-5.5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-warmneutral-900">Cabinet de Haute Technologie</h4>
                <p className="text-[11px] text-warmneutral-800 mt-0.5">Empreintes optiques 3D & radiologie numérique sur place.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Absolute floating decorations */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-clinic-200/50 rounded-full filter blur-[20px] -z-10"
          />
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-clinic-100 rounded-full filter blur-[30px] -z-10"
          />
        </div>
      </div>
    </section>
  );
}
