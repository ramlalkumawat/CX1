'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, CheckCircle, HelpCircle, Compass, Database, Sliders } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DistrictDetail } from '@/data/districts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface DistrictPageClientProps {
  district: DistrictDetail;
}

export default function DistrictPageClient({ district }: DistrictPageClientProps) {
  const { t } = useLanguage();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `CampaignX - Election Management & Political Strategy in ${district.name}`,
    'image': 'https://www.campaignx.in/logo.png',
    'telephone': '+91-6375983593',
    'email': 'hello.campaignx@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': district.name,
      'addressRegion': 'Rajasthan',
      'addressCountry': 'IN',
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': district.name,
    },
    'url': `https://www.campaignx.in/districts/${district.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': t(`How does CampaignX target campaigns in ${district.name}?`, `How does CampaignX target campaigns in ${district.name}?`),
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': t(`We structure campaigns in ${district.name} around regional demographics. We map all ${district.totalBooths} polling booths onto our Voter CRM, deploy Wagdi/Mewari/Marwari AI dialers, and verify Panna Pramukhs locally.`, `We structure campaigns in ${district.name} around regional demographics. We map all ${district.totalBooths} polling booths onto our Voter CRM, deploy Wagdi/Mewari/Marwari AI dialers, and verify Panna Pramukhs locally.`),
        },
      },
      {
        '@type': 'Question',
        'name': t(`What are the core issues CampaignX addresses in ${district.name}?`, `What are the core issues CampaignX addresses in ${district.name}?`),
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': t(`We help candidates design campaigns targeting local concerns including: ${district.keyIssues.join(', ')}.`, `We help candidates design campaigns targeting local concerns including: ${district.keyIssues.join(', ')}.`),
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-grow bg-slate-50/50 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back Navigation */}
          <Link
            href="/#district-hub"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            {t('Back to District Strategy Hub', 'Back to District Strategy Hub')}
          </Link>

          {/* Hero Header Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl shrink-0">
                <MapPin className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue">
                  {t('RAJASTHAN DISTRICT ELECTION AUDIT', 'RAJASTHAN DISTRICT ELECTION AUDIT')}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-0.5">
                  {t(district.name, district.name)} {t('District', 'District')}
                </h1>
              </div>
            </div>
            <Link
              href="/#contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-brand-blue text-white hover:bg-blue-700 font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              {t('Get Local Strategy Blueprint', 'Get Local Strategy Blueprint')}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content (2 Columns) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Strategic Approach */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Localized Strategic Blueprint', 'Localized Strategic Blueprint')}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t(district.strategicApproach, district.strategicApproach)}
                </p>
                <div className="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t('Demographic Mappings', 'Demographic Mappings')}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t(district.demographicFocus, district.demographicFocus)}
                  </p>
                </div>
              </div>

              {/* District Grievances & Key Issues */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Key Local Assembly Grievances Targeted', 'Key Local Assembly Grievances Targeted')}
                </h2>
                <div className="space-y-4 text-xs sm:text-sm">
                  <p className="text-slate-500">
                    {t('CampaignX structures policy proposals, speech parameters, and local manifesto items around the following district issues:', 'CampaignX structures policy proposals, speech parameters, and local manifesto items around the following district issues:')}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {district.keyIssues.map((issue, idx) => (
                      <li key={idx} className="w-full h-full p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-semibold">{t(issue, issue)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Local SEO FAQs */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('District Campaign FAQs', 'District Campaign FAQs')}
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50/50">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                      {t(`How does CampaignX optimize booth-level turnout in ${district.name}?`, `How does CampaignX optimize booth-level turnout in ${district.name}?`)}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-6 leading-relaxed">
                      {t('We map all', 'We map all')} {district.totalBooths.toLocaleString()} {t('booths and recruit localized volunteers (Panna Pramukhs) who live in those identical wards, ensuring trust and high polling turnout on election day.', 'booths and recruit localized volunteers (Panna Pramukhs) who live in those identical wards, ensuring trust and high polling turnout on election day.')}
                    </p>
                  </div>
                  <div className="p-4 border border-slate-150 rounded-xl bg-slate-50/50">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                      {t('What regional language services do you provide in this zone?', 'What regional language services do you provide in this zone?')}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-6 leading-relaxed">
                      {t('We offer full dialer systems and media production in local dialects matching the region (such as Mewari, Wagdi, Haroti, or Marwari) to guarantee candidates have direct connections with rural households.', 'We offer full dialer systems and media production in local dialects matching the region (such as Mewari, Wagdi, Haroti, or Marwari) to guarantee candidates have direct connections with rural households.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (1 Column) */}
            <div className="space-y-8">
              {/* Campaign Footprint Stats */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('District Audit Specs', 'District Audit Specs')}
                </h3>
                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('Assembly Seats', 'Assembly Seats')}</span>
                    <span className="text-lg font-extrabold text-slate-800">{district.assemblySeats} {t('Assembly Wards', 'Assembly Wards')}</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('Estimated Polling Booths', 'Estimated Polling Booths')}</span>
                    <span className="text-lg font-extrabold text-slate-800">{district.totalBooths.toLocaleString()} {t('Locations', 'Locations')}</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('Active Software Nodes', 'Active Software Nodes')}</span>
                    <span className="text-lg font-extrabold text-emerald-600">{t('ONLINE', 'ONLINE')}</span>
                  </div>
                </div>
              </div>

              {/* Suggested Technology Tools */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Target Tech Stack', 'Target Tech Stack')}
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 text-xs text-slate-600">
                    <Compass className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>{t('GIS Demographic Mapping', 'GIS Demographic Mapping')}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-slate-600">
                    <Database className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>{t('Secure Local Voter CRM', 'Secure Local Voter CRM')}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-slate-600">
                    <Sliders className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>{t('Panna Pramukh App Tracker', 'Panna Pramukh App Tracker')}</span>
                  </div>
                </div>
              </div>

              {/* Local SEO Targets */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Local Search Targets', 'Local Search Targets')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {district.localKeywords.map((kw) => (
                    <span key={kw} className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md font-semibold font-mono">
                      {t(kw, kw)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
