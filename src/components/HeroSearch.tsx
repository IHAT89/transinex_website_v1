import React, { useState } from 'react';
import { 
  Plane, 
  Building, 
  Package, 
  Compass, 
  Car, 
  Search, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRightLeft, 
  MapPin,
  CheckCircle,
  SlidersHorizontal,
  Flame,
  Bot
} from 'lucide-react';
import { SearchCategory, SearchState, Destination, CurrencyCode } from '../types/travel';
import { POPULAR_ORIGINS, DESTINATIONS } from '../data/travelData';

interface HeroSearchProps {
  searchState: SearchState;
  onSearchChange: (updates: Partial<SearchState>) => void;
  onExecuteSearch?: () => void;
  onSelectDestinationDirectly?: (dest: Destination) => void;
  currentCurrency?: CurrencyCode;
  onOpenAIAdvisor?: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchState,
  onSearchChange,
  onExecuteSearch,
  onSelectDestinationDirectly,
  currentCurrency,
  onOpenAIAdvisor,
}) => {
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);

  const categories: { id: SearchCategory; label: string; icon: React.ElementType }[] = [
    { id: 'packages', label: 'Curated Packages', icon: Package },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'stays', label: 'Luxury Stays', icon: Building },
    { id: 'experiences', label: 'Experiences', icon: Compass },
    { id: 'cars', label: 'Scenic Drives', icon: Car },
  ];

  const handleSurpriseMe = () => {
    const randomDest = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    onSearchChange({
      destination: randomDest.name,
      category: 'packages'
    });
    if (onSelectDestinationDirectly) {
      onSelectDestinationDirectly(randomDest);
    }
  };

  const handleRunSearch = () => {
    if (onExecuteSearch) {
      onExecuteSearch();
    } else {
      const targetId = 
        searchState.category === 'packages' 
          ? 'packages' 
          : (searchState.category === 'stays' || searchState.category === 'flights') 
            ? 'flights-stays' 
            : 'destinations';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const adults = searchState?.travelers?.adults ?? 2;
  const children = searchState?.travelers?.children ?? 0;
  const infants = searchState?.travelers?.infants ?? 0;
  const totalTravelers = adults + children + infants;
  const cabinLabel = (searchState?.cabinClass || 'economy').replace(/_/g, ' ');

  return (
    <section className="relative min-h-[620px] flex flex-col justify-center items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Photography with Sophisticated Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
          alt="World Travel Landscape"
          className="w-full h-full object-cover object-center brightness-[0.38] scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Headline & Subhead */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-8 sm:mb-10">
        
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
          <Flame className="w-3.5 h-3.5 text-emerald-400" />
          <span>Transinex Pte Ltd • Singapore’s Premier Travel & Education Specialist Since 1972</span>
        </div>

        <h1 className="font-serif-display text-3.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-none">
          Inspiring Global Journeys, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent italic">
            Education & Musical Excellence
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From international youth choral festivals and school STEM immersions to bespoke family holidays and flight reservations, craft unforgettable journeys with Transinex.
        </p>
      </div>

      {/* Search Console Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl p-4 sm:p-6 transition-all">
        
        {/* Search Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 pb-4 mb-5 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isSelected = searchState.category === tab.id;
            return (
              <button
                key={tab.id}
                id={`search-tab-${tab.id}`}
                onClick={() => onSearchChange({ category: tab.id })}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}

          <div className="ml-auto hidden md:flex items-center gap-2">
            <button
              id="btn-surprise-me"
              onClick={handleSurpriseMe}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Surprise Me!</span>
            </button>
          </div>
        </div>

        {/* Dynamic Search Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Origin / Departure Input */}
          <div className="relative md:col-span-3">
            <label className="block text-[11px] uppercase font-semibold tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {searchState.category === 'stays' ? 'Location' : 'Departure From'}
            </label>
            <div className="relative">
              <input
                id="search-input-origin"
                type="text"
                value={searchState.origin}
                onChange={(e) => {
                  onSearchChange({ origin: e.target.value });
                  setShowOriginSuggestions(true);
                }}
                onFocus={() => setShowOriginSuggestions(true)}
                placeholder={searchState.category === 'stays' ? 'Nearby or City' : 'Origin (e.g. New York)'}
                className="w-full bg-slate-950/80 text-white text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-slate-500 transition-colors"
              />
              
              {/* Origin Autocomplete Popover */}
              {showOriginSuggestions && (
                <div 
                  className="absolute left-0 top-full mt-1.5 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-2 max-h-60 overflow-y-auto"
                  onMouseLeave={() => setShowOriginSuggestions(false)}
                >
                  <p className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">Popular Departure Hubs</p>
                  {POPULAR_ORIGINS.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        onSearchChange({ origin: `${item.city} (${item.code})` });
                        setShowOriginSuggestions(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-800 flex items-center justify-between text-xs text-slate-200 transition-colors"
                    >
                      <span>{item.city}, {item.country}</span>
                      <span className="font-mono text-emerald-400 font-bold">{item.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Destination Input */}
          <div className="relative md:col-span-3">
            <label className="block text-[11px] uppercase font-semibold tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <Compass className="w-3 h-3 text-cyan-400" />
              Destination
            </label>
            <div className="relative">
              <input
                id="search-input-destination"
                type="text"
                value={searchState.destination}
                onChange={(e) => {
                  onSearchChange({ destination: e.target.value });
                  setShowDestSuggestions(true);
                }}
                onFocus={() => setShowDestSuggestions(true)}
                placeholder="Where to? (e.g. Kyoto, Amalfi)"
                className="w-full bg-slate-950/80 text-white text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-slate-500 transition-colors"
              />

              {/* Destination Autocomplete */}
              {showDestSuggestions && (
                <div 
                  className="absolute left-0 top-full mt-1.5 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-2 max-h-64 overflow-y-auto"
                  onMouseLeave={() => setShowDestSuggestions(false)}
                >
                  <p className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">Featured World Destinations</p>
                  {DESTINATIONS.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => {
                        onSearchChange({ destination: dest.name });
                        setShowDestSuggestions(false);
                        onSelectDestinationDirectly(dest);
                      }}
                      className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-800 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
                    >
                      <img 
                        src={dest.heroImage} 
                        alt={dest.name}
                        className="w-8 h-8 rounded-lg object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">{dest.name}</span>
                        <span className="text-[10px] text-slate-400">{dest.country} • ⭐ {dest.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Dates Input */}
          <div className="relative md:col-span-3">
            <label className="block text-[11px] uppercase font-semibold tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-emerald-400" />
              Travel Dates
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <input
                id="search-input-depart"
                type="date"
                value={searchState.departDate}
                onChange={(e) => onSearchChange({ departDate: e.target.value })}
                className="bg-slate-950/80 text-white text-xs font-medium px-2.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
              />
              <input
                id="search-input-return"
                type="date"
                value={searchState.returnDate}
                onChange={(e) => onSearchChange({ returnDate: e.target.value })}
                className="bg-slate-950/80 text-white text-xs font-medium px-2.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Travelers & Class Selector */}
          <div className="relative md:col-span-3">
            <label className="block text-[11px] uppercase font-semibold tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <Users className="w-3 h-3 text-emerald-400" />
              Travelers & Class
            </label>
            <button
              id="btn-travelers-selector"
              type="button"
              onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
              className="w-full bg-slate-950/80 text-white text-xs font-medium px-3 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 flex items-center justify-between text-left transition-colors"
            >
              <span className="truncate">
                {totalTravelers} {totalTravelers === 1 ? 'Guest' : 'Guests'}, {cabinLabel}
              </span>
              <span className="text-slate-400 text-[10px]">▼</span>
            </button>

            {/* Travelers Dropdown Popover */}
            {showTravelersDropdown && (
              <div 
                className="absolute right-0 top-full mt-1.5 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-4"
                onMouseLeave={() => setShowTravelersDropdown(false)}
              >
                <div className="space-y-3 pb-3 border-b border-slate-800">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Adults</p>
                      <p className="text-[10px] text-slate-400">Age 18+</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSearchChange({
                          travelers: { ...(searchState?.travelers || { adults: 2, children: 0, infants: 0 }), adults: Math.max(1, adults - 1) }
                        })}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => onSearchChange({
                          travelers: { ...(searchState?.travelers || { adults: 2, children: 0, infants: 0 }), adults: adults + 1 }
                        })}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Children</p>
                      <p className="text-[10px] text-slate-400">Age 2-17</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSearchChange({
                          travelers: { ...(searchState?.travelers || { adults: 2, children: 0, infants: 0 }), children: Math.max(0, children - 1) }
                        })}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => onSearchChange({
                          travelers: { ...(searchState?.travelers || { adults: 2, children: 0, infants: 0 }), children: children + 1 }
                        })}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cabin Class */}
                <div className="pt-3">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Cabin / Travel Class</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'economy', label: 'Economy' },
                      { id: 'premium_economy', label: 'Premium Econ' },
                      { id: 'business', label: 'Business' },
                      { id: 'first', label: 'First Class' },
                    ].map((cls) => (
                      <button
                        key={cls.id}
                        type="button"
                        onClick={() => onSearchChange({ cabinClass: cls.id as any })}
                        className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          (searchState?.cabinClass || 'economy') === cls.id
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                            : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {cls.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Filter Tags & Execute Button */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer hover:text-white select-none">
              <input
                id="checkbox-direct-only"
                type="checkbox"
                checked={!!searchState?.directOnly}
                onChange={(e) => onSearchChange({ directOnly: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
              />
              <span>Direct routes only</span>
            </label>

            <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer hover:text-white select-none">
              <input
                id="checkbox-free-cancellation"
                type="checkbox"
                checked={!!searchState?.freeCancellationOnly}
                onChange={(e) => onSearchChange({ freeCancellationOnly: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
              />
              <span>Free cancellation</span>
            </label>

            <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer hover:text-white select-none">
              <input
                id="checkbox-all-inclusive"
                type="checkbox"
                checked={!!searchState?.allInclusiveOnly}
                onChange={(e) => onSearchChange({ allInclusiveOnly: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
              />
              <span>All-inclusive deals</span>
            </label>
          </div>

          {/* Search Trigger Button */}
          <button
            id="btn-execute-search"
            onClick={handleRunSearch}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer"
          >
            <Search className="w-4 h-4 text-slate-950" />
            <span>Search Available Journeys</span>
          </button>
        </div>

        {/* Trending Short Picks */}
        <div className="mt-3.5 pt-3 border-t border-slate-800/50 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400 no-scrollbar">
          <span className="font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Trending:</span>
          {DESTINATIONS.slice(0, 5).map((d) => (
            <button
              key={d.id}
              onClick={() => {
                onSearchChange({ destination: d.name });
                onSelectDestinationDirectly(d);
              }}
              className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 whitespace-nowrap transition-colors"
            >
              {d.name} ({d.country})
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
