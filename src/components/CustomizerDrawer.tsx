import React from 'react';
import { X, Palette, Check, Sparkles, Sliders } from 'lucide-react';
import { AccentColor } from '../types';
import { themes } from '../utils/theme';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  accent,
  setAccent
}) => {
  if (!isOpen) return null;

  const colorOptions: { id: AccentColor; label: string; colorClass: string }[] = [
    { id: 'indigo', label: 'Indigo Pulse', colorClass: 'bg-indigo-500' },
    { id: 'emerald', label: 'Emerald Precision', colorClass: 'bg-emerald-500' },
    { id: 'sky', label: 'Sky Horizon', colorClass: 'bg-sky-500' },
    { id: 'amber', label: 'Warm Amber', colorClass: 'bg-amber-500' },
    { id: 'rose', label: 'Rose Modern', colorClass: 'bg-rose-500' },
    { id: 'slate', label: 'Executive Slate', colorClass: 'bg-zinc-300' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in-50">
      <div className="w-full max-w-sm bg-zinc-900 border-l border-zinc-800 h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-zinc-300" />
              <span className="text-sm font-bold text-white">Visual Customizer</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Accent Color Palette */}
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Accent Theme Palette
              </h4>
              <p className="text-xs text-zinc-500">
                Choose the aesthetic mood and highlight tones.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {colorOptions.map((opt) => {
                const isSelected = accent === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAccent(opt.id)}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      isSelected
                        ? 'bg-zinc-800 border-zinc-600 text-white shadow-lg'
                        : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${opt.colorClass} shrink-0`} />
                    <span className="text-xs font-semibold truncate">{opt.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-zinc-200 ml-auto" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* View Modes Info */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
            <span className="text-xs font-mono-code text-zinc-400 block">AVAILABLE_VIEWS</span>
            <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
              <li><strong className="text-zinc-200">Portfolio</strong>: Rich visual case studies & timeline</li>
              <li><strong className="text-zinc-200">Resume</strong>: Dense executive CV layout</li>
              <li><strong className="text-zinc-200">Matrix</strong>: Deep technical competencies grid</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
          >
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
};
