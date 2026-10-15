import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, BRAND_CONFIG } from '../data/brandConfig.ts';
import {
  ArrowRight,
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
};

export const ServicesIndexPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
          <span>Full-Service Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          END-TO-END CREATIVE & <br />
          <span className="chrome-gradient">GROWTH SOLUTIONS.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#A7B3C3] leading-relaxed">
          EDC Media elevates each capability to broadcast and enterprise standards. Explore our six core service divisions below.
        </p>
      </div>

      {/* Services List with Rich Breakdown */}
      <div className="space-y-12">
        {SERVICES_DATA.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Layers;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="rounded-3xl bg-[#0A1019] border border-[#1D3045] p-8 md:p-12 hover:border-[#008CFF]/80 transition-all duration-300 shadow-xl overflow-hidden relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0D1521] border border-[#1D3045] flex items-center justify-center text-[#008CFF]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF] block">
                        Service Division 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#A7B3C3] leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Problems Solved */}
                  <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">
                      Problems This Service Solves:
                    </div>
                    <ul className="space-y-1 text-xs text-[#A7B3C3]">
                      {service.problemsSolved.slice(0, 3).map((prob, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">✕</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-colors shadow-md"
                    >
                      <span>Explore Dedicated {service.title} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#0D1521] hover:bg-[#05070B] border border-[#1D3045] transition-colors"
                    >
                      <span>Request Quote for This Service</span>
                    </Link>
                  </div>
                </div>

                {/* Deliverables Box Side */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="p-6 md:p-8 rounded-2xl bg-[#0D1521] border border-[#1D3045] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#1D3045]">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Standard Deliverables
                      </span>
                      <span className="text-[10px] text-[#19B5FF] bg-[#008CFF]/15 px-2 py-0.5 rounded border border-[#008CFF]/30 font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#A7B3C3]">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#008CFF] shrink-0 mt-0.5" />
                          <span className="leading-snug text-white/90">{deliv}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#1D3045] text-xs text-[#A7B3C3]">
                      <span className="font-semibold text-white">Ideal For: </span>
                      {service.targetAudience.slice(0, 2).join('; ')}.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-Service Bundle Banner */}
      <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0A1019] via-[#0D1521] to-[#0A1019] border border-[#1D3045] text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Looking to Combine Multiple Disciplines?
        </h3>
        <p className="text-sm text-[#A7B3C3] max-w-2xl mx-auto">
          Most of our clients pair Video Production with Digital Marketing or Web Development with Branding. We structure integrated scopes with clear synergy discounts and dedicated creative direction.
        </p>
        <Link
          to="/contact?service=custom-multi-service"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-colors shadow-lg"
        >
          <span>Design a Multi-Service Package</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
