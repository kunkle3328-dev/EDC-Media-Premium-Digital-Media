import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PACKAGES, SERVICES_DATA } from '../data/brandConfig.ts';
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Calculator,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'video-production',
    'web-development'
  ]);
  const [selectedCommitment, setSelectedCommitment] = useState<'project' | 'retainer'>('project');

  const toggleDiscipline = (id: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const calculateEstimateNotice = () => {
    const count = selectedDisciplines.length;
    if (count === 0) return 'Select at least one discipline above to see engagement scope.';
    if (count === 1) return 'Single-discipline focused sprint with dedicated lead director.';
    if (count <= 3) return 'Multi-discipline package with cross-service synchronization.';
    return 'Full-service enterprise agency partnership with dedicated team allocation.';
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
          <span>Transparent Engagements</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          PACKAGES & <br />
          <span className="chrome-gradient">INVESTMENT STRUCTURES.</span>
        </h1>

        <p className="text-base text-[#A7B3C3] leading-relaxed">
          We tailor every scope to your commercial targets and timeline. Choose between fixed-scope project sprints, ongoing growth retainers, or custom multi-service bundles.
        </p>

        {/* Pricing Transparency Note */}
        <div className="p-3.5 rounded-xl bg-[#0D1521] border border-[#1D3045] text-xs text-[#A7B3C3] max-w-xl mx-auto">
          <span className="font-semibold text-white">Clear Scoping Policy: </span>
          Quotes are customized based on technical complexity, deliverable quantities, licensing, and turnaround requirements. We provide itemized proposals with zero hidden costs.
        </div>
      </div>

      {/* 3 Core Engagement Paths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-3xl bg-[#0A1019] border border-[#1D3045] p-8 flex flex-col justify-between hover:border-[#008CFF] transition-all relative group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#008CFF] bg-[#008CFF]/15 px-2.5 py-1 rounded-full border border-[#008CFF]/30">
                  {pkg.category}
                </span>
                <Zap className="w-4 h-4 text-[#A7B3C3] group-hover:text-[#19B5FF] transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-xs sm:text-sm text-[#A7B3C3] leading-relaxed mb-6">
                {pkg.shortDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-1 mb-6">
                <span className="text-[11px] uppercase tracking-wider text-[#A7B3C3] font-semibold block">
                  Best For:
                </span>
                <p className="text-xs text-white/90 leading-snug">{pkg.bestFor}</p>
              </div>

              <div className="space-y-3 text-xs text-[#A7B3C3] mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
                  Included Standards:
                </span>
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008CFF] shrink-0 mt-0.5" />
                    <span className="text-white/80">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1D3045]">
              <Link
                to={`/contact?plan=${pkg.id}`}
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-[#0D1521] group-hover:bg-[#008CFF] border border-[#1D3045] group-hover:border-[#008CFF] transition-all block shadow-md"
              >
                {pkg.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Scope & Discipline Selector */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008CFF] mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Scope Configurator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Select Your Target Disciplines
          </h2>
          <p className="text-sm text-[#A7B3C3] mt-2">
            Build a preliminary scope package to pre-populate directly into your project inquiry.
          </p>
        </div>

        {/* Disciplines Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedDisciplines.includes(service.slug);
            return (
              <button
                type="button"
                key={service.id}
                onClick={() => toggleDiscipline(service.slug)}
                className={`p-4 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#008CFF]/15 border-[#008CFF] text-white shadow-[0_0_15px_rgba(0,140,255,0.3)]'
                    : 'bg-[#0D1521] border-[#1D3045] text-[#A7B3C3] hover:text-white'
                }`}
              >
                <div className="font-bold text-sm text-white">{service.title}</div>
                <div className="text-[11px] text-[#A7B3C3] mt-1 line-clamp-1">
                  {service.badge}
                </div>
                <div className="mt-3 text-[10px] font-semibold text-[#19B5FF]">
                  {isSelected ? '✓ Selected in Bundle' : '+ Click to Add'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Configured Scope Summary Box */}
        <div className="p-6 rounded-2xl bg-[#0D1521] border border-[#1D3045] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-[#A7B3C3] font-semibold">
              Configured Agency Package ({selectedDisciplines.length} Disciplines)
            </div>
            <div className="text-sm font-bold text-white">
              {calculateEstimateNotice()}
            </div>
          </div>

          <Link
            to={`/contact?services=${selectedDisciplines.join(',')}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#008CFF] hover:bg-[#19B5FF] text-white text-xs font-bold transition-colors text-center shrink-0 shadow-lg"
          >
            Request Itemized Proposal for This Scope →
          </Link>
        </div>
      </div>

      {/* FAQ on Pricing & Terms */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Frequently Asked Questions About EDC Media Engagements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#A7B3C3]">
          <div className="space-y-2">
            <h4 className="font-bold text-white">How are project payments structured?</h4>
            <p className="leading-relaxed">
              Standard one-time projects typically follow a 50% initial deposit upon contract signing, with milestone disbursements at designated staging approvals and master delivery.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white">What is included in monthly retainers?</h4>
            <p className="leading-relaxed">
              Monthly retainers guarantee a dedicated allocation of creative direction, content creation, production shoots, and engineering hours each month with weekly sync calls.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white">Do you charge extra for revisions?</h4>
            <p className="leading-relaxed">
              Every fixed-scope project includes two comprehensive rounds of revisions per milestone. Additional rounds can be scheduled if requirements shift mid-engagement.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white">Who owns the master source files?</h4>
            <p className="leading-relaxed">
              Upon final payment completion, all raw cinema footage, editing project files, Figma design systems, vector marks, and source code are 100% owned by your company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
