import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, Tag } from 'lucide-react';

export const NewsletterClub: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 rounded-3xl border border-emerald-500/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
        
        {/* Background ambient light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Terra Voyages Club</span>
          </div>

          <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Unlock 15% Off Your Next Expedition
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Subscribe to our weekly dispatch for secret flight flash fares, unlisted boutique villa availability, and bespoke cultural itineraries.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your personal email..."
                  required
                  className="w-full bg-slate-950 text-white text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Join & Get 15%</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="pt-4 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Welcome to the Inner Circle!</span>
              </div>
              <p className="text-xs text-slate-300">
                Use your exclusive instant voucher code at checkout:
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/50 font-mono font-bold text-emerald-300 text-sm">
                <Tag className="w-3.5 h-3.5" />
                <span>WANDER15</span>
              </div>
            </div>
          )}

          <p className="text-[10px] text-slate-500">
            🔒 No spam ever. One-click unsubscribe at any time.
          </p>

        </div>

      </div>
    </section>
  );
};
