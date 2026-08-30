import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  X, 
  ArrowUpRight,
  Shield,
  Zap,
  Sparkles
} from 'lucide-react';
import { ProjectCaseStudy, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ProjectsSectionProps {
  projects: ProjectCaseStudy[];
  accent: AccentColor;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, accent }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const theme = themes[accent];

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Architectural Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display">
              Featured Systems & Initiatives
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  filterCategory === cat
                    ? theme.activeTab
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat === 'all' ? 'All Case Studies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  {project.statBadge && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono-code font-bold ${theme.badge}`}>
                      {project.statBadge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-zinc-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Problem & Solution Teaser */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                  {project.problem}
                </p>

                {/* Key Result Highlight */}
                {project.results.length > 0 && (
                  <div className="mb-6 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-200 leading-relaxed">
                      {project.results[0]}
                    </span>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-zinc-800/90 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={`text-xs font-semibold flex items-center gap-1.5 ${theme.highlightText} hover:underline`}
                  >
                    <span>Read Full Architecture Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/iantownrow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800/60 rounded-lg hover:bg-zinc-800 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Deep Dive Architecture & Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-50">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wide">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-display mt-1 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Stat Badge */}
              {selectedProject.statBadge && (
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono-code font-bold ${theme.badge}`}>
                    Key Metric: {selectedProject.statBadge}
                  </span>
                </div>
              )}

              {/* Challenge & Problem */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  1. The Challenge & Requirements
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Architecture Blueprint */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  2. Architecture & Design Decisions
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  {selectedProject.solution}
                </p>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Layers className={`w-4 h-4 shrink-0 mt-0.5 ${theme.highlightText}`} />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measured Impact */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  3. Measured Business & Performance Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedProject.results.map((res, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-200">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-zinc-800 text-zinc-200 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
