import React from 'react';
import { Compass, Heart, CalendarCheck, Sparkles, Globe, Plane, ShieldCheck } from 'lucide-react';
import { CurrencyCode } from '../types/travel';
import { CURRENCIES } from '../data/travelData';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  wishlistCount: number;
  bookingsCount: number;
  onOpenWishlist: () => void;
  onOpenBookings: () => void;
  onOpenAIAdvisor: () => void;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  wishlistCount,
  bookingsCount,
  onOpenWishlist,
  onOpenBookings,
  onOpenAIAdvisor,
  activeSection = 'hero',
  onNavigate,
}) => {
  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          id="brand-logo"
          onClick={() => handleNav('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif-display text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Terra Voyages
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                PRO
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              Curated Escapes & Custom Journeys
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          {[
            { id: 'destinations', label: 'Destinations', icon: Globe },
            { id: 'packages', label: 'Vacation Packages', icon: Sparkles },
            { id: 'flights-stays', label: 'Flights & Stays', icon: Plane },
            { id: 'trip-planner', label: 'Trip Planner', icon: Compass },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* AI Advisor Button */}
          <button
            id="btn-open-ai-advisor"
            onClick={onOpenAIAdvisor}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 hover:from-emerald-500/20 hover:to-cyan-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/50 shadow-sm transition-all"
            title="Ask Smart AI Trip Advisor"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">AI Travel Guide</span>
          </button>

          {/* Currency Selector */}
          <div className="relative flex items-center">
            <select
              id="currency-selector"
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="appearance-none bg-slate-900/90 text-slate-200 text-xs font-semibold py-1.5 pl-3 pr-7 rounded-lg border border-slate-800 hover:border-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer transition-colors"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
            <span className="absolute right-2.5 pointer-events-none text-slate-400 text-[10px]">▼</span>
          </div>

          {/* Wishlist Button */}
          <button
            id="btn-wishlist-toggle"
            onClick={onOpenWishlist}
            className="relative p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 transition-colors"
            title="Saved Destinations & Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* My Bookings Button */}
          <button
            id="btn-bookings-toggle"
            onClick={onOpenBookings}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
            title="Manage Reservations & Itinerary Vouchers"
          >
            <CalendarCheck className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">My Trips</span>
            {bookingsCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                {bookingsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
