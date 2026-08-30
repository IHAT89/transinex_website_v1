import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Star, 
  Sparkles, 
  Heart, 
  Compass, 
  Calendar, 
  CloudSun, 
  DollarSign, 
  Search,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Destination, TravelRegion, TravelStyle, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';

interface DestinationExplorerProps {
  destinations: Destination[];
  currentCurrency: CurrencyCode;
  wishlistIds: string[];
  onToggleWishlist: (destinationId: string) => void;
  onOpenDestinationDetail: (destination: Destination) => void;
  onPlanTripForDestination: (destination: Destination) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  destinations,
  currentCurrency,
  wishlistIds,
  onToggleWishlist,
  onOpenDestinationDetail,
  onPlanTripForDestination,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<TravelRegion>('all');
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'budget_low' | 'budget_high' | 'name'>('rating');

  const regions: { id: TravelRegion; label: string }[] = [
    { id: 'all', label: 'All Continents' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia-Pacific' },
    { id: 'americas', label: 'Americas' },
    { id: 'africa', label: 'Africa & M.E.' },
    { id: 'islands', label: 'Islands & Coast' },
  ];

  const styles: { id: TravelStyle; label: string }[] = [
    { id: 'all', label: 'All Vibes' },
    { id: 'adventure', label: '🏔️ Adventure' },
    { id: 'luxury', label: '✨ Luxury' },
    { id: 'culture', label: '🏛️ Heritage' },
    { id: 'beaches', label: '🏖️ Coastal' },
    { id: 'culinary', label: '🍷 Culinary' },
    { id: 'nature', label: '🌲 Nature' },
  ];

  const filtered = destinations.filter((dest) => {
    // Region filter
    if (selectedRegion !== 'all' && dest.region !== selectedRegion) return false;
    
    // Style filter
    if (selectedStyle !== 'all' && !dest.styles.includes(selectedStyle)) return false;
    
    // Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = dest.name.toLowerCase().includes(q);
      const matchCountry = dest.country.toLowerCase().includes(q);
      const matchHighlights = dest.highlights.some(h => h.toLowerCase().includes(q));
      if (!matchName && !matchCountry && !matchHighlights) return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'budget_low') return a.avgDailyBudgetUSD - b.avgDailyBudgetUSD;
    if (sortBy === 'budget_high') return b.avgDailyBudgetUSD - a.avgDailyBudgetUSD;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section id="destinations" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>World-Class Exploration</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curated Global Destinations
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Handpicked sanctuaries, ancient culture hubs, and wild landscapes verified by our master itinerary planners.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="input-filter-destinations"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city, landmark..."
              className="bg-slate-900 text-white text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-44 sm:w-56"
            />
          </div>

          {/* Sort Selector */}
          <select
            id="select-sort-destinations"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-900 text-slate-200 text-xs py-2 px-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="rating">Sort: Top Rated ⭐</option>
            <option value="budget_low">Sort: Lowest Daily Budget</option>
            <option value="budget_high">Sort: Luxury & Premium</option>
            <option value="name">Sort: Alphabetical (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Region & Travel Style Filter Tabs */}
      <div className="space-y-3 mb-8">
        
        {/* Region Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Region:</span>
          {regions.map((r) => (
            <button
              key={r.id}
              id={`filter-region-${r.id}`}
              onClick={() => setSelectedRegion(r.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedRegion === r.id
                  ? 'bg-slate-100 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Style / Vibe Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Vibe:</span>
          {styles.map((s) => (
            <button
              key={s.id}
              id={`filter-style-${s.id}`}
              onClick={() => setSelectedStyle(s.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedStyle === s.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
          <Globe className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white">No destinations found</h3>
          <p className="text-xs text-slate-400 mt-1">Try relaxing your search query or selecting a different continent.</p>
          <button
            onClick={() => { setSelectedRegion('all'); setSelectedStyle('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => {
            const isWishlisted = wishlistIds.includes(dest.id);
            return (
              <div
                key={dest.id}
                id={`card-dest-${dest.id}`}
                className="group relative bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Hero Image Container with Overlay Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 border border-slate-700/60 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{dest.rating.toFixed(2)}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({dest.reviewsCount})</span>
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    id={`btn-wishlist-${dest.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(dest.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                      isWishlisted
                        ? 'bg-rose-500/90 text-white border-rose-400 shadow-md shadow-rose-500/30'
                        : 'bg-slate-950/70 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-900'
                    }`}
                    title={isWishlisted ? 'Remove from saved' : 'Save to wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                  </button>

                  {/* Weather & Country Overlay on Bottom of Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 font-semibold bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{dest.country}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-300 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <CloudSun className="w-3 h-3 text-cyan-400" />
                      <span>{dest.weatherTempC}°C</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {dest.tagline}
                    </p>

                    {/* Highlights Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {dest.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta & Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Avg. Daily Budget</span>
                        <span className="font-mono text-sm font-bold text-emerald-400">
                          {formatPrice(dest.avgDailyBudgetUSD, currentCurrency)}
                          <span className="text-[10px] text-slate-400 font-normal"> / day</span>
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Best Season</span>
                        <span className="text-xs font-medium text-slate-300 truncate max-w-[140px] block">
                          {dest.bestMonths.split('&')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`btn-guide-${dest.id}`}
                        onClick={() => onOpenDestinationDetail(dest)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Travel Guide</span>
                      </button>

                      <button
                        id={`btn-plan-${dest.id}`}
                        onClick={() => onPlanTripForDestination(dest)}
                        className="w-full py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>Build Trip</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
