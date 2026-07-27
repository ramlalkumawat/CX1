'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DISTRICTS, DistrictDetail } from '@/data/districts';
import { MapPin, Users, HelpCircle, ArrowRight, Settings } from 'lucide-react';

export default function DistrictHub() {
  const [selectedSlug, setSelectedSlug] = useState('jaipur');

  const selectedDistrict =
    DISTRICTS.find((d) => d.slug === selectedSlug) || DISTRICTS[0];

  return (
    <div className="glass-card rounded-2xl p-6 lg:p-8 bg-white/90 border border-slate-200 shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* District Selector Panel (Left) */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-brand-dark flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-blue" /> Choose your district
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select one of Rajasthan&apos;s districts to see targeted booth stats and localized campaign consulting strategy options.
            </p>
          </div>

          {/* District Grid Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-2 max-h-[360px] overflow-y-auto pr-1 border border-slate-100 p-2.5 rounded-xl bg-slate-50">
            {DISTRICTS.map((d) => (
              <button
                key={d.slug}
                onClick={() => setSelectedSlug(d.slug)}
                className={`px-2.5 py-2 rounded-lg text-xs font-bold text-center truncate transition-all duration-200 ${
                  selectedSlug === d.slug
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/50'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* District Strategy Display (Right) */}
        <div className="lg:w-2/3 p-6 rounded-xl bg-slate-50/70 border border-slate-100/50 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200/80 pb-4 mb-4 gap-2">
              <div>
                <h4 className="text-2xl font-extrabold text-brand-dark">
                  {selectedDistrict.name} Constituency Strategy
                </h4>
                <p className="text-xs text-brand-blue font-semibold uppercase tracking-wider mt-0.5">
                  Rajasthan Election Operations Footprint
                </p>
              </div>
              <Link
                href={`/districts/${selectedDistrict.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-blue-700 bg-white border border-slate-200 px-3.5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                View SEO Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-white p-3 rounded-lg border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Assembly Constituencies</span>
                <span className="text-xl font-extrabold text-slate-800">{selectedDistrict.assemblySeats} Seats</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated Polling Booths</span>
                <span className="text-xl font-extrabold text-slate-800">{selectedDistrict.totalBooths.toLocaleString()} Booths</span>
              </div>
            </div>

            {/* Demographics & Issues */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Demographic Focus</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">{selectedDistrict.demographicFocus}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key District Issues Targeted</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1.5">
                  {selectedDistrict.keyIssues.map((issue) => (
                    <li key={issue} className="text-xs text-slate-600 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic approach hook */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 bg-white p-4 rounded-xl border border-slate-100">
            <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Settings className="w-4 h-4 text-brand-blue" /> CampaignX Operational Blueprints
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              &quot;{selectedDistrict.strategicApproach}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
