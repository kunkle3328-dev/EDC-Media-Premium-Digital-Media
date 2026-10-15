import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig.ts';
import { ShieldCheck } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 text-[#A7B3C3]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Agency Agreements</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-[#A7B3C3]">
          Last Updated: October 2026 • Effective Immediately
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by {BRAND_CONFIG.legalName} ("EDC Media"), you agree to be bound by these Terms of Service. If you are entering into an engagement on behalf of a company or entity, you represent that you possess the authority to bind such entity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Scope of Services & Statements of Work</h2>
          <p>
            Specific deliverables, timelines, milestone schedules, and compensation terms are outlined in individual Statements of Work (SOW) or written proposals executed between EDC Media and the client. In the event of a conflict between these general Terms and an active SOW, the terms of the SOW shall govern.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights & Ownership</h2>
          <p>
            Upon full and final payment of all agreed fees for a project, EDC Media transfers all intellectual property rights and full ownership of the final approved deliverables (including video master files, vector marks, design systems, and custom code) to the client.
          </p>
          <p>
            EDC Media reserves the perpetual, non-exclusive right to display the completed work, case studies, and excerpts in its marketing materials, portfolio, and website unless an explicit Non-Disclosure Agreement (NDA) specifies otherwise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Client Responsibilities & Approvals</h2>
          <p>
            Timely delivery requires timely cooperation. The client agrees to provide necessary brand assets, credentials, copy, and prompt milestone feedback within the review windows specified in the SOW.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Revisions & Changes in Scope</h2>
          <p>
            Each milestone includes up to two (2) consolidated rounds of client revisions within the original scope. Requests that exceed the agreed scope or fundamentally alter established creative direction will be quoted as an addendum before commencement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Invoicing & Payment Terms</h2>
          <p>
            Unless otherwise agreed in writing, one-time projects require a 50% non-refundable deposit prior to commencement, with remaining balances invoiced upon milestone achievements and prior to master file release. Retainers are billed monthly in advance.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1D3045] pt-6">
          <h2 className="text-xl font-bold text-white">7. Governing Law & Contact</h2>
          <p>
            These terms are governed by the laws applicable to digital agency commercial agreements. For questions or formal contractual notices, contact:
          </p>
          <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] text-white">
            <div className="font-bold">{BRAND_CONFIG.legalName}</div>
            <div className="text-xs text-[#008CFF] mt-1">
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`}>{BRAND_CONFIG.contactEmail}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
