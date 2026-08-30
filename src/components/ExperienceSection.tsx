import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ExperienceItem, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  accent: AccentColor;
  onSelectProject?: (projectId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  accent,
  onSelectProject
}) => {
  const [filter, setFilter] = useState<'all' | 'leadership' | 'architecture' | 'fullstack' | 'cloud'>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true
  });

  const theme = themes[accent];

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filterTabs = [
    { id: 'all', label: 'All Roles' },
    { id: 'leadership', label: 'Leadership & Management' },
    { id: 'architecture', label: 'Architecture & System Design' },
    { id: 'fullstack', label: 'Full-Stack & Web' },
    { id: 'cloud', label: 'Cloud & Infrastructure' }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display">
              Professional Experience
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === tab.id
                    ? theme.activeTab
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div
                key={exp.id}
                id={`role-${exp.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200"
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400 font-medium">
                      <span className="text-zinc-200 font-semibold">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Badges & Expand Trigger */}
                  <div className="flex items-center gap-3">
                    {exp.metrics && exp.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-right hidden sm:block"
                      >
                        <div className={`text-xs font-bold ${theme.highlightText}`}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          {m.label}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors ml-auto lg:ml-0"
                      title={isExpanded ? 'Collapse role details' : 'Expand role details'}
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Role Summary Hook */}
                <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-6 animate-in fade-in-50 duration-200">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Core Strategic Mandate
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Achievements */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                        <TrendingUp className={`w-3.5 h-3.5 ${theme.highlightText}`} />
                        Key Measurable Achievements
                      </h4>
                      <div className="space-y-2">
                        {exp.keyAchievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/70 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                              {ach}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Used */}
                    <div className="pt-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                        Technologies & Methodologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
