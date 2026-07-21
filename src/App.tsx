import React, { useState, useEffect } from 'react';
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
import { CLINIC_INFO } from './data';

// Import icons for the custom Dental Laboratory Controls
import { 
  Smile, 
  Sparkles, 
  ShieldCheck, 
  Wind, 
  Zap, 
  HelpCircle, 
  Activity, 
  Clock, 
  Award, 
  Flame,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';

const dentistHeroImage = "/src/assets/images/dentist_hero_banner_1784556584458.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [isChomping, setIsChomping] = useState(false);
  
  // Interactive lab variables
  const [windSpeed, setWindSpeed] = useState(1);
  const [poppedTeethCount, setPoppedTeethCount] = useState(0);
  const [particlesKey, setParticlesKey] = useState(0);
  const [lastAction, setLastAction] = useState<string>("Le vent souffle doucement...");

  // Spectacular "Jaw Bite" Page Transition
  const handleTabChange = (tabId: string) => {
    if (isChomping) return;
    
    setIsChomping(true);
    setLastAction("Bouchée dentaire ! Alignement de l'univers...");

    // After 450ms (when jaw is fully closed), switch the page/tab instantly
    setTimeout(() => {
      setActiveTab(tabId);
    }, 450);

    // After 950ms, reopen jaws
    setTimeout(() => {
      setIsChomping(false);
      setLastAction(`Secteur ${tabId.toUpperCase()} chargé !`);
    }, 950);
  };

  const handlePopTooth = () => {
    setPoppedTeethCount((prev) => prev + 1);
    setLastAction("Chicot éclaté ! +1 point de sagesse");
  };

  const handleLaunchStorm = () => {
    setParticlesKey((prev) => prev + 1);
    setLastAction("Tempête de dents volantes invoquée ! 🌪️");
  };

  return (
    <div className="relative min-h-screen text-warmneutral-900 bg-gradient-to-b from-warmneutral-50 via-clinic-50/20 to-warmneutral-100 overflow-x-hidden selection:bg-clinic-200 selection:text-clinic-900">
      
      {/* 1. Dynamic 3D Floating Teeth Interactive Background */}
      <FloatingTeethBackground 
        windSpeed={windSpeed} 
        onPopTooth={handlePopTooth} 
        particlesKey={particlesKey} 
      />

      {/* 2. Page-Wide Top Scroll / Loading Progress */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-clinic-400 via-sky-400 to-clinic-600 z-50 shadow-sm" />

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
              className="w-full h-1/2 bg-white border-b-8 border-clinic-500 shadow-2xl relative flex items-end justify-center pb-2 pointer-events-auto"
            >
              {/* White Triangle Teeth Accents at the Bottom margin to look like a jaw */}
              <div className="absolute bottom-0 left-0 right-0 h-8 flex overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-clinic-100 border-t border-clinic-300"
                    style={{
                      clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                    }}
                  />
                ))}
              </div>
              <div className="text-center pb-8">
                <span className="font-display font-extrabold text-clinic-600 text-sm tracking-widest uppercase block animate-pulse">
                  TRANSITION DENTAIRE ACTIVES
                </span>
                <span className="text-[10px] font-mono text-warmneutral-800 font-bold block mt-1">
                  ALIGNEMENT DU SOURIRE...
                </span>
              </div>
            </motion.div>

            {/* Bottom Teeth Jaw Row */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="w-full h-1/2 bg-white border-t-8 border-clinic-500 shadow-2xl relative flex items-start justify-center pt-2 pointer-events-auto"
            >
              {/* White Triangle Teeth Accents pointing up */}
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
                <ToothSVG className="w-10 h-10 text-clinic-500 animate-bounce" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Elegant Sticky Header info bar */}
      <header className="relative z-40 bg-white/95 border-b border-clinic-100/60 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo Brand with flying tooth tag */}
          <div className="flex items-center gap-2.5">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-clinic-500 to-clinic-600 flex items-center justify-center text-white shadow-md"
            >
              <Smile className="w-6 h-6 animate-pulse" />
            </motion.div>
            <div className="text-left">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-warmneutral-900 block">
                Cabinet Dr. Émilie Laurent
              </span>
              <span className="text-[10px] font-mono text-clinic-600 font-bold uppercase tracking-widest block -mt-1.5">
                ● L'Odyssée des Dents Volantes
              </span>
            </div>
          </div>

          {/* Quick Clinic Stats */}
          <div className="flex items-center gap-6 text-xs font-mono font-bold text-warmneutral-800">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-500" />
              <span>Note Google : 4.9/5</span>
            </span>
            <span className="hidden sm:inline-block text-warmneutral-300">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-clinic-500" />
              <span>Normes CE</span>
            </span>
          </div>

          {/* Contact and Phone */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
              className="px-3.5 py-1.5 rounded-full bg-warmneutral-100 border border-clinic-100 text-xs font-mono font-bold text-clinic-700 hover:bg-clinic-50 transition-all block"
            >
              ☎ {CLINIC_INFO.phone}
            </a>
          </div>

        </div>
      </header>

      {/* 5. Main Canvas Space */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 relative z-10 min-h-[calc(100vh-140px)] flex flex-col items-center justify-start">
        
        {/* Section Title Intro */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <span className="text-[10px] font-mono font-bold text-clinic-600 bg-clinic-100/60 px-3 py-1 rounded-full border border-clinic-200 inline-block">
            Sourire Volant • Cabinet Dentaire 11e
          </span>
          <h1 className="font-display font-extrabold text-2xl text-warmneutral-900 tracking-tight mt-2">
            Notre Cabinet Dentaire Interactif
          </h1>
          <p className="text-xs text-warmneutral-800 mt-1">
            Explorez nos soins et déplacez nos amies les dents avec votre curseur !
          </p>
        </div>

        {/* 6. The Dental Navigation Arch */}
        <DentalNavigationArch activeTab={activeTab} onChangeTab={handleTabChange} />



        {/* 8. Active Interactive Talking Dental Section (One Page at a time) */}
        <div className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full"
            >
              {activeTab === 'accueil' && (
                <TalkingToothCharacter
                  id="accueil"
                  name="Dr. Sagesse"
                  role="Guide Clinique"
                  expression="wise"
                  color="from-clinic-500 to-teal-500"
                  accessory="glasses"
                  text="Bienvenue ! Je suis le Dr. Sagesse. Nos soins sont 100% sans douleur et ultra-modernes."
                  interactiveContent={
                    <div className="space-y-4 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-white p-3 rounded-2xl border border-clinic-100 flex items-start gap-2.5">
                          <div className="p-1.5 bg-clinic-50 rounded-lg text-clinic-600 flex-shrink-0">
                            <Sparkles className="w-4 h-4 animate-pulse" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-warmneutral-900">Zéro Douleur</h4>
                            <p className="text-[10px] text-warmneutral-600">Anesthésies modernes.</p>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-2xl border border-clinic-100 flex items-start gap-2.5">
                          <div className="p-1.5 bg-clinic-50 rounded-lg text-clinic-600 flex-shrink-0">
                            <Smile className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-warmneutral-900">Aligneurs 3D</h4>
                            <p className="text-[10px] text-warmneutral-600">Gouttières invisibles.</p>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-2xl border border-clinic-100 flex items-start gap-2.5">
                          <div className="p-1.5 bg-clinic-50 rounded-lg text-clinic-600 flex-shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-warmneutral-900">Secteur 1</h4>
                            <p className="text-[10px] text-warmneutral-600">Tiers Payant accepté.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <button
                          onClick={() => handleTabChange('scanner')}
                          className="bg-clinic-500 hover:bg-clinic-600 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                        >
                          <span>Scanner Virtuel</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleTabChange('contact')}
                          className="bg-white hover:bg-clinic-50 text-clinic-600 border border-clinic-200 font-semibold py-2.5 px-4 rounded-xl text-xs cursor-pointer transition-colors text-center"
                        >
                          Prendre Rendez-vous
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
                  role="Démonstrateur 3D"
                  expression="excited"
                  color="from-teal-400 to-clinic-500"
                  accessory="stars"
                  text="Cliquez sur les dents ci-dessous pour lancer un scan 3D de l'anatomie !"
                  interactiveContent={<InteractiveTeeth />}
                />
              )}

              {activeTab === 'soins' && (
                <TalkingToothCharacter
                  id="soins"
                  name="Canine"
                  role="Soins & Urgences"
                  expression="kind"
                  color="from-emerald-400 to-clinic-500"
                  accessory="shield"
                  text="Besoin de soins doux ? Découvrez nos traitements modernes ci-dessous."
                  interactiveContent={<Services />}
                />
              )}

              {activeTab === 'avis' && (
                <TalkingToothCharacter
                  id="avis"
                  name="Prémolaire"
                  role="Avis Patients"
                  expression="proud"
                  color="from-amber-400 to-clinic-500"
                  accessory="crown"
                  text="Nos patients adorent leur nouveau sourire ! Lisez leurs avis récents."
                  interactiveContent={<Testimonials />}
                />
              )}

              {activeTab === 'contact' && (
                <TalkingToothCharacter
                  id="contact"
                  name="Molaire"
                  role="Rendez-vous"
                  expression="welcoming"
                  color="from-indigo-400 to-clinic-600"
                  accessory="pin"
                  text="Remplissez ce court formulaire pour réserver votre consultation."
                  interactiveContent={<Contact />}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      {/* 9. Floating Wisdom Assistant Companion */}
      <DentalWisdomAssistant />

      {/* 10. Multi-column Professional Footer in French */}
      <footer className="bg-warmneutral-900 text-warmneutral-200 pt-16 pb-12 border-t border-warmneutral-800 relative overflow-hidden z-20">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-clinic-500/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-warmneutral-800/80">
          
          {/* Brand Block */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-clinic-500 flex items-center justify-center text-white shadow-md">
                <Smile className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                Dr. Émilie Laurent
              </span>
            </div>
            
            <p className="text-xs text-warmneutral-200/70 leading-relaxed mb-6 max-w-sm">
              Chirurgien-Dentiste diplômée de la Faculté d'Odontologie de Paris. Inscrite au Tableau de l'Ordre National des Chirurgiens-Dentistes (N° 75/12345). Notre cabinet s'engage au quotidien pour la santé et la beauté naturelle de votre sourire.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-clinic-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Normes CE</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-warmneutral-700" />
              <div className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Ordre National</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Dents de Navigation</h4>
            <ul className="space-y-3.5 text-xs text-warmneutral-200/80 font-medium">
              <li><button onClick={() => handleTabChange('accueil')} className="hover:text-clinic-400 transition-colors cursor-pointer text-left">Sagesse d'Accueil</button></li>
              <li><button onClick={() => handleTabChange('scanner')} className="hover:text-clinic-400 transition-colors cursor-pointer text-left">Incisive Interactive</button></li>
              <li><button onClick={() => handleTabChange('soins')} className="hover:text-clinic-400 transition-colors cursor-pointer text-left">Canine des Soins</button></li>
              <li><button onClick={() => handleTabChange('avis')} className="hover:text-clinic-400 transition-colors cursor-pointer text-left">Prémolaire d'Or</button></li>
              <li><button onClick={() => handleTabChange('contact')} className="hover:text-clinic-400 transition-colors cursor-pointer text-left">Molaire d'Accès</button></li>
            </ul>
          </div>

          {/* Specialized procedures bullet lists */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Soins Spécialisés</h4>
            <ul className="space-y-3.5 text-xs text-warmneutral-200/80 font-medium">
              <li className="flex items-center gap-1.5">
                <ToothSVG className="w-3.5 h-3.5 text-clinic-500 flex-shrink-0" />
                <span>Blanchiment LED Esthétique</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ToothSVG className="w-3.5 h-3.5 text-clinic-500 flex-shrink-0" />
                <span>Facettes Céramiques IPS e.max</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ToothSVG className="w-3.5 h-3.5 text-clinic-500 flex-shrink-0" />
                <span>Implants & Couronnes 3D</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ToothSVG className="w-3.5 h-3.5 text-clinic-500 flex-shrink-0" />
                <span>Orthodontie Invisible Adulte</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Nous Joindre</h4>
            <ul className="space-y-3 text-xs text-warmneutral-200/80 font-medium w-full">
              <li className="flex items-start gap-2 text-left">
                <Calendar className="w-4 h-4 text-clinic-400 mt-0.5 flex-shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-clinic-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`} className="font-bold text-white hover:text-clinic-400 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="text-[10px] text-warmneutral-200/60 mt-4 leading-relaxed bg-warmneutral-800/50 p-3.5 rounded-xl border border-warmneutral-800 w-full text-left">
                <strong>Information Honoraires :</strong> Le Dr. Laurent est conventionné secteur 1. Devis préalable fourni systématiquement avant tout traitement prothétique ou esthétique.
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Mentions block */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-warmneutral-200/50">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Cabinet Dentaire Dr. Émilie Laurent. Tous droits réservés.</p>
            <p className="mt-1">Site informatif conforme aux recommandations déontologiques de l'Ordre National des Chirurgiens-Dentistes.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => handleTabChange('accueil')} className="hover:underline hover:text-white transition-colors cursor-pointer">Mentions Légales</button>
            <span>•</span>
            <button onClick={() => handleTabChange('accueil')} className="hover:underline hover:text-white transition-colors cursor-pointer">Charte RGPD</button>
            <span>•</span>
            <button onClick={() => handleTabChange('accueil')} className="hover:underline hover:text-white transition-colors cursor-pointer">Gestion des Cookies</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
