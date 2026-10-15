import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG, WHY_CHOOSE_EDC, PROCESS_STEPS } from '../data/brandConfig.ts';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Eye,
  Rocket,
  Compass,
  CheckCircle2,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
          <span>About EDC Media</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
          WE BUILD THE DIGITAL ASSETS <br />
          <span className="chrome-gradient">THAT DRIVE REAL GROWTH.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#A7B3C3] leading-relaxed">
          EDC Media brings creative production, branding, marketing, and digital technology together to help businesses communicate clearly and grow with purpose.
        </p>

        <div className="pt-2">
          <span className="font-script text-2xl sm:text-3xl text-[#19B5FF]">
            {BRAND_CONFIG.supportingStatement}
          </span>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF]">
            <Compass className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Our Mission
          </span>
          <h2 className="text-2xl font-bold text-white">
            Empower Ambitious Businesses with Modern Commercial Firepower
          </h2>
          <p className="text-sm text-[#A7B3C3] leading-relaxed">
            To eliminate the friction of managing fragmented vendors by providing world-class video production, brand strategy, bespoke web applications, and customer acquisition campaigns under one unified standard.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF]">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#19B5FF]">
            Our Vision
          </span>
          <h2 className="text-2xl font-bold text-white">
            The Benchmark for Next-Generation Digital Media Agencies
          </h2>
          <p className="text-sm text-[#A7B3C3] leading-relaxed">
            We envision a landscape where creative artistry and commercial pragmatism are never mutually exclusive—where every piece of media created for a business actively contributes to durable enterprise value.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Our Core Values
          </h2>
          <p className="text-sm text-[#A7B3C3] mt-2">
            These four non-negotiable principles govern every client brief, production shoot, and code release at EDC Media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Obsessive Craftsmanship',
              description: 'Whether it is a 30-second cinema cut, an identity vector, or a React component, we never ship mediocre or template work.'
            },
            {
              title: 'Commercial Intent',
              description: 'Creativity without strategy is self-indulgent. We prioritize assets that generate measurable pipeline, authority, and revenue.'
            },
            {
              title: 'Radical Transparency',
              description: 'Clear pricing, honest milestone tracking, and direct senior communication without agency buzzwords or smoke and mirrors.'
            },
            {
              title: 'Complete IP Ownership',
              description: 'We believe clients should own their digital equity. All master vector files, raw cinema footage, and custom codebase belong to you.'
            }
          ].map((val, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0D1521] border border-[#1D3045] space-y-2">
              <div className="text-xs font-bold font-mono text-[#008CFF]">0{idx + 1}</div>
              <h4 className="text-base font-bold text-white">{val.title}</h4>
              <p className="text-xs text-[#A7B3C3] leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes EDC Media Different */}
      <div className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Agency Differentiation
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Why Working With EDC Media is Different
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_EDC.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0A1019] border border-[#1D3045] space-y-2"
            >
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-[#A7B3C3] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Engagement CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A1019] via-[#0D1521] to-[#0A1019] border border-[#1D3045] text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to Start a Conversation?
        </h3>
        <p className="text-sm text-[#A7B3C3] max-w-xl mx-auto">
          Contact our team to discuss your goals, review relevant portfolios, or receive a transparent scope estimate for your next milestone.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-colors shadow-lg"
        >
          <span>Schedule an Initial Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
