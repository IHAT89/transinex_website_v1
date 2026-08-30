import React, { useState } from 'react';
import { 
  Plane, 
  Building, 
  Compass, 
  Filter, 
  Star, 
  Clock, 
  ArrowRight, 
  Check, 
  Luggage, 
  Wifi, 
  Coffee, 
  Waves, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { FlightOption, StayOption, ExperienceOption, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';

interface FlightsStaysFinderProps {
  flights: FlightOption[];
  stays: StayOption[];
  experiences: ExperienceOption[];
  currentCurrency: CurrencyCode;
  onBookFlight: (flight: FlightOption) => void;
  onBookStay: (stay: StayOption) => void;
  onBookExperience: (exp: ExperienceOption) => void;
}

export const FlightsStaysFinder: React.FC<FlightsStaysFinderProps> = ({
  flights,
  stays,
  experiences,
  currentCurrency,
  onBookFlight,
  onBookStay,
  onBookExperience,
}) => {
  const [activeTab, setActiveTab] = useState<'flights' | 'stays' | 'experiences'>('flights');
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [nonstopOnly, setNonstopOnly] = useState<boolean>(false);
  const [breakfastOnly, setBreakfastOnly] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<'best' | 'price_low' | 'price_high'>('best');

  return (
    <section id="flights-stays" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Plane className="w-3.5 h-3.5" />
            <span>Real-Time Travel Inventory</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Find Flights, Stays & Activities
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Live availability from verified international carriers and world-renowned boutique hotels with transparent baggage and cancellation policies.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('flights')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'flights'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Flights</span>
          </button>

          <button
            onClick={() => setActiveTab('stays')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'stays'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Hotels & Villas</span>
          </button>

          <button
            onClick={() => setActiveTab('experiences')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'experiences'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Experiences</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 mb-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Quick Filter Checkboxes */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
          {activeTab === 'flights' && (
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={nonstopOnly}
                onChange={(e) => setNonstopOnly(e.target.checked)}
                className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500"
              />
              <span>Non-stop flights only</span>
            </label>
          )}

          {activeTab === 'stays' && (
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={breakfastOnly}
                onChange={(e) => setBreakfastOnly(e.target.checked)}
                className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500"
              />
              <span>Breakfast included</span>
            </label>
          )}

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Budget Cap:</span>
            <span className="font-mono text-emerald-400 font-bold">{formatPrice(maxPrice, currentCurrency)}</span>
            <input
              type="range"
              min="300"
              max="1500"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-28 sm:w-36 accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Sort:</span>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value as any)}
            className="bg-slate-950 text-slate-200 text-xs py-1.5 px-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="best">Recommended</option>
            <option value="price_low">Lowest Price</option>
            <option value="price_high">Highest Price</option>
          </select>
        </div>
      </div>

      {/* TAB 1: FLIGHTS */}
      {activeTab === 'flights' && (
        <div className="space-y-4">
          {flights
            .filter((f) => (!nonstopOnly || f.stops === 0) && f.priceUSD <= maxPrice)
            .sort((a, b) => {
              if (selectedSort === 'price_low') return a.priceUSD - b.priceUSD;
              if (selectedSort === 'price_high') return b.priceUSD - a.priceUSD;
              return 0;
            })
            .map((flight) => (
              <div
                key={flight.id}
                id={`flight-card-${flight.id}`}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 p-5 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Airline & Route */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center font-bold text-xs text-emerald-400 shrink-0 font-mono">
                    {flight.airlineCode}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{flight.airline}</span>
                      <span className="text-xs text-slate-400 font-mono">{flight.flightNumber}</span>
                    </div>
                    <p className="text-xs text-slate-400">{flight.aircraft} • {flight.cabinClass}</p>
                  </div>
                </div>

                {/* Flight Times & Duration Graphic */}
                <div className="flex items-center gap-6 text-center w-full md:w-auto justify-between md:justify-center">
                  <div>
                    <span className="font-mono text-lg font-bold text-white block">{flight.departureTime}</span>
                    <span className="text-xs font-semibold text-slate-400">{flight.fromCode}</span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[80px]">{flight.fromCity}</span>
                  </div>

                  <div className="flex flex-col items-center px-4">
                    <span className="text-[10px] text-slate-400 font-medium">{flight.duration}</span>
                    <div className="w-24 sm:w-32 h-0.5 bg-slate-700 relative my-1.5">
                      <Plane className="w-3 h-3 text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <span className={`text-[10px] font-bold ${flight.stops === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {flight.stops === 0 ? 'Nonstop' : flight.stopoverCity || '1 Stop'}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-lg font-bold text-white block">{flight.arrivalTime}</span>
                    <span className="text-xs font-semibold text-slate-400">{flight.toCode}</span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[80px]">{flight.toCity}</span>
                  </div>
                </div>

                {/* Baggage & Booking Actions */}
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <div className="hidden lg:flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Luggage className="w-3 h-3 text-slate-400" />
                      {flight.baggageIncluded}
                    </span>
                    <span className="text-[10px] text-rose-400 font-medium mt-0.5">
                      Only {flight.seatsLeft} seats left
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase">Price per adult</span>
                    <span className="font-serif-display text-xl font-bold text-white font-mono">
                      {formatPrice(flight.priceUSD, currentCurrency)}
                    </span>
                  </div>

                  <button
                    id={`btn-book-flight-${flight.id}`}
                    onClick={() => onBookFlight(flight)}
                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <span>Select</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
        </div>
      )}

      {/* TAB 2: STAYS & HOTELS */}
      {activeTab === 'stays' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stays
            .filter((s) => (!breakfastOnly || s.breakfastIncluded) && s.pricePerNightUSD <= maxPrice)
            .sort((a, b) => {
              if (selectedSort === 'price_low') return a.pricePerNightUSD - b.pricePerNightUSD;
              if (selectedSort === 'price_high') return b.pricePerNightUSD - a.pricePerNightUSD;
              return 0;
            })
            .map((stay) => (
              <div
                key={stay.id}
                id={`stay-card-${stay.id}`}
                className="group bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={stay.heroImage}
                      alt={stay.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {stay.badge && (
                      <div className="absolute top-3 left-3 bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm">
                        {stay.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-lg text-xs font-bold text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{stay.guestRating}</span>
                      <span className="text-[10px] text-slate-400">({stay.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {stay.location}
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                      {stay.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{stay.roomType}</p>

                    {/* Amenities */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stay.amenities.slice(0, 3).map((a, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Starting from</span>
                    <span className="font-mono text-lg font-bold text-white">
                      {formatPrice(stay.pricePerNightUSD, currentCurrency)}
                      <span className="text-[10px] text-slate-400 font-normal"> / night</span>
                    </span>
                  </div>

                  <button
                    id={`btn-book-stay-${stay.id}`}
                    onClick={() => onBookStay(stay)}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
        </div>
      )}

      {/* TAB 3: EXPERIENCES */}
      {activeTab === 'experiences' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={`exp-card-${exp.id}`}
              className="group bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={exp.heroImage}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-cyan-400">
                    {exp.category}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-400 font-semibold">{exp.destinationName}</span>
                    <span className="text-amber-300 font-bold flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {exp.rating}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                    {exp.overview}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-3">
                <div>
                  <span className="font-mono text-sm font-bold text-white">
                    {formatPrice(exp.priceUSD, currentCurrency)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">{exp.durationHours}h tour</span>
                </div>

                <button
                  id={`btn-book-exp-${exp.id}`}
                  onClick={() => onBookExperience(exp)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Book Activity
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
};
