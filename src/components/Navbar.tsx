import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CalendarCheck, Menu, X, Smile } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Sourire Interactif', href: '#interactif' },
    { label: 'Nos Soins', href: '#soins' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Infos & FAQ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top emergency announcement bar */}
      <div className="bg-clinic-600 text-white text-xs py-2 px-4 text-center font-medium relative overflow-hidden hidden sm:block">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="whitespace-nowrap inline-block"
        >
          🚨 Urgences douloureuses : Cabinet ouvert aujourd'hui de 09:00 à 19:30. Appelez le {CLINIC_INFO.formattedPhone} pour un rendez-vous rapide.
        </motion.div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-warmneutral-50/90 backdrop-blur-md shadow-md border-b border-clinic-100/50 py-3'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a href="#accueil" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-clinic-500 flex items-center justify-center text-white shadow-md shadow-clinic-500/20"
          >
            <Smile className="w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base md:text-lg tracking-tight text-warmneutral-900 group-hover:text-clinic-600 transition-colors">
              Cabinet Dr. Laurent
            </span>
            <span className="text-[10px] font-mono text-clinic-600 uppercase tracking-widest font-bold -mt-1">
              Dentisterie Douce
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-clinic-600'
                      : 'text-warmneutral-800 hover:text-clinic-500'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-clinic-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Call Center Button */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white hover:bg-clinic-50 text-clinic-600 border border-clinic-200 py-2 px-4 rounded-full text-xs font-semibold tracking-wide shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{CLINIC_INFO.phone}</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-clinic-500 hover:bg-clinic-600 text-white font-medium py-2 px-5 rounded-full text-xs tracking-wide shadow-md shadow-clinic-500/20 transition-all flex items-center gap-1.5"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Nous Contacter</span>
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
            className="p-2 text-clinic-600 hover:bg-clinic-50 rounded-full sm:hidden"
            title="Appeler le cabinet"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-warmneutral-900 hover:text-clinic-600 hover:bg-clinic-50 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-warmneutral-200 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1.5 text-base font-semibold tracking-wide transition-all ${
                        activeSection === link.href.slice(1)
                          ? 'text-clinic-600 pl-2 border-l-2 border-clinic-500'
                          : 'text-warmneutral-800 hover:text-clinic-500 hover:pl-2'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="h-[1px] bg-warmneutral-200 w-full my-1" />

              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-warmneutral-100 hover:bg-clinic-50 text-clinic-600 py-3 px-4 rounded-xl text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-clinic-500 hover:bg-clinic-600 text-white font-semibold py-3 px-4 rounded-xl text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Horaires & Plan d'Accès</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
