'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, HelpCircle, Clock } from 'lucide-react';
import * as Lucide from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceDetail } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServicePageClientProps {
  service: ServiceDetail;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const { t } = useLanguage();

  const renderIcon = (iconName: string) => {
    const IconComp = (Lucide as any)[iconName];
    if (IconComp) {
      return <IconComp className="w-8 h-8 text-brand-blue" />;
    }
    return <HelpCircle className="w-8 h-8 text-brand-blue" />;
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map((faq) => ({
      '@type': 'Question',
      'name': t(faq.question, faq.question),
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': t(faq.answer, faq.answer),
      },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-grow bg-slate-50/50 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back Navigation */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
            {t('Back to Service Explorer', 'Back to Service Explorer')}
          </Link>

          {/* Hero Header Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl shrink-0">
                {renderIcon(service.icon)}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                  {t(service.category.toUpperCase(), service.category.toUpperCase())} {t('CAMPAIGN TECHNOLOGY', 'CAMPAIGN TECHNOLOGY')}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-0.5">
                  {t(service.name, service.name)}
                </h1>
              </div>
            </div>
            <a
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-brand-blue text-white hover:bg-blue-700 font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              {t('Request Campaign Audit', 'Request Campaign Audit')}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content (2 Columns) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Service Overview', 'Service Overview')}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t(service.overview, service.overview)}
                </p>
              </div>

              {/* Workflow Steps */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Operational Workflow Blueprint', 'Operational Workflow Blueprint')}
                </h2>
                <div className="space-y-4">
                  {service.workflow.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm text-slate-700 font-bold leading-normal mt-0.5">{t(step, step)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Deliverables */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Campaign Deliverables', 'Campaign Deliverables')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <Clock className="w-5 h-5 text-brand-gold mb-2" />
                      <p className="text-xs text-slate-800 font-bold leading-relaxed">{t(del, del)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Service FAQs', 'Service FAQs')}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 border border-slate-150 rounded-xl bg-slate-50/50">
                      <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        {t(faq.question, faq.question)}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-3.5 leading-relaxed">
                        {t(faq.answer, faq.answer)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (1 Column) */}
            <div className="space-y-8">
              {/* Features List */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Key Features', 'Key Features')}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <PlayCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{t(feature, feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Active Use Cases', 'Active Use Cases')}
                </h3>
                <div className="space-y-4">
                  {service.useCases.map((uc, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
                      {t(uc, uc)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional SEO Tags */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-brand-dark border-b border-slate-100 pb-3 mb-4">
                  {t('Regional Strategy Targets', 'Regional Strategy Targets')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((kw) => (
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
