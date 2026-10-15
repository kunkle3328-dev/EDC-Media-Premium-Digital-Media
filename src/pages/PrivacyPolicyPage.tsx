import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig.ts';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 text-[#A7B3C3]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#A7B3C3]">
          Last Updated: October 2026 • Effective Immediately
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Introduction</h2>
          <p>
            {BRAND_CONFIG.legalName} ("EDC Media", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, process, and safeguard information when you visit our website, submit a project inquiry, or engage our creative and digital services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
          <p>We may collect and process the following categories of data:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-white">Identity & Contact Data:</strong> Full name, business or company name, email address, phone number, and website address submitted through consultation and contact forms.</li>
            <li><strong className="text-white">Project Scope Information:</strong> Details regarding your project goals, preferred services, estimated budget, desired timeline, and project briefs.</li>
            <li><strong className="text-white">Technical & Usage Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, operating system, and anonymized navigation pathways.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
          <p>We utilize your data strictly for legitimate commercial purposes, including:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Responding to your project inquiries and preparing proposals, estimates, or contracts.</li>
            <li>Communicating with you regarding scheduling, milestones, and deliverable reviews.</li>
            <li>Maintaining our persistent client lead pipeline and internal CRM records.</li>
            <li>Ensuring website security, spam prevention, and operational integrity.</li>
          </ul>
          <p className="text-white font-medium pt-1">
            We do NOT sell, rent, or trade your personal information to third-party data brokers or advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Data Storage & Security</h2>
          <p>
            Your inquiry submissions are stored in secure, persistent server storage with access restricted strictly to authorized EDC Media partners. We implement appropriate technical and organizational safeguards to prevent unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Your Legal Rights</h2>
          <p>
            Depending on your jurisdiction (including GDPR in Europe and CCPA in California), you have rights to access, rectify, or request deletion of your personal data held in our systems. To exercise these rights, please contact us directly.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1D3045] pt-6">
          <h2 className="text-xl font-bold text-white">6. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or our data handling practices, please email our data privacy representative at:
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
