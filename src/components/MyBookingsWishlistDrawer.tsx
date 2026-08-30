import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  CalendarCheck, 
  MapPin, 
  Trash2, 
  ArrowRight, 
  Printer, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  Ticket
} from 'lucide-react';
import { Booking, Destination, VacationPackage, CurrencyCode } from '../types/travel';
import { formatPrice, formatDate } from '../utils/formatters';

interface MyBookingsWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'bookings' | 'wishlist';
  onTabChange: (tab: 'bookings' | 'wishlist') => void;
  bookings: Booking[];
  wishlistDestinations: Destination[];
  onRemoveFromWishlist: (destId: string) => void;
  onPlanTripForDestination: (dest: Destination) => void;
  onCancelBooking: (bookingId: string) => void;
  currentCurrency: CurrencyCode;
}

export const MyBookingsWishlistDrawer: React.FC<MyBookingsWishlistDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
  bookings,
  wishlistDestinations,
  onRemoveFromWishlist,
  onPlanTripForDestination,
  onCancelBooking,
  currentCurrency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Drawer Panel */}
      <div 
        id="drawer-bookings-wishlist"
        className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/90">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onTabChange('bookings')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'bookings'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>My Trips ({bookings.length})</span>
            </button>

            <button
              onClick={() => onTabChange('wishlist')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'wishlist'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist ({wishlistDestinations.length})</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB: MY BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="space-y-4">
              {bookings.length === 0 ? (
                <div className="text-center py-16 text-slate-500 space-y-3">
                  <Ticket className="w-12 h-12 mx-auto text-slate-600 stroke-[1.5]" />
                  <h4 className="text-sm font-bold text-white">No active reservations yet</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Browse our curated vacation packages or build a custom itinerary to confirm your next adventure.
                  </p>
                </div>
              ) : (
                bookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                          Ref: {b.referenceNumber}
                        </span>
                        <h4 className="font-serif-display text-base font-bold text-white mt-0.5">
                          {b.itemTitle}
                        </h4>
                        <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          {b.destination}
                        </span>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 uppercase">
                        {b.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-800/80 text-slate-300">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Travel Date</span>
                        <span className="font-semibold text-white">{formatDate(b.startDate)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Total Paid</span>
                        <span className="font-mono font-bold text-emerald-400">
                          {formatPrice(b.totalAmountUSD, currentCurrency)}
                        </span>
                      </div>
                    </div>

                    {b.addOns && b.addOns.length > 0 && (
                      <div className="text-[11px] text-slate-400 space-y-1">
                        <span className="font-semibold text-slate-300">Included Protection & Add-ons:</span>
                        {b.addOns.map((addon, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-[10px] text-slate-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="truncate">{addon}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => window.print()}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Voucher</span>
                      </button>

                      <button
                        onClick={() => onCancelBooking(b.id)}
                        className="text-xs text-rose-400 hover:text-rose-300 underline"
                      >
                        Cancel Booking
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              {wishlistDestinations.length === 0 ? (
                <div className="text-center py-16 text-slate-500 space-y-3">
                  <Heart className="w-12 h-12 mx-auto text-slate-600 stroke-[1.5]" />
                  <h4 className="text-sm font-bold text-white">Your wishlist is empty</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Click the heart icon on any destination to save it for your next trip planning session.
                  </p>
                </div>
              ) : (
                wishlistDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4 group"
                  >
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-display text-sm font-bold text-white truncate">
                        {dest.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{dest.country} • ⭐ {dest.rating}</p>
                      <p className="font-mono text-xs font-bold text-emerald-400 mt-1">
                        {formatPrice(dest.avgDailyBudgetUSD, currentCurrency)} / day
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => {
                          onPlanTripForDestination(dest);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors"
                      >
                        Plan Trip
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(dest.id)}
                        className="p-1 text-slate-500 hover:text-rose-400 text-center"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5 mx-auto" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
