import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { InquiryForm } from '../components/InquiryForm.tsx';
import { BRAND_CONFIG } from '../data/brandConfig.ts';
import {
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || undefined;
  const requestedPlan = searchParams.get('plan') || undefined;

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
          <span>Inquiries & New Engagements</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          LET'S DISCUSS YOUR <br />
          <span className="chrome-gradient">NEXT PROJECT.</span>
        </h1>

        <p className="text-base text-[#A7B3C3] leading-relaxed">
          Submit your project requirements below. Our partners review every brief and return a thoughtful, actionable proposal within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info & Expectation Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-6">
            <h2 className="text-xl font-bold text-white">Direct Communication</h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A7B3C3] block text-xs">Official Email</span>
                  <a
                    href={`mailto:${BRAND_CONFIG.contactEmail}`}
                    className="font-semibold text-white hover:text-[#008CFF] transition-colors"
                  >
                    {BRAND_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A7B3C3] block text-xs">Turnaround Expectation</span>
                  <span className="font-semibold text-white">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A7B3C3] block text-xs">Confidentiality Guarantee</span>
                  <span className="font-semibold text-white">Mutual NDA Available Upon Request</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1D3045] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                What Happens Next?
              </span>
              <ul className="space-y-2 text-xs text-[#A7B3C3]">
                <li className="flex items-start gap-2">
                  <span className="text-[#008CFF] font-bold">1.</span>
                  <span>Brief Review: We analyze your objectives, timelines, and technical requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008CFF] font-bold">2.</span>
                  <span>Discovery Call: A focused 25-minute consultation to clarify scope and milestones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008CFF] font-bold">3.</span>
                  <span>Formal Scope: Itemized proposal outlining deliverables, pricing, and schedule.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D1521] border border-[#1D3045] text-xs text-[#A7B3C3] space-y-2">
            <span className="text-white font-semibold block">Need immediate RFP submission?</span>
            <p>
              If you have an existing Request for Proposal document or spec sheet, you can send it directly to{' '}
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-[#008CFF] hover:underline">
                {BRAND_CONFIG.contactEmail}
              </a>{' '}
              with "RFP Submission" in the subject line.
            </p>
          </div>
        </div>

        {/* Right: The Full Inquiry Form */}
        <div className="lg:col-span-7">
          <InquiryForm
            initialService={requestedService}
            sourceContext={requestedPlan ? `Plan: ${requestedPlan}` : undefined}
          />
        </div>
      </div>
    </div>
  );
};
