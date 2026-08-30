import React from 'react';
import { ShieldCheck, Headphones, Leaf, RotateCcw } from 'lucide-react';

export const TravelPerksBanner: React.FC = () => {
  const perks = [
    {
      icon: ShieldCheck,
      title: 'Best Price & Quality Guarantee',
      desc: 'Transparent pricing with verified luxury hotels, direct airlines & certified guides.',
    },
    {
      icon: RotateCcw,
      title: '24-Hour Free Cancellation',
      desc: 'Flexibility on all custom itineraries and reservations with zero cancellation fees.',
    },
    {
      icon: Headphones,
      title: '24/7 Global Concierge Support',
      desc: 'Instant WhatsApp & phone assistance anywhere in the world during your expedition.',
    },
    {
      icon: Leaf,
      title: '100% Carbon-Neutral Travel',
      desc: 'Every flight and hotel booked automatically funds verified reforestation projects.',
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-display text-sm font-bold text-white mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
