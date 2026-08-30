import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { EducationItem, CertificationItem, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface EducationSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  accent: AccentColor;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  certifications,
  accent
}) => {
  const theme = themes[accent];

  return (
    <section id="credentials" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic & Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Block */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className={`w-5 h-5 ${theme.highlightText}`} />
              Formal Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-code font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {edu.period}
                    </span>
                    <span className="text-xs text-zinc-400">{edu.location}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree} — {edu.field}
                  </h4>
                  <p className="text-sm font-semibold text-zinc-300 mb-3">
                    {edu.institution}
                    {edu.honors && (
                      <span className="ml-2 font-normal text-amber-300 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        {edu.honors}
                      </span>
                    )}
                  </p>

                  <ul className="space-y-2 mt-4 pt-4 border-t border-zinc-800/80">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className={`w-5 h-5 ${theme.highlightText}`} />
              Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-mono-code text-zinc-400 mb-1 flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <span>{cert.issueDate}</span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-100 mb-3 leading-snug">
                      {cert.name}
                    </h4>

                    {cert.credentialId && (
                      <p className="text-[11px] font-mono-code text-zinc-500 mb-3">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800/60">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
