'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Landmark, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    designation: 'MLA Candidate',
    constituency: '',
    phone: '',
    email: '',
    serviceInterest: 'Political Consulting',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      designation: 'MLA Candidate',
      constituency: '',
      phone: '',
      email: '',
      serviceInterest: 'Political Consulting',
      message: '',
    });
    setFormStatus('idle');
  };

  if (formStatus === 'success') {
    return (
      <div className="glass-card rounded-3xl p-8 lg:p-12 bg-white/95 border border-slate-200 shadow-2xl text-center flex flex-col items-center justify-center min-h-[450px] animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
          {t('Strategy Session Scheduled', 'Strategy Session Scheduled')}
        </h3>
        <p className="text-sm text-slate-500 max-w-md mt-3 leading-relaxed">
          {t('Thank you,', 'Thank you,')} <strong className="text-slate-800">{formData.name}</strong>. {t('Our lead political strategists (IIM Graduates) are analyzing the voting matrices for', 'Our lead political strategists (IIM Graduates) are analyzing the voting matrices for')} <strong className="text-slate-800">{formData.constituency || t('your constituency', 'your constituency')}</strong>. {t('We will connect with you via', 'We will connect with you via')} +91-{formData.phone} {t('within the next 4 hours.', 'within the next 4 hours.')}
        </p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs sm:text-sm font-bold text-slate-600 transition-colors"
          >
            Submit Another Query
          </button>
          <a
            href="tel:+916375983593"
            className="px-6 py-2.5 rounded-xl bg-brand-blue text-white hover:bg-blue-700 text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            Call Command Center
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/95 border border-slate-200/80 shadow-2xl">
      <div className="mb-6">
        <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue block">
          {t('SECURE SECURE ENCRYPTED CHANNEL', 'SECURE SECURE ENCRYPTED CHANNEL')}
        </span>
        <h3 className="text-2xl font-bold text-brand-dark mt-1">{t('Book 1-on-1 Election Strategy Audit', 'Book 1-on-1 Election Strategy Audit')}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {t('Provide your candidate details. All data transmitted through this portal is kept confidential under strict NDA.', 'Provide your candidate details. All data transmitted through this portal is kept confidential under strict NDA.')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Candidate Name', 'Full Name')}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('Ramlal Kumawat', 'Ramlal Kumawat')}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="designation" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Designation', 'Designation')}
            </label>
            <select
              id="designation"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none bg-white"
            >
              <option value="MLA Candidate">{t('MLA Candidate (Vidhan Sabha)', 'MLA Candidate (Vidhan Sabha)')}</option>
              <option value="MP Candidate">{t('MP Candidate (Lok Sabha)', 'MP Candidate (Lok Sabha)')}</option>
              <option value="Independent Candidate">{t('Independent MLA/MP', 'Independent MLA/MP')}</option>
              <option value="Campaign Manager">{t('Campaign Director', 'Campaign Director')}</option>
              <option value="Political Party Representative">{t('Party General Secretary', 'Party General Secretary')}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Constituency / District */}
          <div>
            <label htmlFor="constituency" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Constituency / Seat Name', 'Constituency & District')}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Landmark className="w-4 h-4" />
              </span>
              <input
                type="text"
                id="constituency"
                required
                value={formData.constituency}
                onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                placeholder={t('Jaipur Rural / Sikar', 'Jaipur Rural / Sikar')}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="phone" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Contact Number', 'Contact Number')}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="tel"
                id="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="6375983593"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Email Address', 'Email Address')}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="candidate@party.org"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              />
            </div>
          </div>

          {/* Selected Service */}
          <div>
            <label htmlFor="serviceInterest" className="text-xs font-bold text-slate-700 block mb-1">
              {t('Desired Service Module', 'Election Service Focus')}
            </label>
            <select
              id="serviceInterest"
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none bg-white"
            >
              <option value="Political Consulting">{t('Political Consulting & Advisory', 'Political Consulting & Advisory')}</option>
              <option value="Election Strategy">{t('Election Strategy & Blueprints', 'Election Strategy & Blueprints')}</option>
              <option value="War Room Setup">{t('War Room Setup', 'War Room Setup')}</option>
              <option value="Booth Management">{t('Booth Management & Panna Pramukhs', 'Booth Management & Panna Pramukhs')}</option>
              <option value="Voter CRM Software">{t('Voter CRM & Software', 'Voter CRM & Software')}</option>
              <option value="AI Calling">{t('AI calling & OBD calls', 'AI calling & OBD calls')}</option>
              <option value="Digital Marketing">{t('Social Media & Meta/Google Ads', 'Social Media & Meta/Google Ads')}</option>
              <option value="End-to-End Execution">{t('End-to-End Election Execution', 'End-to-End Election Execution')}</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="text-xs font-bold text-slate-700 block mb-1">
            {t('Constituency Grievances Summary', 'Briefly describe your constituency challenges')}
          </label>
          <div className="relative">
            <span className="absolute top-3 left-0 pl-3 text-slate-400">
              <FileText className="w-4 h-4" />
            </span>
            <textarea
              id="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t('e.g. Caste equations, low voter turnout in Ward 3, managing competitor narrative shifts...', 'e.g. Caste equations, low voter turnout in Ward 3, managing competitor narrative shifts...')}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full py-3.5 px-4 rounded-xl bg-brand-blue hover:bg-blue-700 disabled:bg-slate-300 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-2"
        >
          {formStatus === 'submitting' ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t('Securing connection...', 'Securing connection...')}
            </>
          ) : (
            <>
              {t('Initiate Secure Strategy Audit', 'Submit Encrypted Audit Request')} <Send className="w-4.5 h-4.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
