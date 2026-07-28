import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import { ToothSVG } from './components/Hero';
import FloatingTeethBackground from './components/FloatingTeethBackground';
import DentalNavigationArch from './components/DentalNavigationArch';
import DentalWisdomAssistant from './components/DentalWisdomAssistant';
import InteractiveTeeth from './components/InteractiveTeeth';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import TalkingToothCharacter from './components/TalkingToothCharacter';
import Logo from './components/Logo';
import { CLINIC_INFO, DENTAL_SERVICES } from './data';

import { 
  Smile, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  ExternalLink,
  Award, 
  HeartPulse,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [isChomping, setIsChomping] = useState(false);
  
  // Interactive lab variables
  const [windSpeed, setWindSpeed] = useState(1);
  const [poppedTeethCount, setPoppedTeethCount] = useState(0);
  const [particlesKey, setParticlesKey] = useState(0);

  const handleTabChange = (tabId: string) => {
    if (isChomping) return;
    
    setIsChomping(true);

    setTimeout(() => {
      setActiveTab(tabId);
    }, 450);

    setTimeout(() => {
      setIsChomping(false);
    }, 950);
  };

  const handlePopTooth = () => {
    setPoppedTeethCount((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen text-slate-800 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 overflow-x-hidden selection:bg-ruby-100 selection:text-ruby-900">
      
      {/* 1. Dynamic 3D Floating Teeth Interactive Background */}
      <FloatingTeethBackground 
        windSpeed={windSpeed} 
        onPopTooth={handlePopTooth} 
        particlesKey={particlesKey} 
      />

      {/* 2. Page-Wide Top Scroll / Loading Progress */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-clinic-500 from-40% to-ruby-500 to-60% z-50 shadow-sm" />

      {/* 3. Dynamic Interactive Jaws "CHOMP" Transition */}
      <AnimatePresence>
        {isChomping && (
          <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between">
            {/* Top Teeth Jaw Row */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="w-full h-1/2 bg-white border-b-8 border-ruby-600 shadow-2xl relative flex items-end justify-center pb-2 pointer-events-auto"
            >
              <div className="absolute bottom-0 left-0 right-0 h-8 flex overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-ruby-100 border-t border-ruby-300"
                    style={{
                      clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                    }}
                  />
                ))}
              </div>
              <div className="text-center pb-8">
                <span className="font-display font-extrabold text-clinic-600 text-sm tracking-widest uppercase block animate-pulse">
                  ABIR SMILE CLINIC DENTAIRE
                </span>
                <span className="text-[10px] font-mono text-slate-600 font-bold block mt-1">
                  CHARGEMENT DU SECTION...
                </span>
              </div>
            </motion.div>

            {/* Bottom Teeth Jaw Row */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="w-full h-1/2 bg-white border-t-8 border-clinic-600 shadow-2xl relative flex items-start justify-center pt-2 pointer-events-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-8 flex overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-clinic-100 border-b border-clinic-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 0 100%, 100% 100%)',
                    }}
                  />
                ))}
              </div>
              <div className="pt-8">
                <ToothSVG className="w-10 h-10 text-ruby-600 animate-bounce" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Elegant Sticky Header info bar */}
      <header className="relative z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo Brand with flying tooth tag */}
          <div className="flex items-center gap-3">
            <Logo size="md" showDoctors={false} />
            <div className="text-left">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-clinic-600 block">
                Abir Smile Clinic Dentaire
              </span>
              <span className="text-[11px] font-bold text-ruby-600 block -mt-1">
                Dr. Ghouti Mohamed Cherif
              </span>
            </div>
          </div>

          {/* Quick Clinic Info */}
          <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-ruby-600">
              <HeartPulse className="w-4 h-4" />
              <span>Soins Dentaires</span>
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-clinic-600">
              <ShieldCheck className="w-4 h-4 text-clinic-600" />
              <span>Matériel Stérile &amp; RVG</span>
            </span>
          </div>

        </div>
      </header>

      {/* 5. Main Canvas Space */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 relative z-10 min-h-[calc(100vh-140px)] flex flex-col items-center justify-start">
        
        {/* Section Title Intro */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-extrabold text-ruby-700 bg-ruby-50 px-3.5 py-1 rounded-full border border-ruby-200 inline-block mb-2">
            Cabinet Dentaire Abir Smile • Dr. Ghouti Mohamed Cherif
          </span>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Plateforme Interactive de Soins Dentaires
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Explorez nos soins, notre scanner 3D et contactez-nous directement pour toute demande.
          </p>
        </div>

        {/* 6. The Dental Navigation Arch */}
        <DentalNavigationArch activeTab={activeTab} onChangeTab={handleTabChange} />

        {/* 7. Active Interactive Section (No frame or cadre box) */}
        <div className="w-full max-w-6xl relative z-10 px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'linear' }}
              className="w-full"
            >
              {activeTab === 'accueil' && (
                <TalkingToothCharacter
                  id="accueil"
                  name="Dr. Ghouti"
                  role="Guide du Cabinet"
                  expression="wise"
                  color="from-clinic-500 to-ruby-500"
                  accessory="glasses"
                  text="Bienvenue chez Abir Smile Clinic Dentaire ! Le Dr. Ghouti Mohamed Cherif est à votre écoute pour des soins confortables."
                  interactiveContent={
                    <div className="space-y-4 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* Radio Numérique RVG */}
                        <div className="relative bg-gradient-to-br from-white via-sky-50/20 to-ruby-50/20 p-3.5 rounded-xl border border-sky-200 hover:border-ruby-200 shadow-[0_4px_16px_rgba(56,189,248,0.1),0_4px_16px_rgba(225,29,72,0.1)] hover:border-clinic-300 hover:shadow-[0_8px_32px_rgba(56,189,248,0.2),0_8px_32px_rgba(225,29,72,0.2)] transition-all duration-300 overflow-hidden min-h-[82px] flex items-center group">
                          {/* Fancy Emoji Backing Frame */}
                          <div className="absolute right-2 bottom-1 w-14 h-14 rounded-full bg-gradient-to-tr from-clinic-50/40 to-slate-100/30 flex items-center justify-center border border-sky-200 hover:border-ruby-200/80 group-hover:border-clinic-100 group-hover:from-clinic-50/60 group-hover:to-white transition-all duration-300 select-none pointer-events-none z-0">
                            {/* Inner emoji with its own soft 3D-like glow and animated movement */}
                            <div className="text-3xl filter drop-shadow-[0_2px_4px_rgba(30,41,59,0.03)] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out transform">
                              🩻
                            </div>
                            {/* Ambient colorful backing flare */}
                            <div className="absolute inset-2 rounded-full bg-clinic-400/5 blur-xs group-hover:bg-clinic-400/10 transition-colors" />
                          </div>
                          
                          {/* Inner text content inside its own structured text container */}
                          <div className="relative z-10 w-full text-left pr-10">
                            <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-clinic-600 bg-clinic-50/80 px-1.5 py-0.5 rounded border border-clinic-100/50 mb-1">
                              Imagerie
                            </span>
                            <h4 className="font-extrabold text-xs text-slate-900 tracking-tight leading-none group-hover:text-clinic-600 transition-colors">Radio Numérique RVG</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">Diagnostics précis instantanés.</p>
                          </div>
                        </div>

                        {/* Détartrage & Blanchiment */}
                        <div className="relative bg-gradient-to-br from-white via-sky-50/20 to-ruby-50/20 p-3.5 rounded-xl border border-sky-200 hover:border-ruby-200 shadow-[0_4px_16px_rgba(56,189,248,0.1),0_4px_16px_rgba(225,29,72,0.1)] hover:border-clinic-300 hover:shadow-[0_8px_32px_rgba(56,189,248,0.2),0_8px_32px_rgba(225,29,72,0.2)] transition-all duration-300 overflow-hidden min-h-[82px] flex items-center group">
                          {/* Fancy Emoji Backing Frame */}
                          <div className="absolute right-2 bottom-1 w-14 h-14 rounded-full bg-gradient-to-tr from-clinic-50/40 to-slate-100/30 flex items-center justify-center border border-sky-200 hover:border-ruby-200/80 group-hover:border-clinic-100 group-hover:from-clinic-50/60 group-hover:to-white transition-all duration-300 select-none pointer-events-none z-0">
                            {/* Inner emoji with its own soft 3D-like glow and animated movement */}
                            <div className="text-3xl filter drop-shadow-[0_2px_4px_rgba(30,41,59,0.03)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out transform">
                              ✨
                            </div>
                            {/* Ambient colorful backing flare */}
                            <div className="absolute inset-2 rounded-full bg-amber-400/5 blur-xs group-hover:bg-amber-400/10 transition-colors" />
                          </div>
                          
                          {/* Inner text content inside its own structured text container */}
                          <div className="relative z-10 w-full text-left pr-10">
                            <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-clinic-600 bg-clinic-50/80 px-1.5 py-0.5 rounded border border-clinic-100/50 mb-1">
                              Hygiène
                            </span>
                            <h4 className="font-extrabold text-xs text-slate-900 tracking-tight leading-none group-hover:text-clinic-600 transition-colors">Détartrage &amp; Blanchiment</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">Éclat et santé bucco-dentaire.</p>
                          </div>
                        </div>

                        {/* ODF, Botox & ATM */}
                        <div className="relative bg-gradient-to-br from-white via-sky-50/20 to-ruby-50/20 p-3.5 rounded-xl border border-sky-200 hover:border-ruby-200 shadow-[0_4px_16px_rgba(56,189,248,0.1),0_4px_16px_rgba(225,29,72,0.1)] hover:border-clinic-300 hover:shadow-[0_8px_32px_rgba(56,189,248,0.2),0_8px_32px_rgba(225,29,72,0.2)] transition-all duration-300 overflow-hidden min-h-[82px] flex items-center group">
                          {/* Fancy Emoji Backing Frame */}
                          <div className="absolute right-2 bottom-1 w-14 h-14 rounded-full bg-gradient-to-tr from-clinic-50/40 to-slate-100/30 flex items-center justify-center border border-sky-200 hover:border-ruby-200/80 group-hover:border-clinic-100 group-hover:from-clinic-50/60 group-hover:to-white transition-all duration-300 select-none pointer-events-none z-0">
                            {/* Inner emoji with its own soft 3D-like glow and animated movement */}
                            <div className="text-3xl filter drop-shadow-[0_2px_4px_rgba(30,41,59,0.03)] group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 ease-out transform">
                              🦷
                            </div>
                            {/* Ambient colorful backing flare */}
                            <div className="absolute inset-2 rounded-full bg-rose-400/5 blur-xs group-hover:bg-rose-400/10 transition-colors" />
                          </div>
                          
                          {/* Inner text content inside its own structured text container */}
                          <div className="relative z-10 w-full text-left pr-10">
                            <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-clinic-600 bg-clinic-50/80 px-1.5 py-0.5 rounded border border-clinic-100/50 mb-1">
                              Spécialité
                            </span>
                            <h4 className="font-extrabold text-xs text-slate-900 tracking-tight leading-none group-hover:text-clinic-600 transition-colors">ODF, Botox &amp; ATM</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">Traitements complets &amp; esthétique.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          onClick={() => handleTabChange('contact')}
                          className="bg-clinic-600 hover:bg-clinic-700 text-white font-bold py-3 px-6 rounded-xl text-xs cursor-pointer transition-colors text-center shadow-sm"
                        >
                          Me Contacter
                        </button>
                      </div>
                    </div>
                  }
                />
              )}

              {activeTab === 'scanner' && (
                <TalkingToothCharacter
                  id="scanner"
                  name="Chicot"
                  role="Anatomie Dentaire 3D"
                  expression="excited"
                  color="from-clinic-500 to-ruby-500"
                  accessory="stars"
                  text="Cliquez sur chaque dent pour voir les soins associés (Radio RVG, Prothèses, Extractions, ODF...)."
                  interactiveContent={<InteractiveTeeth />}
                />
              )}

              {activeTab === 'soins' && (
                <TalkingToothCharacter
                  id="soins"
                  name="Canine"
                  role="Catalogue des Soins"
                  expression="kind"
                  color="from-clinic-500 to-ruby-500"
                  accessory="shield"
                  text="Découvrez les 10 soins principaux proposés au cabinet Abir Smile."
                  interactiveContent={<Services />}
                />
              )}

              {activeTab === 'avis' && (
                <TalkingToothCharacter
                  id="avis"
                  name="Prémolaire"
                  role="Avis Patients"
                  expression="proud"
                  color="from-clinic-500 to-ruby-500"
                  accessory="crown"
                  text="Lisez les retours de nos patients satisfaits !"
                  interactiveContent={<Testimonials />}
                />
              )}

              {activeTab === 'contact' && (
                <TalkingToothCharacter
                  id="contact"
                  name="Molaire"
                  role="Page de Contact"
                  expression="welcoming"
                  color="from-clinic-500 to-ruby-500"
                  accessory="pin"
                  text="Contactez le cabinet Abir Smile ici."
                  interactiveContent={<Contact />}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      <DentalWisdomAssistant />

      {/* 9. Multi-column Professional Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden z-20 text-left">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ruby-500/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Block */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Logo size="md" showDoctors={true} className="mb-4" />
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Cabinet Dentaire Abir Smile. Une prise en charge complète pour toute la famille dans une ambiance accueillante et rassurante.
            </p>

            <div className="flex items-center gap-3 text-xs font-bold text-clinic-400">
              <ShieldCheck className="w-4 h-4 text-clinic-500" />
              <span>Radio Numérique RVG • Matériel Stérile</span>
            </div>
          </div>

          {/* All 10 Services Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Nos Soins Dentaires</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-300 font-medium">
              {DENTAL_SERVICES.map((s) => (
                <div key={s.id} className="flex items-center gap-1.5 hover:text-ruby-400 transition-colors">
                  <span className="text-ruby-500 font-bold">•</span>
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Nous Joindre</h4>
            <ul className="space-y-3 text-xs text-slate-300 font-medium w-full">
              <li>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-2 text-ruby-400 hover:text-ruby-300 font-extrabold transition-colors"
                >
                  <Phone className="w-4 h-4 text-ruby-500 shrink-0" />
                  <span>{CLINIC_INFO.formattedPhone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-clinic-500 shrink-0" />
                  <span className="truncate">{CLINIC_INFO.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Page Facebook Officielle</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>

              <li>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:underline"
                >
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Localisation Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex items-center justify-center text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Abir Smile Clinic Dentaire — Dr. Ghouti Mohamed Cherif.</p>
        </div>
      </footer>

    </div>
  );
}
