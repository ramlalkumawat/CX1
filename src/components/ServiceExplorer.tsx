'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, ServiceDetail } from '@/data/services';
import * as Lucide from 'lucide-react';
import { CheckCircle2, ArrowUpRight, ArrowRight, PlayCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServiceExplorer() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'strategy' | 'data' | 'technology' | 'digital' | 'operations' | 'other'>('strategy');
  const [selectedSlug, setSelectedSlug] = useState('political-consulting');

  const categories = [
    { id: 'strategy', name: 'Strategy & Advisory' },
    { id: 'data', name: 'Research & Data' },
    { id: 'technology', name: 'Campaign Tech & CRM' },
    { id: 'digital', name: 'Digital & Media Ads' },
    { id: 'operations', name: 'Ground Operations' },
    { id: 'other', name: 'Other Services' },
  ];

  const filteredServices = SERVICES.filter((s) => s.category === activeCategory);

  // Auto-correct selected slug if it doesn't match the active category
  const activeServicesSlugs = filteredServices.map((s) => s.slug);
  const currentSelectedSlug = activeServicesSlugs.includes(selectedSlug)
    ? selectedSlug
    : activeServicesSlugs[0] || 'political-consulting';

  const selectedService =
    SERVICES.find((s) => s.slug === currentSelectedSlug) || SERVICES[0];

  // Dynamic Lucide icon helper
  const renderIcon = (iconName: string) => {
    const IconComp = (Lucide as any)[iconName];
    if (IconComp) {
      return <IconComp className="w-5 h-5 text-brand-blue" />;
    }
    return <HelpCircle className="w-5 h-5 text-brand-blue" />;
  };

  return (
    <div className="glass-card rounded-3xl p-6 lg:p-10 bg-white/95 border border-slate-200/80 shadow-2xl">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-6 mb-8 justify-center lg:justify-start">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id as any);
              // Set default selected service in that category
              const firstInCat = SERVICES.find((s) => s.category === cat.id);
              if (firstInCat) setSelectedSlug(firstInCat.slug);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all ${
              activeCategory === cat.id
                ? 'bg-brand-blue text-white shadow-md shadow-blue-500/10'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {t(cat.name, cat.name)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Service Sub-List Selector (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-2 max-h-[450px] overflow-y-auto pr-2 border-r border-slate-100">
          {filteredServices.map((service) => (
            <button
              key={service.slug}
              onClick={() => setSelectedSlug(service.slug)}
              className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all duration-200 ${
                currentSelectedSlug === service.slug
                  ? 'border-brand-blue/30 bg-blue-50/40 text-brand-blue shadow-sm'
                  : 'border-slate-100 hover:border-slate-200 bg-white text-slate-800'
              }`}
            >
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                {renderIcon(service.icon)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xs sm:text-sm truncate">{t(service.name, service.name)}</p>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">{t(service.shortDesc, service.shortDesc)}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Service Detailed View (Right) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                  {renderIcon(selectedService.icon)}
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
                    {t(selectedService.name, selectedService.name)}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                    {t('Category:', 'Category:')} {t(selectedService.category.toUpperCase(), selectedService.category.toUpperCase())} {t('OPERATIONS', 'OPERATIONS')}
                  </span>
                </div>
              </div>
              <Link
                href={`/services/${selectedService.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-blue-700 bg-white border border-slate-200 px-3.5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all shrink-0"
              >
                {t('Full Details', 'Full Details')} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Overview & Benefits */}
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t(selectedService.overview, selectedService.overview)}
              </p>
              <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2.5">
                {t('Target Business Benefits', 'Target Business Benefits')}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1.5" />
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">{t(benefit, benefit)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow & Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Campaign Workflow */}
              <div className="p-4 rounded-xl border border-slate-100/80 bg-slate-50/50">
                <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                  {t('Strategic Workflow', 'Strategic Workflow')}
                </h5>
                <ol className="space-y-3">
                  {selectedService.workflow.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{t(step, step)}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Service Features Checklist */}
              <div className="p-4 rounded-xl border border-slate-100/80 bg-slate-50/50">
                <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                  {t('Operational Features', 'Operational Features')}
                </h5>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <PlayCircle className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{t(feature, feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Selected Service FAQs Accordion */}
            <div className="border-t border-slate-100 pt-5">
              <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                {t('Service FAQs', 'Service FAQs')}
              </h5>
              <div className="space-y-3">
                {selectedService.faqs.map((faq, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                    <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      {t(faq.question, faq.question)}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 pl-5 leading-relaxed">
                      {t(faq.answer, faq.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Action Bar */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-slate-500 font-mono italic">
              {t('Targeted queries:', 'Targeted queries:')} {selectedService.keywords.map(kw => t(kw, kw)).join(', ')}
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-brand-blue text-white hover:bg-blue-700 font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              {t('Deploy This Service', 'Deploy This Service')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
