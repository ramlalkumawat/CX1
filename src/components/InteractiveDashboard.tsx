'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Users, Home, TrendingUp, Phone, MapPin, Radio, Brain, Award, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function InteractiveDashboard() {
  const { t } = useLanguage();
  const [activeWard, setActiveWard] = useState(1);
  const [aiState, setAiState] = useState<'idle' | 'initializing' | 'cloning' | 'broadcasting' | 'done'>('idle');
  const [callsCount, setCallsCount] = useState(0);
  const [positiveSentiment, setPositiveSentiment] = useState(0);
  const [dialect, setDialect] = useState('marwari');

  const wardsData = [
    { id: 1, name: 'Ward 1 (Civil Lines)', booths: 18, pannaPramukhs: 72, contactRatio: '84%', support: 'Medium-High' },
    { id: 2, name: 'Ward 2 (Mansarovar)', booths: 22, pannaPramukhs: 88, contactRatio: '92%', support: 'High' },
    { id: 3, name: 'Ward 3 (Sanganer Rural)', booths: 25, pannaPramukhs: 100, contactRatio: '78%', support: 'Medium' },
    { id: 4, name: 'Ward 4 (Malviya Nagar)', booths: 15, pannaPramukhs: 60, contactRatio: '89%', support: 'High' },
    { id: 5, name: 'Ward 5 (Jotwara Inner)', booths: 20, pannaPramukhs: 80, contactRatio: '81%', support: 'Medium-High' },
  ];

  const dialectGreetings = {
    marwari: 'राम राम सा! मै थांको प्रत्याशी बोलू सा...',
    mewari: 'खम्मा घणी सा! मु थांको प्रत्याशी बात करू हूं...',
    haroti: 'राम राम जी! मै थारो प्रत्याशी बोल रह्यो छू...',
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (aiState === 'broadcasting') {
      interval = setInterval(() => {
        setCallsCount((prev) => {
          if (prev >= 450) {
            setAiState('done');
            clearInterval(interval);
            return 450;
          }
          return prev + Math.floor(Math.random() * 25) + 5;
        });
        setPositiveSentiment(() => Math.floor(Math.random() * 10) + 78);
      }, 300);
    }
    return () => clearInterval(interval);
  }, [aiState]);

  const handleStartCall = () => {
    setCallsCount(0);
    setPositiveSentiment(0);
    setAiState('initializing');
    setTimeout(() => {
      setAiState('cloning');
      setTimeout(() => {
        setAiState('broadcasting');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-2xl p-6 lg:p-8 bg-white/80 border border-slate-200/80 shadow-xl overflow-hidden relative">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-6 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-100">
            <Radio className="w-3 h-3 animate-pulse" /> {t('Central War Room Console', 'Central War Room Console')}
          </span>
          <h3 className="text-xl font-bold text-brand-dark mt-2">{t('CampaignX Analytics Command Dashboard', 'CampaignX Analytics Command Dashboard')}</h3>
        </div>
        <div className="flex gap-2">
          <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-mono">
            {t('NODE: RAJ-JPR-01', 'NODE: RAJ-JPR-01')}
          </span>
          <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg font-mono flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> {t('SECURE', 'SECURE')}
          </span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t('Registered Voters', 'Registered Voters')}</span>
            <Users className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="text-xl lg:text-2xl font-extrabold text-brand-dark">2,42,105</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
            +0.8% database clean
          </span>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t('Active Committees', 'Active Committees')}</span>
            <Home className="w-4 h-4 text-brand-gold" />
          </div>
          <p className="text-xl lg:text-2xl font-extrabold text-brand-dark">248 / 250</p>
          <span className="text-xs text-slate-600 font-medium block mt-1">
            99.2% Booth Coverage
          </span>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t('On-Ground Forces', 'On-Ground Forces')}</span>
            <Award className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="text-xl lg:text-2xl font-extrabold text-brand-dark">1,420</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
            +18 verified today
          </span>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">{t('Voter Support Velocity', 'Voter Support Velocity')}</span>
            <TrendingUp className="w-4 h-4 text-brand-gold" />
          </div>
          <p className="text-xl lg:text-2xl font-extrabold text-brand-dark">+4.12%</p>
          <span className="text-xs text-brand-blue font-semibold block mt-1">
            {t('Lead Projection Margin', 'Lead Projection Margin')}
          </span>
        </div>
      </div>

      {/* Main Command Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Ward Selector & Micro-Targeting (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider">
            {t('Micro-Targeting Ward Monitor', 'Micro-Targeting Ward Monitor')}
          </h4>
          <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2">
            {wardsData.map((ward) => (
              <button
                key={ward.id}
                onClick={() => setActiveWard(ward.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-200 ${
                  activeWard === ward.id
                    ? 'border-brand-blue/30 bg-blue-50/50 shadow-sm'
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm text-slate-800">{ward.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    ward.support === 'High' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-brand-blue'
                  }`}>
                    {ward.support}
                  </span>
                </div>
                <div className="flex text-xs text-slate-500 gap-4">
                  <span>Booths: <strong className="text-slate-700">{ward.booths}</strong></span>
                  <span>Pannas: <strong className="text-slate-700">{ward.pannaPramukhs}</strong></span>
                  <span>Contact: <strong className="text-slate-700">{ward.contactRatio}</strong></span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Voice Broadcast Call Simulator (Right) */}
        <div className="lg:col-span-7 p-5 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider flex items-center gap-1">
                <Brain className="w-4 h-4 text-brand-blue" /> {t('Outbound AI voice dialer simulator', 'Outbound AI voice dialer simulator')}
              </h4>
              {/* Dialect Selector */}
              <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200">
                {Object.keys(dialectGreetings).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setDialect(lang)}
                    disabled={aiState === 'initializing' || aiState === 'cloning' || aiState === 'broadcasting'}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-md capitalize transition-colors ${
                      dialect === lang
                        ? 'bg-brand-blue text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Simulator Status */}
            <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl mb-4 min-h-[120px] flex flex-col justify-center">
              {aiState === 'idle' && (
                <div className="text-center text-slate-400">
                  <Phone className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p>{t('Ready to deploy simulated voice broadcast.', 'Ready to deploy simulated voice broadcast.')}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{t('Select dialect and click Start below.', 'Select dialect and click Start below.')}</p>
                </div>
              )}
              {aiState === 'initializing' && (
                <div className="space-y-1">
                  <p className="text-brand-gold animate-pulse">&gt; Initializing high-speed dialer nodes...</p>
                  <p>&gt; Connection status: [ESTABLISHING]</p>
                </div>
              )}
              {aiState === 'cloning' && (
                <div className="space-y-1">
                  <p className="text-emerald-500">&gt; {t('Dialer nodes ready. SSL connection secure.', 'Dialer nodes ready. SSL connection secure.')}</p>
                  <p className="text-brand-gold animate-pulse">&gt; Loading voice model for dialect: {dialect.toUpperCase()}...</p>
                  <p className="text-[10px] text-slate-500 font-serif italic mt-1">
                    "{dialectGreetings[dialect as keyof typeof dialectGreetings]}"
                  </p>
                </div>
              )}
              {aiState === 'broadcasting' && (
                <div className="space-y-2">
                  <p className="text-emerald-500">&gt; AI Voice campaign running dynamically...</p>
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="text-[10px] uppercase text-slate-500">{t('Live Calls Placed', 'Live Calls Placed')}</span>
                      <p className="text-xl font-bold text-white tracking-widest">{callsCount}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-500">{t('Sentiment Validation', 'Sentiment Validation')}</span>
                      <p className="text-xl font-bold text-brand-gold">{positiveSentiment}% Positive</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-blue h-full transition-all duration-300"
                      style={{ width: `${(callsCount / 450) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              {aiState === 'done' && (
                <div className="space-y-1">
                  <p className="text-emerald-500">&gt; {t('Voice broadcast completed successfully.', 'Voice broadcast completed successfully.')}</p>
                  <p>&gt; {t('Total simulated calls logged:', 'Total simulated calls logged:')} <strong className="text-white">450</strong></p>
                  <p>&gt; {t('Avg support sentiment index:', 'Avg support sentiment index:')} <strong className="text-brand-gold">83.5%</strong></p>
                  <p className="text-[10px] text-slate-500 mt-1">{t('Analytics logs automatically synced to CRM.', 'Analytics logs automatically synced to CRM.')}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleStartCall}
              disabled={aiState === 'initializing' || aiState === 'cloning' || aiState === 'broadcasting'}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              {aiState === 'idle'
                ? t('Launch Broadcast Simulation', 'Launch Broadcast Simulation')
                : aiState === 'done'
                ? t('Run Simulation Again', 'Run Simulation Again')
                : t('Broadcasting...', 'Broadcasting...')}
            </button>
            {aiState !== 'idle' && (
              <button
                onClick={() => setAiState('idle')}
                className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 font-bold text-sm"
              >
                {t('Reset', 'Reset')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
