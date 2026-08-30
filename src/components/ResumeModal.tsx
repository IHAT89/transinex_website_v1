import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  CheckCircle2 
} from 'lucide-react';
import { ProfileData, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  accent: AccentColor;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  accent
}) => {
  const [copied, setCopied] = React.useState(false);
  const theme = themes[accent];

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = () => {
    const textContent = `
${profile.name}
${profile.title}
Email: ${profile.email} | Location: ${profile.location}

EXECUTIVE SUMMARY
${profile.executiveSummary}

CORE COMPETENCIES
${profile.skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

EXPERIENCE
${profile.experiences.map(e => `
${e.role} | ${e.company} (${e.period})
Location: ${e.location}
${e.summary}
Key Achievements:
${e.keyAchievements.map(a => ` - ${a}`).join('\n')}
Tech Stack: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION
${profile.education.map(ed => `${ed.degree} in ${ed.field} - ${ed.institution} (${ed.period})`).join('\n')}

CERTIFICATIONS
${profile.certifications.map(c => `${c.name} - ${c.issuer} (${c.issueDate})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Ian_Townrow_Resume.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:px-6 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Executive ATS Resume Format</span>
            <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              Print & ATS Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              id="btn-modal-print-resume"
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Print standard Letter/A4 resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopyTextResume}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Copy plain-text ATS format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadJSON}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Download structured JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">JSON</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-zinc-950 text-zinc-200 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto space-y-8 print:space-y-6">
            
            {/* Header */}
            <div className="border-b border-zinc-800 print:border-black pb-6">
              <h1 className="text-3xl font-bold text-white print:text-black font-serif-display mb-1">
                {profile.name}
              </h1>
              <p className="text-base font-semibold text-zinc-300 print:text-zinc-800 mb-3">
                {profile.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 print:text-zinc-700 font-mono-code">
                <span>{profile.email}</span>
                <span>•</span>
                <span>{profile.location}</span>
                <span>•</span>
                <span>linkedin.com/in/iantownrow</span>
                <span>•</span>
                <span>github.com/iantownrow</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1 mb-2.5">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
                {profile.executiveSummary}
              </p>
            </div>

            {/* Core Competencies Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1 mb-2.5">
                Core Competencies & Technology Matrix
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {profile.skillCategories.map((cat) => (
                  <div key={cat.id}>
                    <span className="font-semibold text-zinc-200 print:text-black block mb-0.5">
                      {cat.title}:
                    </span>
                    <span className="text-zinc-400 print:text-zinc-700">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {profile.experiences.map((exp) => (
                  <div key={exp.id} className="print-break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm font-bold text-white print:text-black">
                        {exp.role} — {exp.company}
                      </span>
                      <span className="text-xs font-mono-code text-zinc-400 print:text-zinc-600">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 print:text-zinc-800 mb-2 leading-relaxed italic">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1 text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside">
                      {exp.keyAchievements.map((ach, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span className="text-zinc-200 print:text-black font-medium">{ach}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-2 text-[11px] font-mono-code text-zinc-400 print:text-zinc-600">
                      <strong>Tech Stack:</strong> {exp.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print-break-inside-avoid">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1 mb-2.5">
                  Education
                </h2>
                {profile.education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="font-bold text-zinc-200 print:text-black">
                      {edu.degree} in {edu.field}
                    </div>
                    <div className="text-zinc-400 print:text-zinc-700">
                      {edu.institution} ({edu.period})
                    </div>
                    {edu.honors && (
                      <div className="text-amber-400 print:text-zinc-800 mt-0.5">
                        {edu.honors}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1 mb-2.5">
                  Certifications
                </h2>
                <div className="space-y-1.5 text-xs text-zinc-300 print:text-zinc-800">
                  {profile.certifications.map((cert) => (
                    <div key={cert.id}>
                      <span className="font-medium text-zinc-200 print:text-black">
                        {cert.name}
                      </span>{' '}
                      <span className="text-zinc-400 print:text-zinc-600">
                        ({cert.issuer})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
