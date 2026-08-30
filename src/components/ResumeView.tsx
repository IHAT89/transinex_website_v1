import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Cpu, 
  Check, 
  Copy 
} from 'lucide-react';
import { ProfileData, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ResumeViewProps {
  profile: ProfileData;
  accent: AccentColor;
  onOpenPrintModal: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({
  profile,
  accent,
  onOpenPrintModal
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const theme = themes[accent];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Banner Toolbar */}
      <div className="mb-8 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono-code text-zinc-400 block">VIEW_MODE: EXECUTIVE_CV</span>
          <span className="text-sm font-bold text-white">Full-Length Professional Curriculum Vitae</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPrintModal}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${theme.buttonPrimary}`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Export PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Card */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-10">
        
        {/* Header Block */}
        <div className="border-b border-zinc-800 pb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif-display tracking-tight mb-2">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-3">
                {profile.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-mono-code">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {profile.location}
                </span>
                <span>•</span>
                <a href="https://linkedin.com/in/iantownrow" target="_blank" rel="noreferrer" className="hover:text-white">
                  linkedin.com/in/iantownrow
                </a>
                <span>•</span>
                <a href="https://github.com/iantownrow" target="_blank" rel="noreferrer" className="hover:text-white">
                  github.com/iantownrow
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-right shrink-0">
              <span className="text-[11px] font-mono-code text-zinc-500 block">TOTAL EXPERIENCE</span>
              <span className={`text-2xl font-bold font-serif-display ${theme.highlightText}`}>12+ Years</span>
              <span className="text-[10px] text-zinc-400 block">Enterprise Scale</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Summary
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {profile.executiveSummary}
          </p>
        </div>

        {/* Skills Matrix High Level */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            Core Competencies & Technology Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.skillCategories.map((cat) => (
              <div key={cat.id} className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <span className="text-xs font-bold text-zinc-200 block mb-1">{cat.title}</span>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono-code">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-6 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            Career History & Impact
          </h2>

          <div className="space-y-8">
            {profile.experiences.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-zinc-300">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-zinc-400">
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5">
                    {exp.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-800">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>
            {profile.education.map((edu) => (
              <div key={edu.id} className="text-xs space-y-1">
                <div className="font-bold text-white text-sm">
                  {edu.degree} — {edu.field}
                </div>
                <div className="text-zinc-300 font-medium">{edu.institution}</div>
                <div className="text-zinc-500 font-mono-code">{edu.period} • {edu.location}</div>
                {edu.honors && <div className="text-amber-400 font-medium">{edu.honors}</div>}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {profile.certifications.map((c) => (
                <div key={c.id}>
                  <span className="font-bold text-zinc-200">{c.name}</span>
                  <span className="text-zinc-500 font-mono-code block">{c.issuer} ({c.issueDate})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
