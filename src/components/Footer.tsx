'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { DISTRICTS } from '@/data/districts';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  // Take 6 major services for standard links, we link the rest inline/by directory
  const topServices = SERVICES.slice(0, 8);

  // Group districts into grid lists
  const districtList = DISTRICTS.map((d) => ({
    name: d.name,
    href: `/districts/${d.slug}`,
  }));

  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-extrabold shadow-md">
                CX
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Campaign<span className="text-brand-blue">X</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t("Rajasthan's most trusted political election strategy & campaign technology portal. Integrating artificial intelligence, spatial analytics, and ground volunteer matrices to execute winning election campaigns.", "Rajasthan's most trusted political election strategy & campaign technology portal. Integrating artificial intelligence, spatial analytics, and ground volunteer matrices to execute winning election campaigns.")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-blue hover:text-white text-slate-300 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-blue hover:text-white text-slate-300 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-blue hover:text-white text-slate-300 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase mb-6">
              {t('Central Command', 'Central Command')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  {t('IT Park Road, Mansarovar, Jaipur, Rajasthan – 302020', 'IT Park Road, Mansarovar,\nJaipur, Rajasthan – 302020')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="tel:+916375983593" className="hover:text-white transition-colors">
                  +91-6375983593
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:hello.campaignx@gmail.com" className="hover:text-white transition-colors">
                  hello.campaignx@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase mb-6">
              {t('Election Services', 'Election Services')}
            </h3>
            <ul className="space-y-3">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white text-sm flex items-center gap-1 group"
                  >
                    <span>{t(service.name, service.name)}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Verification Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase mb-6">
              {t('EEAT Certification', 'EEAT Certification')}
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {t('CampaignX complies with Election Commission guidelines. All ground databases are secured with localized data regulations. Certified under ISO/IEC 27001 for digital assets safety.', 'CampaignX complies with Election Commission guidelines. All ground databases are secured with localized data regulations. Certified under ISO/IEC 27001 for digital assets safety.')}
            </p>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <span className="text-xs text-brand-gold font-bold block mb-1">{t('STRATEGY BOARD', 'STRATEGY BOARD')}</span>
              <p className="text-xs text-slate-300">
                {t('Co-led by software engineers & business graduates from IIM Ahmedabad & IIM Bangalore.', 'Co-led by software engineers & business graduates from IIM Ahmedabad & IIM Bangalore.')}
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO District Links Footer Panel */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
            {t('Rajasthan District Campaign Strategy Hubs', 'Rajasthan District Campaign Strategy Hubs')}
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-400">
            {districtList.map((d, index) => (
              <span key={d.href}>
                <Link href={d.href} className="hover:text-brand-gold transition-colors font-medium">
                  {t(d.name, d.name)} {t('Election Management', 'Election Management')}
                </Link>
                {index < districtList.length - 1 && <span className="text-slate-600 ml-3">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright and Legals */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CampaignX. {t('All rights reserved. Made in Rajasthan.', 'All rights reserved. Made in Rajasthan.')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('Privacy Policy', 'Privacy Policy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('Terms of Service', 'Terms of Service')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('ECI Disclaimers', 'ECI Disclaimers')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
