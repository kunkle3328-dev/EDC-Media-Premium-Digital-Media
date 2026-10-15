import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS, PortfolioProject, BRAND_CONFIG } from '../data/brandConfig.ts';
import { ProjectImage } from '../components/ProjectImage.tsx';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  CheckCircle2,
  Layers,
  Wrench,
  Target
} from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Video Production', value: 'video-production' },
    { label: 'Branding & Design', value: 'branding-design' },
    { label: 'Web Development', value: 'web-development' },
    { label: 'Digital Marketing', value: 'digital-marketing' },
    { label: 'AI & Automation', value: 'ai-automation' },
    { label: 'Social Media', value: 'social-media-management' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1019] border border-[#1D3045] text-xs font-semibold text-[#19B5FF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
          <span>Case Studies & Creative Work</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          PORTFOLIO & <br />
          <span className="chrome-gradient">SELECTED WORKS.</span>
        </h1>

        <p className="text-base text-[#A7B3C3] leading-relaxed">
          Explore our visual storytelling, digital engineering, and growth architecture. Each record highlights objectives, deliverables, and production craft.
        </p>

        {/* Ethical Disclosure Note */}
        <div className="p-3 rounded-xl bg-[#0D1521] border border-[#1D3045] text-xs text-[#A7B3C3] max-w-xl mx-auto text-center">
          <span className="font-semibold text-white">Transparency Notice: </span>
          Projects marked <span className="text-[#19B5FF] font-semibold">Concept Showcase</span> represent internal creative treatments and speculative architectural designs demonstrating EDC Media's standard of execution.
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
        {categories.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setSelectedCategory(c.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === c.value
                ? 'bg-[#008CFF] text-white shadow-[0_0_15px_rgba(0,140,255,0.4)]'
                : 'bg-[#0A1019] text-[#A7B3C3] hover:text-white border border-[#1D3045]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#0A1019] border border-[#1D3045] max-w-md mx-auto space-y-3">
          <div className="text-white font-bold">No Projects Currently in This Category</div>
          <p className="text-xs text-[#A7B3C3]">
            We are actively preparing new case studies for this category. Contact us to review private client decks and relevant offline reels.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#008CFF] hover:underline"
          >
            <span>Request Private Reel Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0A1019] border border-[#1D3045] overflow-hidden group hover:border-[#008CFF] transition-all flex flex-col justify-between"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1019] via-transparent to-transparent opacity-75" />

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
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#19B5FF] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A7B3C3] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-3 border-t border-[#1D3045] text-xs">
                    <span className="text-[#A7B3C3]">Role: </span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#0D1521] border border-[#1D3045] hover:border-[#008CFF] text-xs font-semibold text-white transition-colors"
                >
                  View Case Study Details
                </button>
                <Link
                  to={`/contact?service=${project.categorySlug}`}
                  className="p-2 rounded-lg bg-[#008CFF] hover:bg-[#19B5FF] text-white transition-colors"
                  title="Inquire about a similar project"
                  aria-label="Inquire about this project"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0A1019] border border-[#1D3045] p-6 sm:p-8 shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#0D1521] text-[#A7B3C3] hover:text-white border border-[#1D3045]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <ProjectImage
                  src={activeModalProject.coverImage}
                  alt={activeModalProject.title}
                  category={activeModalProject.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#05070B]/90 text-xs font-bold text-white border border-[#1D3045]">
                    {activeModalProject.category}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  {activeModalProject.title}
                </h2>
                <p className="text-sm text-[#A7B3C3] mt-2 leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Objectives & Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-2">
                  <div className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#008CFF]" />
                    <span>Project Objectives</span>
                  </div>
                  <ul className="space-y-1.5 text-[#A7B3C3]">
                    {activeModalProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#008CFF] font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] space-y-2">
                  <div className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008CFF]" />
                    <span>Delivered Assets</span>
                  </div>
                  <ul className="space-y-1.5 text-[#A7B3C3]">
                    {activeModalProject.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#19B5FF] font-bold">✔</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech / Equipment Stack */}
              <div className="p-4 rounded-xl bg-[#05070B] border border-[#1D3045] text-xs">
                <span className="font-bold text-white block mb-1.5">Production Stack / Tooling:</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologiesOrEquipment.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#0D1521] border border-[#1D3045] text-[#A7B3C3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#A7B3C3]">
                  Have a similar project in mind?
                </span>
                <Link
                  to={`/contact?service=${activeModalProject.categorySlug}&ref=${activeModalProject.id}`}
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#008CFF] hover:bg-[#19B5FF] text-white text-xs font-bold transition-colors text-center"
                >
                  Discuss a Similar Project With Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
