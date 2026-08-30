import { AccentColor } from '../types';

export interface ThemeClasses {
  name: string;
  badge: string;
  badgeBorder: string;
  gradientText: string;
  activeTab: string;
  buttonPrimary: string;
  buttonSecondary: string;
  accentBorder: string;
  glow: string;
  highlightText: string;
  ring: string;
  progressFill: string;
}

export const themes: Record<AccentColor, ThemeClasses> = {
  indigo: {
    name: 'Indigo Pulse',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
    badgeBorder: 'border-indigo-500/30',
    gradientText: 'from-indigo-400 via-indigo-200 to-white',
    activeTab: 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25',
    buttonPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 active:scale-[0.98]',
    buttonSecondary: 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10',
    accentBorder: 'hover:border-indigo-500/50',
    glow: 'bg-indigo-500/10',
    highlightText: 'text-indigo-400',
    ring: 'focus:ring-indigo-500/40',
    progressFill: 'bg-indigo-500'
  },
  emerald: {
    name: 'Emerald Precision',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    badgeBorder: 'border-emerald-500/30',
    gradientText: 'from-emerald-400 via-emerald-200 to-white',
    activeTab: 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25',
    buttonPrimary: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 active:scale-[0.98]',
    buttonSecondary: 'border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10',
    accentBorder: 'hover:border-emerald-500/50',
    glow: 'bg-emerald-500/10',
    highlightText: 'text-emerald-400',
    ring: 'focus:ring-emerald-500/40',
    progressFill: 'bg-emerald-500'
  },
  sky: {
    name: 'Sky Horizon',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/25',
    badgeBorder: 'border-sky-500/30',
    gradientText: 'from-sky-400 via-sky-200 to-white',
    activeTab: 'bg-sky-600 text-white shadow-lg shadow-sky-600/25',
    buttonPrimary: 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/20 active:scale-[0.98]',
    buttonSecondary: 'border-sky-500/30 text-sky-300 hover:bg-sky-500/10',
    accentBorder: 'hover:border-sky-500/50',
    glow: 'bg-sky-500/10',
    highlightText: 'text-sky-400',
    ring: 'focus:ring-sky-500/40',
    progressFill: 'bg-sky-500'
  },
  amber: {
    name: 'Warm Amber',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    badgeBorder: 'border-amber-500/30',
    gradientText: 'from-amber-400 via-amber-200 to-white',
    activeTab: 'bg-amber-600 text-white shadow-lg shadow-amber-600/25',
    buttonPrimary: 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/20 active:scale-[0.98]',
    buttonSecondary: 'border-amber-500/30 text-amber-300 hover:bg-amber-500/10',
    accentBorder: 'hover:border-amber-500/50',
    glow: 'bg-amber-500/10',
    highlightText: 'text-amber-400',
    ring: 'focus:ring-amber-500/40',
    progressFill: 'bg-amber-500'
  },
  rose: {
    name: 'Rose Modern',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    badgeBorder: 'border-rose-500/30',
    gradientText: 'from-rose-400 via-rose-200 to-white',
    activeTab: 'bg-rose-600 text-white shadow-lg shadow-rose-600/25',
    buttonPrimary: 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 active:scale-[0.98]',
    buttonSecondary: 'border-rose-500/30 text-rose-300 hover:bg-rose-500/10',
    accentBorder: 'hover:border-rose-500/50',
    glow: 'bg-rose-500/10',
    highlightText: 'text-rose-400',
    ring: 'focus:ring-rose-500/40',
    progressFill: 'bg-rose-500'
  },
  slate: {
    name: 'Executive Slate',
    badge: 'bg-zinc-800 text-zinc-200 border-zinc-700',
    badgeBorder: 'border-zinc-700',
    gradientText: 'from-zinc-100 via-zinc-300 to-zinc-400',
    activeTab: 'bg-zinc-200 text-zinc-950 font-semibold shadow-lg shadow-zinc-900/50',
    buttonPrimary: 'bg-zinc-100 hover:bg-white text-zinc-950 font-semibold shadow-lg shadow-zinc-900/50 active:scale-[0.98]',
    buttonSecondary: 'border-zinc-700 text-zinc-300 hover:bg-zinc-800',
    accentBorder: 'hover:border-zinc-500',
    glow: 'bg-zinc-800/40',
    highlightText: 'text-zinc-200',
    ring: 'focus:ring-zinc-400',
    progressFill: 'bg-zinc-300'
  }
};
