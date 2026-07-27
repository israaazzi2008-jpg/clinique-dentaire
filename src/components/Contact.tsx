import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data';
import { Mail, MapPin, Facebook, ExternalLink, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Contact() {
  return (
    <div className="relative py-6 overflow-hidden rounded-3xl bg-white min-h-[520px]">
      <div className="max-w-3xl mx-auto w-full relative z-10 px-4">
        
        <div className="text-center mb-8">
          <div className="text-xs font-mono font-bold text-ruby-600 bg-ruby-50 px-3 py-1 rounded-full border border-ruby-300 inline-block tracking-widest uppercase mb-2 shadow-sm">
            Coordonnées Officielles
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            Contactez le Cabinet Abir Smile
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
            Le cabinet dentaire du <strong className="text-clinic-600 font-bold">Dr. Ghouti Mohamed Cherif</strong> est à votre disposition. Retrouvez ci-dessous nos coordonnées directes.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          
          {/* Localisation (Embedded Google Map Card) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-500/80 shadow-[0_10px_30px_rgba(56,189,248,0.3),0_10px_30px_rgba(225,29,72,0.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4),0_15px_40px_rgba(225,29,72,0.35)] transition-shadow duration-300 text-left relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-clinic-500 to-ruby-500 text-white flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Localisation</h4>
                <p className="text-sm font-extrabold text-clinic-600">Abir Smile Clinic Dentaire</p>
              </div>
            </div>
            
            {/* Live Interactive Map Iframe */}
            <div className="w-full h-64 rounded-xl overflow-hidden border-2 border-ruby-500/60 relative shadow-inner">
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
            
            <div className="mt-3 text-right">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-clinic-600 hover:underline"
              >
                <span>Ouvrir dans Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone Contact Card */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex gap-4 p-5 rounded-2xl bg-white border-2 border-ruby-500/80 hover:border-sky-500 transition-all group shadow-[0_10px_30px_rgba(56,189,248,0.3),0_10px_30px_rgba(225,29,72,0.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4),0_15px_40px_rgba(225,29,72,0.35)] text-left relative z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-clinic-500 from-40% to-ruby-500 to-60% text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Téléphone</h4>
              <p className="text-base font-extrabold text-slate-800 mt-0.5 group-hover:underline">{CLINIC_INFO.formattedPhone}</p>
            </div>
          </a>

          {/* Email Contact Card */}
          <a
            href={`mailto:${CLINIC_INFO.email}`}
            className="flex gap-4 p-5 rounded-2xl bg-white border-2 border-sky-500/80 hover:border-ruby-500 transition-all group shadow-[0_10px_30px_rgba(56,189,248,0.3),0_10px_30px_rgba(225,29,72,0.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4),0_15px_40px_rgba(225,29,72,0.35)] text-left relative z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-clinic-500 from-40% to-ruby-500 to-60% text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">E-mail</h4>
              <p className="text-base font-extrabold text-slate-800 mt-0.5 group-hover:underline">{CLINIC_INFO.email}</p>
            </div>
          </a>

          {/* Facebook Page link */}
          <a
            href={CLINIC_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 p-5 rounded-2xl bg-white border-2 border-ruby-500/80 hover:border-sky-500 transition-all group shadow-[0_10px_30px_rgba(56,189,248,0.3),0_10px_30px_rgba(225,29,72,0.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4),0_15px_40px_rgba(225,29,72,0.35)] text-left relative z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-clinic-500 from-40% to-ruby-500 to-60% text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Facebook</h4>
              <p className="text-base font-extrabold text-slate-800 mt-0.5 group-hover:underline">Abir Smile Clinic Dentaire</p>
            </div>
          </a>

          {/* Doctor badge */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-clinic-600 from-40% to-ruby-600 to-60% text-white shadow-[0_8px_24px_rgba(37,99,235,0.2)] text-center border-2 border-white/60 relative z-10">
            <Logo size="sm" className="mb-2" showDoctors={false} />
            <h4 className="font-bold text-sm text-white">Chirurgien-Dentiste</h4>
            <p className="text-xs text-white/90 font-medium mt-1">
              Dr. Ghouti Mohamed Cherif
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
