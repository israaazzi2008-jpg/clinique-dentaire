import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import Logo from './Logo';

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
    { label: 'Scanner 3D', href: '#interactif' },
    { label: 'Nos Soins', href: '#soins' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-clinic-600 via-ruby-600 to-clinic-700 text-white text-xs py-2 px-4 text-center font-medium relative overflow-hidden hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold">
              📍 Localisation : Abir Smile Clinic Dentaire
            </span>
            <span className="hidden md:inline-block font-medium opacity-90">
              Dr. Ghouti Mohamed Cherif
            </span>
          </div>

          <div className="flex items-center gap-4 font-bold">
            <a href={`mailto:${CLINIC_INFO.email}`} className="hidden lg:flex items-center gap-1 hover:underline opacity-90">
              <Mail className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full py-3 px-4 md:px-10 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        {/* Brand Logo & Name */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <Logo size="sm" showDoctors={false} />
          <div className="hidden xl:flex flex-col text-left">
            <span className="font-display font-extrabold text-sm md:text-base tracking-tight text-clinic-600 group-hover:text-clinic-700 transition-colors">
              Abir Smile Clinic Dentaire
            </span>
            <span className="text-[10px] font-bold text-ruby-600 uppercase tracking-wider">
              Dr. Ghouti Mohamed Cherif
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1.5 px-3 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'text-clinic-600 bg-clinic-50'
                      : 'text-slate-700 hover:text-ruby-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-ruby-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-clinic-600 hover:bg-clinic-700 text-white font-bold py-2 px-4 rounded-xl text-xs tracking-wide shadow-md shadow-clinic-500/20 transition-all flex items-center gap-1.5"
          >
            <span>Contact</span>
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-800 hover:text-clinic-600 hover:bg-slate-100 rounded-full transition-colors"
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
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-md overflow-hidden lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-left">
              <div className="pb-3 border-b border-slate-100">
                <span className="font-bold text-sm text-clinic-600 block">Abir Smile Clinic Dentaire</span>
                <span className="text-xs text-ruby-600 font-semibold">Dr. Ghouti Mohamed Cherif</span>
              </div>

              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                        activeSection === link.href.slice(1)
                          ? 'text-clinic-600 bg-clinic-50 border-l-4 border-ruby-600'
                          : 'text-slate-800 hover:text-ruby-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="h-[1px] bg-slate-200 w-full my-1" />

              <div className="flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-clinic-600 hover:bg-clinic-700 text-white font-bold py-3 px-4 rounded-xl text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Prendre Contact</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
