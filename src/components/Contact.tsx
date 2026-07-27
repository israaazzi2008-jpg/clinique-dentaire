import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data';
import { Mail, MapPin, Facebook, ExternalLink, Phone, Navigation, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Contact() {
  return (
    <div className="relative py-6 sm:py-10 overflow-hidden rounded-3xl bg-slate-50/70 min-h-[500px]">
      <div className="max-w-5xl mx-auto w-full relative z-10 px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-ruby-600 bg-ruby-50 px-3.5 py-1 rounded-full border border-ruby-200 uppercase tracking-wider mb-2.5 shadow-2xs">
            Coordonnées Directes
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight mb-2">
            Contactez le Cabinet Abir Smile
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-lg mx-auto">
            Le cabinet dentaire du <strong className="text-clinic-600 font-bold">Dr. Ghouti Mohamed Cherif</strong> est à votre disposition.
          </p>
        </div>

        {/* Responsive Grid Layout (Stack on Mobile, 2 Columns on PC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* Left Column: Direct Action Contact Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* Phone Card (Red & Blue Accent) */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-ruby-500/60 hover:border-clinic-500 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-ruby-600 to-clinic-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-ruby-500/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] font-bold text-ruby-600 uppercase tracking-wider">Téléphone Direct</h4>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight mt-0.5 truncate">{CLINIC_INFO.formattedPhone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-ruby-600 to-clinic-600 hover:from-ruby-700 hover:to-clinic-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto shrink-0"
                >
                  <span>Appeler</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Email Card (Red & Blue Accent) */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-clinic-500/60 hover:border-ruby-500 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-clinic-600 to-ruby-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-clinic-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] font-bold text-clinic-600 uppercase tracking-wider">E-mail Offert</h4>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight mt-0.5 break-all select-all">{CLINIC_INFO.email}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-clinic-600 to-ruby-600 hover:from-clinic-700 hover:to-ruby-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto shrink-0"
                >
                  <span>Écrire</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Facebook Card (Red & Blue Accent) */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-blue-500/60 hover:border-ruby-500 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 via-sky-600 to-ruby-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Page Facebook</h4>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight mt-0.5 truncate">Abir Smile Clinic Dentaire</p>
                  </div>
                </div>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-ruby-600 hover:from-blue-700 hover:to-ruby-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto shrink-0"
                >
                  <span>Visiter</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Google Maps & Doctor Card */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Embedded Google Map Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-sm text-left">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-clinic-600 to-ruby-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Localisation</h4>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">Abir Smile Clinic Dentaire</p>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200 relative shadow-inner">
                <iframe
                  src="https://maps.google.com/maps?q=Abir%20Smile%20Clinic%20Dentaire&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>

              <div className="mt-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-clinic-600 to-ruby-600 hover:from-clinic-700 hover:to-ruby-700 text-white font-bold text-xs transition-all active:scale-98 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>Ouvrir dans Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Compact Doctor Profile Banner (Red & Blue Theme, No White Cadre around Logo) */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-clinic-50/90 via-white to-ruby-50/90 text-center border-2 border-clinic-400/60 shadow-xs relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <Logo size="sm" showDoctors={false} className="mb-1" />
                
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-clinic-600 to-ruby-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs mb-1">
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>Chirurgien-Dentiste</span>
                </div>
                
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">Dr. Ghouti Mohamed Cherif</h4>
                <p className="text-[11px] text-slate-500 font-medium">Cabinet dentaire Abir Smile</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}




