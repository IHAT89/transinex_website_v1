import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  Clock, 
  Utensils, 
  FileText, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Destination, CurrencyCode } from '../types/travel';
import { formatPrice } from '../utils/formatters';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  isWishlisted: boolean;
  onToggleWishlist: (destId: string) => void;
  onPlanCustomTrip: (dest: Destination) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  isOpen,
  onClose,
  currentCurrency,
  isWishlisted,
  onToggleWishlist,
  onPlanCustomTrip,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'food_visa'>('overview');

  if (!isOpen || !destination) return null;

  const images = [destination.heroImage, ...(destination.gallery || [])];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        id="modal-destination-guide"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Gallery */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-slate-950">
          <img
            src={images[activeImageIndex]}
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-slate-950/40" />

          {/* Close Button */}
          <button
            id="btn-close-dest-modal"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Wishlist Heart */}
          <button
            onClick={() => onToggleWishlist(destination.id)}
            className={`absolute top-4 right-16 z-20 w-9 h-9 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors ${
              isWishlisted
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-slate-950/80 text-white border-slate-700 hover:bg-slate-900'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>

          {/* Gallery Carousel Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700/80 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700/80 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Title & Key Highlights on Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {destination.country}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {destination.rating.toFixed(2)} ({destination.reviewsCount} reviews)
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {destination.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="btn-modal-plan-trip"
                onClick={() => {
                  onPlanCustomTrip(destination);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/30 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Open in Trip Planner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800 bg-slate-900/90 shrink-0">
          {[
            { id: 'overview', label: 'Destination Overview', icon: Compass },
            { id: 'itinerary', label: 'Curated 3-Day Itinerary', icon: Calendar },
            { id: 'food_visa', label: 'Culinary, Visa & Logistics', icon: Utensils },
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  isTabActive
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">About {destination.name}</h4>
                <p className="text-slate-200 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Best Season</span>
                  <span className="text-xs font-semibold text-white">{destination.bestMonths}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Avg. Daily Budget</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {formatPrice(destination.avgDailyBudgetUSD, currentCurrency)} / day
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Safety Score</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {destination.safetyScore}/100 (Safe)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Local Time Zone</span>
                  <span className="text-xs font-semibold text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {destination.timeZone}
                  </span>
                </div>
              </div>

              {/* Top Landmarks Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">Top Sights & Iconic Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ITINERARY PREVIEW */}
          {activeTab === 'itinerary' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Default Verified Itinerary</h4>
                  <p className="text-xs text-slate-400">Crafted by certified destination concierges.</p>
                </div>
                <button
                  onClick={() => {
                    onPlanCustomTrip(destination);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold flex items-center gap-1 hover:bg-emerald-400 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Customize in Builder</span>
                </button>
              </div>

              <div className="space-y-4">
                {destination.defaultItinerary.map((day) => (
                  <div key={day.dayNumber} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Day {day.dayNumber}: {day.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mb-3">{day.summary}</p>
                    
                    <div className="space-y-2">
                      {day.activities.map((act) => (
                        <div key={act.id} className="flex items-start gap-2.5 text-xs p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <span className="font-mono text-[10px] text-slate-400 shrink-0 mt-0.5">{act.time}</span>
                          <div className="flex-1">
                            <span className="font-semibold text-white">{act.title}</span>
                            <p className="text-[11px] text-slate-400 mt-0.5">{act.description}</p>
                            {act.tips && (
                              <p className="text-[10px] text-emerald-400/90 mt-1 italic">Tip: {act.tips}</p>
                            )}
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-300 shrink-0">
                            {act.costUSD === 0 ? 'Free' : formatPrice(act.costUSD, currentCurrency)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FOOD, VISA & LOGISTICS */}
          {activeTab === 'food_visa' && (
            <div className="space-y-6">
              {/* Culinary Staples */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                  Must-Try Regional Dishes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {destination.popularDishes.map((dish, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <p className="text-xs font-bold text-white mb-1">{dish.name}</p>
                      <p className="text-[11px] text-slate-300 leading-normal">{dish.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa & Customs */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  Passport, Visa & Entry Advisory
                </h4>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-200 leading-relaxed">
                  {destination.visaInfo}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            <span>Estimated 3-Day Exploration Cost: </span>
            <span className="font-mono font-bold text-emerald-400 text-sm">
              {formatPrice(destination.avgDailyBudgetUSD * 3, currentCurrency)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onPlanCustomTrip(destination);
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>Build Custom Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
