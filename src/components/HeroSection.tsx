import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar, 
  Download, 
  ArrowDown, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';
import { ProfileData, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface HeroSectionProps {
  profile: ProfileData;
  accent: AccentColor;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  accent,
  onOpenResumeModal
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const theme = themes[accent];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-900/15 via-zinc-900/30 to-emerald-900/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-indigo-600/5 blur-[90px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          
          {/* Main Hero Information */}
          <div className="flex-1 max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300">
                {profile.availability}
              </span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-display leading-[1.08] mb-4">
              {profile.name}
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-zinc-300 tracking-tight mb-4">
              {profile.title}
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              {profile.tagline}
            </p>

            {/* Contact Pills & Location */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <button
                type="button"
                onClick={handleCopyEmail}
                id="btn-hero-copy-email"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-200 transition-all cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className={`w-3.5 h-3.5 ${theme.highlightText}`} />
                <span>{profile.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1 animate-in zoom-in-50" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 ml-1" />
                )}
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{profile.location}</span>
              </div>

              <a
                href="https://linkedin.com/in/iantownrow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/iantownrow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-zinc-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                id="btn-hero-view-experience"
                className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${theme.buttonPrimary}`}
              >
                <span>Explore Career History</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                id="btn-hero-download-cv"
                className={`px-5 py-3 rounded-xl font-semibold text-sm border flex items-center gap-2 transition-all bg-zinc-900/80 hover:bg-zinc-800 ${theme.buttonSecondary}`}
              >
                <Download className="w-4 h-4" />
                <span>View ATS Resume / Export</span>
              </button>

              <a
                href="#contact"
                id="btn-hero-schedule"
                className="px-4 py-3 rounded-xl font-medium text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>

          {/* Right Card / Fast Brief Card */}
          <div className="w-full lg:w-96 flex flex-col gap-4">
            {/* Executive Snapshot Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
                <span className="text-xs font-mono-code text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  EXECUTIVE_OVERVIEW
                </span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  v2026.1
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-200 block">Core Architecture</span>
                    <span className="text-zinc-400">Microservices, Kafka, K8s, Distributed SQL, Multi-Cloud</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-200 block">Leadership Scope</span>
                    <span className="text-zinc-400">Led 45+ engineers, multi-squad OKRs, engineering ladders</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-200 block">Modern Web Standards</span>
                    <span className="text-zinc-400">TypeScript, React, Design Systems, Sub-100ms Web Perf</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="text-[11px] text-zinc-400">
                  Direct Inquiries:
                </div>
                <a
                  href="mailto:iantownrow@gmail.com"
                  className={`text-xs font-semibold ${theme.highlightText} hover:underline flex items-center gap-1`}
                >
                  <span>iantownrow@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Mini Quote / Recommendation Callout */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-400 italic">
              "Ian brings a rare equilibrium of deep technical mastery, architectural rigor, and servant leadership that accelerates high-stakes initiatives."
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6" id="hero-metrics-grid">
          {profile.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-colors"
            >
              <div className={`text-2xl sm:text-3xl font-bold text-white font-serif-display mb-1 ${theme.highlightText}`}>
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mb-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-500">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
