'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldAlert, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Services', href: '#services' },
    { name: 'War Room Demo', href: '#dashboard' },
    { name: 'District Hub', href: '#district-hub' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center text-white font-extrabold shadow-md group-hover:scale-105 transition-transform">
              CX
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-dark flex items-center gap-1">
              Campaign<span className="text-brand-blue">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all after:duration-300"
              >
                {t(link.name, link.name)}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex rounded-lg p-0.5 bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-white text-brand-blue shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'hi'
                    ? 'bg-white text-brand-blue shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                हिन्दी
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('Consult Strategy', 'Consult Strategy')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-blue focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl z-40 px-4 py-6">
          <div className="flex flex-col gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
              <span className="text-sm font-semibold text-slate-500">Language / भाषा</span>
              <div className="flex rounded-lg p-0.5 bg-slate-100 border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    language === 'en'
                      ? 'bg-white text-brand-blue shadow-xs font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    language === 'hi'
                      ? 'bg-white text-brand-blue shadow-xs font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-brand-blue py-2 border-b border-slate-50 transition-colors"
              >
                {t(link.name, link.name)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center w-full py-3 rounded-lg bg-brand-blue text-white font-bold shadow-md shadow-blue-500/10"
            >
              {t('Consult Strategy', 'Consult Strategy')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
