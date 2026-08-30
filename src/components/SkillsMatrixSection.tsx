import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Search, 
  Cpu, 
  Server, 
  Layout, 
  Sparkles, 
  Check, 
  Star,
  Layers,
  Database
} from 'lucide-react';
import { SkillCategory, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface SkillsMatrixSectionProps {
  categories: SkillCategory[];
  accent: AccentColor;
}

export const SkillsMatrixSection: React.FC<SkillsMatrixSectionProps> = ({
  categories,
  accent
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const theme = themes[accent];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return categories
      .filter((cat) => {
        if (activeCategoryId !== 'all' && cat.id !== activeCategoryId) return false;
        return true;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.tags.some((t) => t.toLowerCase().includes(q))
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [categories, activeCategoryId, searchQuery]);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical & Leadership Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display">
              Core Competencies & Stack
            </h2>
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Go, AWS, React, Kafka)..."
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveCategoryId('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategoryId === 'all'
                ? theme.activeTab
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            All Competencies
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeCategoryId === cat.id
                  ? theme.activeTab
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-zinc-800/80">
                  <div className={`p-2.5 rounded-xl bg-zinc-800 text-zinc-200 ${theme.highlightText}`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/20">
                              Core
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500 text-xs font-mono-code">
                            {skill.years}
                          </span>
                          <span className="text-zinc-400 font-mono-code text-xs font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${theme.progressFill}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Tags */}
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {skill.tags.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono-code text-zinc-500"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400">
            <p className="text-sm">No skills matching "{searchQuery}" in this view.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryId('all');
              }}
              className={`mt-3 text-xs font-semibold underline ${theme.highlightText}`}
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
