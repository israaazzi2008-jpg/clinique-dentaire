import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data';
import { Phone, Mail, MapPin, Clock, Calendar, Check, Plus, Minus, Compass, Info } from 'lucide-react';

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // SVG-based custom map representation to illustrate Paris Republic
  const renderCustomMap = () => (
    <div className="relative w-full h-[280px] bg-sky-950 rounded-2xl overflow-hidden border border-sky-800 shadow-inner flex flex-col justify-between p-4 group">
      {/* City grids design */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      
      {/* Abstract streets drawing */}
      <svg className="absolute inset-0 w-full h-full text-sky-900/30 stroke-current stroke-2 pointer-events-none" fill="none">
        <line x1="10%" y1="0%" x2="10%" y2="100%" />
        <line x1="45%" y1="0%" x2="45%" y2="100%" strokeWidth="4" />
        <line x1="80%" y1="0%" x2="80%" y2="100%" />
        <line x1="0%" y1="30%" x2="100%" y2="30%" />
        <line x1="0%" y1="65%" x2="100%" y2="65%" strokeWidth="6" />
        {/* Diagonal Boulevard */}
        <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="5" />
      </svg>

      {/* Place de la République Metro station landmark */}
      <div className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center animate-pulse">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[9px] font-mono font-bold text-emerald-300 bg-sky-900/80 px-1.5 py-0.5 rounded border border-emerald-500/30 mt-1">
          Métro : République
        </span>
      </div>

      {/* Clinic location glowing pin */}
      <div className="absolute top-[52%] left-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        {/* Radar ripple rings */}
        <div className="absolute -inset-4 rounded-full border border-clinic-400 animate-ping opacity-65 duration-1000" />
        <div className="absolute -inset-8 rounded-full border border-clinic-400/50 animate-ping opacity-35 duration-1000" />
        
        {/* Pin marker */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-9 h-9 rounded-full bg-clinic-500 text-white flex items-center justify-center shadow-lg border-2 border-white"
        >
          <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>
        
        {/* Card tag */}
        <span className="text-[10px] font-display font-bold text-white bg-clinic-600 px-2 py-0.5 rounded shadow border border-clinic-400 mt-1.5 whitespace-nowrap">
          Dr. Émilie Laurent
        </span>
      </div>

      {/* Map utilities */}
      <div className="relative z-10 text-white flex flex-col justify-between h-full w-full pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold bg-sky-900/90 text-sky-200 px-2 py-0.5 rounded border border-sky-800">
            GPS: 48.8661° N, 2.3687° E
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-sky-900/90 px-2 py-0.5 rounded border border-emerald-800">
            ● Cabinet Ouvert
          </span>
        </div>
        
        <div className="mt-auto bg-sky-950/90 border border-sky-800/80 backdrop-blur-sm p-2.5 rounded-xl text-left">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-clinic-400" />
            14 Ave. de la République, Paris 11e
          </h4>
          <p className="text-[10px] text-sky-200 mt-0.5">À 2 minutes à pied du Métro République.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info & Custom Map (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="text-xs font-mono font-bold text-clinic-600 tracking-widest uppercase mb-3">
                Informations Pratiques
              </div>
              <h2 className="font-display font-extrabold text-3xl text-warmneutral-900 tracking-tight mb-5">
                Nous Trouver & Nous Contacter
              </h2>
              <p className="text-sm text-warmneutral-800 leading-relaxed mb-6">
                Le secrétariat du Dr. Laurent est à votre entière disposition par téléphone pour coordonner votre prise en charge ou répondre à vos questions.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-5">
              
              {/* Address */}
              <div className="flex gap-4 p-4 rounded-2xl bg-warmneutral-50 border border-clinic-100">
                <div className="w-10 h-10 rounded-xl bg-clinic-100 text-clinic-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-warmneutral-900 uppercase tracking-wide">Adresse du Cabinet</h4>
                  <p className="text-sm font-semibold text-warmneutral-800 mt-1">{CLINIC_INFO.address}</p>
                  <p className="text-xs text-warmneutral-800 font-medium mt-0.5">{CLINIC_INFO.metro}</p>
                </div>
              </div>

              {/* Telephone */}
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className="flex gap-4 p-4 rounded-2xl bg-clinic-50 border border-clinic-100/60 hover:bg-clinic-100/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-clinic-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-clinic-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-clinic-800 uppercase tracking-wide">Téléphone (Secrétariat)</h4>
                  <p className="text-base font-extrabold text-clinic-700 mt-1 group-hover:underline">{CLINIC_INFO.phone}</p>
                  <p className="text-[11px] text-clinic-600 font-medium mt-0.5">Appel gratuit • Tiers payant carte vitale</p>
                </div>
              </a>

              {/* Opening Hours */}
              <div className="flex gap-4 p-4 rounded-2xl bg-warmneutral-50 border border-clinic-100">
                <div className="w-10 h-10 rounded-xl bg-clinic-100 text-clinic-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left w-full">
                  <h4 className="text-xs font-bold text-warmneutral-900 uppercase tracking-wide">Heures d'Ouverture</h4>
                  <div className="mt-3 space-y-1.5 w-full">
                    {CLINIC_INFO.hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-warmneutral-800">
                        <span className="font-semibold">{item.days}</span>
                        <span className="font-mono bg-white px-2 py-0.5 rounded border border-clinic-100">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Custom SVG Map Visual */}
            {renderCustomMap()}

            {/* Emergency Info alert */}
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 text-left flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide">Urgences & Gardes</h4>
                <p className="text-xs text-rose-800 font-medium leading-relaxed mt-1">
                  {CLINIC_INFO.emergencyNotice}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <div className="text-xs font-mono font-bold text-clinic-600 tracking-widest uppercase mb-3">
                Foire Aux Questions
              </div>
              <h2 className="font-display font-extrabold text-3xl text-warmneutral-900 tracking-tight mb-5">
                Des Réponses à vos Questions
              </h2>
              <p className="text-sm text-warmneutral-800 leading-relaxed">
                Avant votre première visite au sein de notre établissement, parcourez les questions les plus fréquentes posées par nos nouveaux patients.
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'bg-clinic-50/40 border-clinic-300 shadow-md'
                        : 'bg-warmneutral-50 border-clinic-100/80 hover:bg-warmneutral-100/60'
                    }`}
                  >
                    {/* Accordion Trigger */}
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer outline-none select-none"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-mono font-bold text-clinic-600 tracking-widest uppercase">
                          {item.category}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-warmneutral-900 leading-tight">
                          {item.question}
                        </span>
                      </div>

                      <div className={`p-2 rounded-full ${isOpen ? 'bg-clinic-500 text-white shadow-sm' : 'bg-white text-clinic-600 border border-clinic-100'} transition-all`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Accordion Content Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm text-warmneutral-800 leading-relaxed border-t border-clinic-100/50 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom contact CTA card */}
            <div className="bg-clinic-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl text-left relative overflow-hidden">
              {/* Background graphic elements */}
              <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-56 h-56 bg-clinic-600 rounded-full filter blur-[60px] opacity-25" />
              
              <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-4 relative z-10 leading-tight">
                Vous souhaitez planifier une consultation ?
              </h3>
              <p className="text-xs sm:text-sm text-clinic-100 leading-relaxed mb-6 max-w-lg relative z-10">
                Nos lignes téléphoniques sont à votre disposition pour planifier un rendez-vous complet, obtenir des informations tarifaires personnalisées ou nous signaler une gêne.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-clinic-500 hover:bg-clinic-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler : {CLINIC_INFO.phone}</span>
                </a>
                
                <span className="text-[11px] font-mono text-clinic-200 text-center sm:text-left">
                  Ou par mail : <strong className="text-white font-semibold underline">{CLINIC_INFO.email}</strong>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
