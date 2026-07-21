import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PATIENT_TESTIMONIALS } from '../data';
import { PatientTestimonial } from '../types';
import { Star, MessageSquare, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PATIENT_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PATIENT_TESTIMONIALS.length) % PATIENT_TESTIMONIALS.length);
  };

  const current: PatientTestimonial = PATIENT_TESTIMONIALS[activeIndex];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-clinic-600 tracking-widest uppercase mb-3"
          >
            Avis & Témoignages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-warmneutral-900 tracking-tight mb-5"
          >
            La Confiance au Cœur de Notre Pratique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-warmneutral-800 leading-relaxed"
          >
            Découvrez les retours d'expérience et les avis laissés par nos patients. Leur satisfaction et leur sérénité sont notre plus belle réussite.
          </motion.p>
        </div>

        {/* Live Ratings Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 bg-white/70 backdrop-blur-md border border-clinic-100/50 p-6 rounded-3xl text-center">
          <div>
            <div className="flex items-center justify-center gap-1.5 text-clinic-600 font-display font-extrabold text-3xl">
              <span>4.9</span>
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-xs font-semibold text-warmneutral-800 mt-1">Note moyenne Google Avis</p>
          </div>
          <div className="border-y sm:border-y-0 sm:border-x border-clinic-100/80 py-4 sm:py-0">
            <div className="text-clinic-600 font-display font-extrabold text-3xl">380+</div>
            <p className="text-xs font-semibold text-warmneutral-800 mt-1">Patients satisfaits à Paris</p>
          </div>
          <div>
            <div className="text-clinic-600 font-display font-extrabold text-3xl">100%</div>
            <p className="text-xs font-semibold text-warmneutral-800 mt-1">Écoute & Zéro douleur</p>
          </div>
        </div>

        {/* Carousel testominial box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-clinic-200 pointer-events-none transform -translate-x-4 -translate-y-6 sm:-translate-x-8 sm:-translate-y-10">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 opacity-60 fill-current" />
          </div>

          <div className="relative bg-white rounded-3xl border border-clinic-100 p-8 sm:p-12 shadow-xl overflow-hidden min-h-[350px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Rating Stars animation */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08, type: "spring" }}
                        key={i}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Message Body */}
                  <p className="text-base sm:text-lg text-warmneutral-900 leading-relaxed italic mb-8 font-medium">
                    "{current.text}"
                  </p>
                </div>

                {/* Patient Author Signature Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-clinic-50 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-clinic-100 text-clinic-600 font-bold flex items-center justify-center text-sm tracking-wider uppercase border border-clinic-200">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-bold text-warmneutral-900 text-sm sm:text-base">
                        {current.name}
                      </h4>
                      <p className="text-xs text-warmneutral-800 font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-left sm:text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-clinic-600 bg-clinic-50 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      {current.treatmentReceived}
                    </span>
                    <span className="text-[10px] text-warmneutral-800 font-medium mt-1">
                      {current.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Arrows */}
          <div className="flex justify-center sm:justify-end gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 bg-white text-clinic-600 border border-clinic-100 hover:bg-clinic-50 rounded-full shadow-md transition-colors cursor-pointer"
              title="Avis précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 bg-white text-clinic-600 border border-clinic-100 hover:bg-clinic-50 rounded-full shadow-md transition-colors cursor-pointer"
              title="Avis suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
