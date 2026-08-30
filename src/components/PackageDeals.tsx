import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Calendar, 
  Users, 
  Plane, 
  Building2, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { VacationPackage, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';

interface PackageDealsProps {
  packages: VacationPackage[];
  currentCurrency: CurrencyCode;
  onBookPackage: (pkg: VacationPackage) => void;
}

export const PackageDeals: React.FC<PackageDealsProps> = ({
  packages,
  currentCurrency,
  onBookPackage,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'flight_included' | 'luxury'>('all');

  const filtered = packages.filter((pkg) => {
    if (filterType === 'flight_included' && !pkg.flightIncluded) return false;
    if (filterType === 'luxury' && pkg.hotelRating < 5) return false;
    return true;
  });

  return (
    <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>All-Inclusive Handcrafted Escapes</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curated Vacation Packages & Flash Deals
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Complete journeys with roundtrip flights, 5-star boutique accommodations, VIP private transfers, and local specialists.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'flight_included', label: '✈️ Flights Included' },
            { id: 'luxury', label: '💎 5-Star Luxury Only' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterType === f.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-card-${pkg.id}`}
            className="group bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20"
          >
            {/* Image on Left / Top */}
            <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden shrink-0">
              <img
                src={pkg.heroImage}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-extrabold shadow-md">
                {pkg.badge}
              </div>

              {/* Duration pill */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-200 border border-slate-700/60">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
              </div>
            </div>

            {/* Content on Right */}
            <div className="p-6 md:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {pkg.destinationName} • {pkg.country}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating.toFixed(2)}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({pkg.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="font-serif-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {pkg.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {pkg.overview}
                </p>

                {/* Key Inclusions Chips */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-800/50 p-1.5 rounded-lg border border-slate-800">
                    <Plane className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{pkg.flightIncluded ? 'Flights Included' : 'Hotel Only'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/50 p-1.5 rounded-lg border border-slate-800">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.hotelRating}★ Stays Included</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/50 p-1.5 rounded-lg border border-slate-800 col-span-2">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="truncate">{pkg.mealPlan}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-4 space-y-1.5">
                {pkg.itineraryHighlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & Booking Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 line-through font-mono">
                      {formatPrice(pkg.originalPriceUSD, currentCurrency)}
                    </span>
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                      -{pkg.discountPercentage}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif-display text-2xl font-bold text-white font-mono">
                      {formatPrice(pkg.priceUSD, currentCurrency)}
                    </span>
                    <span className="text-[10px] text-slate-400">/ person</span>
                  </div>
                </div>

                <button
                  id={`btn-book-pkg-${pkg.id}`}
                  onClick={() => onBookPackage(pkg)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer"
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
