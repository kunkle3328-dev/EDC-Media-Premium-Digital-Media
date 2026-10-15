import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA, PORTFOLIO_PROJECTS, BRAND_CONFIG } from '../data/brandConfig.ts';
import { InquiryForm } from '../components/InquiryForm.tsx';
import { ProjectImage } from '../components/ProjectImage.tsx';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.iconName] || Layers;

  // Filter relevant portfolio projects for this service
  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === service.slug);

  // Cross-linked related services
  const relatedServicesList = SERVICES_DATA.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* =========================================================================
          1. DISTINCTIVE SERVICE HERO
      ========================================================================= */}
      <section className="relative rounded-3xl bg-gradient-to-b from-[#0A1019] to-[#0D1521] border border-[#1D3045] p-8 sm:p-12 md:p-16 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05070B] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
            <IconComponent className="w-4 h-4 text-[#008CFF]" />
            <span>EDC Media Capability • {service.title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#A7B3C3] leading-relaxed">
            {service.heroSubheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#service-inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-extrabold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-all shadow-lg"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#deliverables"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#05070B] border border-[#1D3045] hover:border-slate-500 transition-colors"
            >
              <span>View Deliverables & Scope</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. VALUE PROPOSITION & PROBLEMS SOLVED
      ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Value Proposition Box */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0A1019] border border-[#1D3045] space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Strategic Value Proposition
          </span>
          <h2 className="text-2xl font-bold text-white">
            Why Ambition Requires Premium Execution
          </h2>
          <p className="text-sm text-[#A7B3C3] leading-relaxed">
            {service.valueProposition}
          </p>
          <div className="pt-4 border-t border-[#1D3045]">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
              Who This Service Is Engineered For:
            </span>
            <ul className="space-y-1.5 text-xs text-[#A7B3C3]">
              {service.targetAudience.map((audience, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#008CFF] font-bold">✔</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Problems Solved */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0D1521] border border-[#1D3045] space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#19B5FF]">
              Target Pain Points
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Common Obstacles We Eliminate
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.problemsSolved.map((problem, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0A1019] border border-[#1D3045] text-xs text-[#A7B3C3] space-y-1.5"
              >
                <div className="text-red-400 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Friction Point #{i + 1}</span>
                </div>
                <p className="leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DETAILED DELIVERABLES
      ========================================================================= */}
      <section id="deliverables" className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Scope of Work
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">
            Standard Deliverables & Capabilities
          </h2>
          <p className="text-sm text-[#A7B3C3] mt-2">
            Every deliverable adheres to our rigorous production and engineering criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((deliv, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0A1019] border border-[#1D3045] hover:border-[#008CFF] transition-all space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] text-xs font-bold">
                0{index + 1}
              </div>
              <h3 className="text-base font-bold text-white leading-snug">{deliv}</h3>
              <p className="text-xs text-[#A7B3C3] leading-relaxed">
                Full commercial usage rights, transparent staging reviews, and verified quality control checks prior to final release.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. ENGAGEMENT PROCESS STEPS
      ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0A1019] border border-[#1D3045] space-y-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            How We Execute Your {service.title} Engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-2 relative"
            >
              <div className="text-xs font-mono font-bold text-[#19B5FF]">
                PHASE 0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-xs text-[#A7B3C3] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. RELEVANT PORTFOLIO SHOWCASE
      ========================================================================= */}
      {relatedProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
                Proven Craft
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Featured {service.title} Showcase
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-xs font-bold text-[#008CFF] hover:text-[#19B5FF] flex items-center gap-1"
            >
              <span>All Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0A1019] border border-[#1D3045] overflow-hidden group hover:border-[#008CFF] transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ProjectImage
                    src={project.coverImage}
                    alt={project.title}
                    category={project.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#05070B]/90 text-[10px] font-bold text-white uppercase border border-[#1D3045]">
                      {project.isConcept ? 'Concept Project' : 'Client Project'}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-[#A7B3C3]">{project.summary}</p>
                  <div className="text-xs text-[#19B5FF] font-medium">
                    Agency Role: {project.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          6. FAQS (ACCORDION)
      ========================================================================= */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0A1019] border border-[#1D3045] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#008CFF] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#A7B3C3] leading-relaxed border-t border-[#1D3045]/60 bg-[#0D1521]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          7. RELATED SERVICES CROSS-LINKING
      ========================================================================= */}
      <section className="pt-8 border-t border-[#1D3045]">
        <h3 className="text-xl font-bold text-white mb-6">
          Frequently Paired With {service.title}:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServicesList.map((rel) => {
            const RelIcon = iconMap[rel.iconName] || Layers;
            return (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="p-5 rounded-xl bg-[#0A1019] border border-[#1D3045] hover:border-[#008CFF] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0D1521] border border-[#1D3045] flex items-center justify-center text-[#008CFF] group-hover:text-[#19B5FF]">
                    <RelIcon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#19B5FF] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#A7B3C3] line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-semibold text-[#008CFF] flex items-center gap-1">
                  <span>Explore {rel.title}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          8. DEDICATED INQUIRY FORM ANCHOR
      ========================================================================= */}
      <section id="service-inquiry" className="pt-8">
        <InquiryForm
          initialService={service.slug}
          sourceContext={service.title}
        />
      </section>
    </div>
  );
};
