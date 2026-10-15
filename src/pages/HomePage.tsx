import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EdcLogo } from '../components/EdcLogo.tsx';
import { CinematicHeroVisual } from '../components/CinematicHeroVisual.tsx';
import { ProjectImage } from '../components/ProjectImage.tsx';
import {
  SERVICES_DATA,
  PORTFOLIO_PROJECTS,
  PRICING_PACKAGES,
  PROCESS_STEPS,
  WHY_CHOOSE_EDC,
  BRAND_CONFIG
} from '../data/brandConfig.ts';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Play,
  Layers,
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
  ChevronRight,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  Share2,
  Palette,
  Code,
  TrendingUp,
  Cpu,
};

export const HomePage: React.FC = () => {
  const [activePortfolioFilter, setActivePortfolioFilter] = useState<string>('all');

  const filteredProjects = activePortfolioFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === activePortfolioFilter);

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#008CFF]/15 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* =========================================================================
          SECTION B: CINEMATIC HERO
      ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold tracking-wider text-[#A7B3C3] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#008CFF] animate-pulse" />
              <span>Full-Service Digital Media & Growth Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              BRANDS DON’T <br />
              <span className="chrome-gradient">GROW BY ACCIDENT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#A7B3C3] leading-relaxed max-w-2xl">
              EDC Media combines creative production, strategic marketing, and digital technology to help businesses stand out, connect with their audience, and grow.
            </p>

            {/* Script Tagline */}
            <div className="pt-1">
              <span className="font-script text-2xl sm:text-3xl text-[#19B5FF] drop-shadow-[0_0_12px_rgba(0,140,255,0.6)]">
                {BRAND_CONFIG.supportingStatement}
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-extrabold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-all duration-200 shadow-[0_0_30px_rgba(0,140,255,0.45)] hover:shadow-[0_0_40px_rgba(25,181,255,0.7)] group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-[#0A1019] hover:bg-[#0D1521] border border-[#1D3045] hover:border-slate-600 transition-colors"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Services Summary Pills */}
            <div className="pt-8 border-t border-[#1D3045]/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A7B3C3] block mb-3">
                Core Agency Disciplines
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'Creative Media', path: '/services/video-production' },
                  { name: 'Digital Marketing', path: '/services/digital-marketing' },
                  { name: 'Web Development', path: '/services/web-development' },
                  { name: 'Branding & Design', path: '/services/branding-design' },
                  { name: 'AI & Automation', path: '/services/ai-automation' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-3 py-1.5 rounded-lg bg-[#0D1521] border border-[#1D3045] hover:border-[#008CFF] text-xs font-medium text-[#A7B3C3] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Director Monitor Visual */}
          <div className="lg:col-span-5 relative">
            <CinematicHeroVisual />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: SERVICES OVERVIEW
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1019]/60 border-y border-[#1D3045] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0D1521] text-[#008CFF] border border-[#1D3045]">
              <span>Everything Under One Roof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              EVERYTHING YOU NEED TO <br />
              <span className="chrome-gradient">BUILD, GROW & SCALE.</span>
            </h2>
            <p className="text-base text-[#A7B3C3] leading-relaxed">
              From the first creative concept to your next customer acquisition campaign, EDC Media brings the services, strategy, and execution together.
            </p>
          </div>

          {/* 6 Premium Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Layers;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-[#0D1521] border border-[#1D3045] hover:border-[#008CFF] transition-all duration-300 p-7 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,140,255,0.15)] relative overflow-hidden"
                >
                  {/* Subtle hover gradient highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#008CFF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#008CFF]/15 transition-colors" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-[#1D3045] group-hover:border-[#008CFF] flex items-center justify-center text-[#008CFF] group-hover:text-[#19B5FF] transition-colors shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#05070B] text-[#A7B3C3] border border-[#1D3045]">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#19B5FF] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#A7B3C3] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Deliverables snippet */}
                    <div className="border-t border-[#1D3045] pt-4 mb-6">
                      <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#A7B3C3]">
                        {service.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#008CFF] font-bold mt-0.5">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1D3045] text-xs font-bold text-[#008CFF] group-hover:text-[#19B5FF] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#19B5FF] transition-colors"
            >
              <span>View All 6 Services & Full Capability Breakdown</span>
              <ArrowRight className="w-4 h-4 text-[#008CFF]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: FEATURED PORTFOLIO
      ========================================================================= */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1019] text-[#008CFF] border border-[#1D3045]">
              <span>Featured Work & Concepts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              OUR WORK. OUR CRAFT. <br />
              <span className="chrome-gradient">YOUR NEXT OPPORTUNITY.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B3C3]">
              Every project represents a commitment to high-calibre aesthetics and commercial impact. Browse our production, design, and growth case studies.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#008CFF] hover:text-[#19B5FF] transition-colors shrink-0"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Portfolio Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#1D3045]">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Video Production', value: 'video-production' },
            { label: 'Branding & Design', value: 'branding-design' },
            { label: 'Web Development', value: 'web-development' },
            { label: 'Digital Marketing', value: 'digital-marketing' },
            { label: 'AI & Automation', value: 'ai-automation' },
          ].map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActivePortfolioFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activePortfolioFilter === f.value
                  ? 'bg-[#008CFF] text-white shadow-[0_0_15px_rgba(0,140,255,0.4)]'
                  : 'bg-[#0A1019] text-[#A7B3C3] hover:text-white border border-[#1D3045]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0D1521] border border-[#1D3045] overflow-hidden hover:border-[#008CFF] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#05070B]">
                  <ProjectImage
                    src={project.coverImage}
                    alt={project.title}
                    category={project.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1521] via-transparent to-transparent opacity-80" />

                  {/* Concept Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#05070B]/90 backdrop-blur-md border border-[#1D3045] text-[10px] font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.isConcept && (
                      <span className="px-2 py-0.5 rounded bg-[#008CFF]/20 border border-[#008CFF]/50 text-[10px] font-semibold text-[#19B5FF]">
                        Concept Showcase
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#19B5FF] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B3C3] leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="space-y-1.5 text-xs text-[#A7B3C3] border-t border-[#1D3045] pt-4">
                    <div className="font-semibold text-white">Agency Role:</div>
                    <div>{project.role}</div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA to Discuss Similar Project */}
              <div className="p-6 pt-0">
                <Link
                  to={`/contact?service=${project.categorySlug}&ref=${project.id}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#05070B] border border-[#1D3045] hover:border-[#008CFF] hover:bg-[#008CFF]/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#008CFF]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION E: WHY EDC MEDIA
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1019] border-y border-[#1D3045]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0D1521] text-[#008CFF] border border-[#1D3045]">
                <span>Our Philosophy & Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                MORE THAN A SERVICE. <br />
                <span className="chrome-gradient">A PARTNER IN YOUR GROWTH.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A7B3C3] leading-relaxed">
                Traditional agencies force you to manage fragmented vendors—one team for video, another for websites, and a third for media buying. EDC Media consolidates creative direction and technical firepower under one cohesive standard.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#008CFF] hover:text-[#19B5FF] transition-colors"
                >
                  <span>Learn more about EDC Media's approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_EDC.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-2 hover:border-[#008CFF]/60 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] text-xs font-bold">
                    0{index + 1}
                  </div>
                  <h4 className="text-base font-bold text-white pt-1">{item.title}</h4>
                  <p className="text-xs text-[#A7B3C3] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: HOW IT WORKS (4-STEP PROCESS)
      ========================================================================= */}
      <section id="how-it-works" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1019] text-[#008CFF] border border-[#1D3045]">
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A CLEAR PROCESS. <br />
            <span className="chrome-gradient">BUILT AROUND YOUR GOALS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B3C3]">
            No ambiguous handoffs or radio silence. Every engagement follows a disciplined four-stage pipeline designed for predictability and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 rounded-2xl bg-[#0A1019] border border-[#1D3045] relative overflow-hidden group hover:border-[#008CFF] transition-all"
            >
              <div className="text-4xl font-black text-[#1D3045] group-hover:text-[#008CFF]/40 transition-colors mb-4 font-mono">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{step.name}</h3>
              <div className="text-xs font-semibold text-[#008CFF] mb-3">{step.tagline}</div>
              <p className="text-xs sm:text-sm text-[#A7B3C3] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-colors shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: SOCIAL PROOF & CLIENT PARTNERSHIP INVITATION
      ========================================================================= */}
      <section className="py-20 bg-[#0A1019]/40 border-y border-[#1D3045]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1521] border border-[#1D3045] text-xs font-semibold text-[#19B5FF]">
            <ShieldCheck className="w-4 h-4 text-[#008CFF]" />
            <span>Honest Agency Standards & Client Partnership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            BUILT FOR AMBITIOUS BRANDS READY TO SCALE.
          </h2>

          <p className="text-sm sm:text-base text-[#A7B3C3] max-w-3xl mx-auto leading-relaxed">
            EDC Media values genuine client relationships built on transparent scope, clear milestones, and verified deliverables. We never fabricate client reviews or inflate vanity numbers. When you partner with us, you work directly with experienced creative directors and engineers dedicated to your brand's growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-xl bg-[#0D1521] border border-[#1D3045] text-left">
              <div className="text-sm font-bold text-white mb-1">Direct Senior Involvement</div>
              <p className="text-xs text-[#A7B3C3]">
                Your briefs are handled directly by seasoned directors and senior engineers—never outsourced to inexperienced juniors.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0D1521] border border-[#1D3045] text-left">
              <div className="text-sm font-bold text-white mb-1">Full IP Ownership</div>
              <p className="text-xs text-[#A7B3C3]">
                You retain 100% intellectual property ownership of all raw footage, design vectors, and custom codebase handoffs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0D1521] border border-[#1D3045] text-left">
              <div className="text-sm font-bold text-white mb-1">Transparent Milestones</div>
              <p className="text-xs text-[#A7B3C3]">
                Clear phase reviews, staging previews, and weekly progress updates ensure you are always in complete control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H: PRICING AND PACKAGES PREVIEW
      ========================================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1019] text-[#008CFF] border border-[#1D3045]">
            <span>Engagement Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            FLEXIBLE SOLUTIONS. <br />
            <span className="chrome-gradient">CLEAR NEXT STEPS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B3C3]">
            Every brand has unique objectives and timelines. We offer three engagement structures tailored to your operational stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl bg-[#0D1521] border border-[#1D3045] p-8 flex flex-col justify-between hover:border-[#008CFF] transition-all relative group"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#008CFF] mb-2 block">
                  {pkg.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{pkg.title}</h3>
                <p className="text-xs sm:text-sm text-[#A7B3C3] leading-relaxed mb-6">
                  {pkg.shortDesc}
                </p>

                <div className="p-3 rounded-lg bg-[#05070B] border border-[#1D3045] text-xs mb-6">
                  <span className="text-[#A7B3C3] block">Pricing Structure:</span>
                  <span className="font-semibold text-white">{pkg.startingRange}</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#A7B3C3] mb-6">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#008CFF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1D3045]">
                <Link
                  to={`/contact?plan=${pkg.id}`}
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white bg-[#0A1019] group-hover:bg-[#008CFF] border border-[#1D3045] group-hover:border-[#008CFF] transition-all block"
                >
                  {pkg.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="text-xs font-bold text-[#008CFF] hover:text-[#19B5FF] inline-flex items-center gap-1.5"
          >
            <span>Explore Comprehensive Pricing & Scope Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION I: FINAL CONVERSION CTA
      ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0A1019] to-[#0D1521] border border-[#1D3045] p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl">
          {/* Focal Electric Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#008CFF]/20 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="font-script text-3xl sm:text-4xl text-[#19B5FF] drop-shadow-[0_0_15px_rgba(0,140,255,0.7)]">
              {BRAND_CONFIG.supportingStatement}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              READY TO BRING YOUR <br />
              <span className="chrome-gradient">VISION TO LIFE?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A7B3C3] max-w-2xl mx-auto leading-relaxed">
              Tell us where you want to go. We'll help you explore the right creative, marketing, and digital solutions to get there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-[#008CFF] hover:bg-[#19B5FF] transition-all duration-200 shadow-[0_0_35px_rgba(0,140,255,0.5)] hover:shadow-[0_0_50px_rgba(25,181,255,0.8)]"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#05070B] hover:bg-[#0A1019] border border-[#1D3045] hover:border-slate-500 transition-colors"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
