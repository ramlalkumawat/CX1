'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CallButton() {
  const { t } = useLanguage();
  const phoneUrl = 'tel:+916375983593';

  return (
    <a
      href={phoneUrl}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center bg-brand-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 group active:scale-95"
      aria-label="Call CampaignX"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-brand-blue opacity-75 animate-ping -z-10"></span>
      
      {/* Phone Icon */}
      <Phone className="w-7 h-7" />

      {/* Tooltip/Label */}
      <span className="hidden md:block absolute right-16 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 rounded bg-slate-900/90 text-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap shadow-xl backdrop-blur-sm pointer-events-none">
        {t('Call Us', 'Call Us')}
      </span>
    </a>
  );
}
