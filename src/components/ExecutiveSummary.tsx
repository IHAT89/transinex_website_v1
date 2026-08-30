import React from 'react';
import { Layers, Users, Zap, ShieldCheck, Target, Award, Compass, HeartHandshake } from 'lucide-react';
import { ProfileData, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ExecutiveSummaryProps {
  profile: ProfileData;
  accent: AccentColor;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ profile, accent }) => {
  const theme = themes[accent];

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  const leadershipPrinciples = [
    {
      title: 'Architectural Pragmatism',
      desc: 'Build for today’s constraints while designing clear upgrade paths. Reject premature over-engineering in favor of clean interfaces and measurable simplicity.'
    },
    {
      title: 'Autonomy with High Alignment',
      desc: 'Empower squads with clear context, defined SLOs, and psychological safety. Enable rapid decision-making at the edges rather than through bottlenecks.'
    },
    {
      title: 'Operational Excellence as a Default',
      desc: 'Treat observability, CI/CD automation, and test pyramids as fundamental product requirements rather than post-launch afterthoughts.'
    },
    {
      title: 'Mentorship & Force Multiplication',
      desc: 'Great engineering leaders do not just solve problems—they grow an ecosystem of engineers capable of solving harder problems independently.'
    }
  ];

  return (
    <section id="summary" className="py-16 md:py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Leadership & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display mb-4">
            Executive Summary & Strategic Pillars
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {profile.executiveSummary}
          </p>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {profile.strategicPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-zinc-800/80 text-zinc-200 group-hover:${theme.highlightText} transition-colors`}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Leadership Values */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950 border border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <HeartHandshake className={`w-5 h-5 ${theme.highlightText}`} />
            <h3 className="text-xl font-bold text-white font-serif-display">
              Guiding Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPrinciples.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-xs font-mono-code text-zinc-500 font-semibold">
                  0{idx + 1}
                </div>
                <div className="font-semibold text-sm text-zinc-200">
                  {item.title}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
