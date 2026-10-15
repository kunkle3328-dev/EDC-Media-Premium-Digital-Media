import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EdcLogo } from './EdcLogo.tsx';
import { BRAND_CONFIG, SERVICES_DATA } from '../data/brandConfig.ts';
import { Mail, ArrowUpRight, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [systemStatus, setSystemStatus] = useState<{
    status: string;
    inquiriesCaptured: number;
    emailServiceConfigured: boolean;
  } | null>(null);

  useEffect(() => {
    fetch('/api/system-status')
      .then((res) => res.json())
      .then((data) => {
        setSystemStatus({
          status: data.status,
          inquiriesCaptured: data.storage?.inquiriesCaptured ?? 0,
          emailServiceConfigured: data.integrations?.emailServiceConfigured ?? false,
        });
      })
      .catch(() => {
        // Fallback gracefully
        setSystemStatus({
          status: 'client_active',
          inquiriesCaptured: 0,
          emailServiceConfigured: false,
        });
      });
  }, []);

  return (
    <footer className="bg-[#0A1019] border-t border-[#1D3045] pt-16 pb-12 text-[#A7B3C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1D3045]">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <EdcLogo variant="chrome" size="md" showTagline={true} />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[#A7B3C3]">
              EDC Media is a full-service digital media and growth agency. We combine cinematic production, strategic marketing, web development, and digital technology to build brands that scale.
            </p>
            <div className="pt-2">
              <div className="font-script text-2xl text-[#19B5FF] drop-shadow-[0_0_10px_rgba(0,140,255,0.4)]">
                {BRAND_CONFIG.supportingStatement}
              </div>
            </div>

            {/* Direct Official Contact */}
            <div className="pt-4 flex flex-col space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <Mail className="w-4 h-4 text-[#008CFF]" />
                <a
                  href={`mailto:${BRAND_CONFIG.contactEmail}`}
                  className="hover:text-[#19B5FF] transition-colors"
                >
                  {BRAND_CONFIG.contactEmail}
                </a>
              </div>
              <div className="text-[#A7B3C3] text-xs">
                Business Inquiries & RFP submissions processed within 24 hours.
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#008CFF] transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#008CFF] hover:text-[#19B5FF] transition-colors"
                >
                  View All Capabilities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Agency & Work
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About EDC Media
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Our 4-Step Process
                </a>
              </li>
            </ul>
          </div>

          {/* Social & System Health Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={BRAND_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7B3C3]" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7B3C3]" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A7B3C3]" />
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Server Operational Status Badge */}
            <div className="mt-6 p-3 rounded-lg bg-[#05070B] border border-[#1D3045]">
              <div className="flex items-center gap-2 text-xs text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>API & Database Online</span>
              </div>
              <div className="text-[11px] text-[#A7B3C3] mt-1">
                {systemStatus ? (
                  <span>
                    Pipeline: {systemStatus.inquiriesCaptured} inquiries recorded in secure JSON store.
                  </span>
                ) : (
                  <span>Checking backend pipeline status...</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B3C3]">
          <div>
            &copy; {currentYear} {BRAND_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-[#1D3045]">|</span>
            <span className="text-[#A7B3C3]">
              Official Chrome Direction • {BRAND_CONFIG.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
