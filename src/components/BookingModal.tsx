import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  CreditCard, 
  ShieldCheck, 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  Lock, 
  ArrowRight, 
  Printer, 
  Tag,
  Check
} from 'lucide-react';
import { Booking, CurrencyCode, AddOnOption } from '../types/travel';
import { formatPrice, generateBookingRef, formatDate } from '../utils/formatters';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingItem: {
    type: 'package' | 'flight' | 'stay' | 'custom_trip';
    id: string;
    title: string;
    destination: string;
    priceUSD: number;
    dates?: string;
    details?: string;
    travelersCount?: number;
  } | null;
  currentCurrency: CurrencyCode;
  onBookingConfirmed: (booking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingItem,
  currentCurrency,
  onBookingConfirmed,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [fullName, setFullName] = useState('Ian Townrow');
  const [email, setEmail] = useState('iantownrow@gmail.com');
  const [phone, setPhone] = useState('+1 (555) 382-9104');
  const [specialRequests, setSpecialRequests] = useState('');
  const [travelDate, setTravelDate] = useState('2026-10-15');
  const [adults, setAdults] = useState(bookingItem?.travelersCount || 2);

  // Add-ons state
  const [addOns, setAddOns] = useState<AddOnOption[]>([
    {
      id: 'insurance',
      name: '🛡️ Comprehensive Travel & Medical Insurance',
      description: '100% trip cancellation refund & $500,000 emergency medical coverage',
      priceUSD: 45,
      selected: true,
    },
    {
      id: 'transfer',
      name: '🚕 Private VIP Mercedes Chauffeur Airport Transfer',
      description: 'Meet & greet at arrival hall with luxury door-to-door transit',
      priceUSD: 75,
      selected: false,
    },
    {
      id: 'esim',
      name: '📱 Unlimited High-Speed International eSIM Data Pack',
      description: '5G unlimited connectivity across 140+ countries',
      priceUSD: 25,
      selected: true,
    },
  ]);

  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'reserve_now'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  if (!isOpen || !bookingItem) return null;

  const toggleAddOn = (id: string) => {
    setAddOns(prev => prev.map(a => a.id === id ? { ...a, selected: !a.selected } : a));
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'WANDER15' || code === 'EARLYBIRD' || code === 'TERRA15') {
      setAppliedDiscount(0.15);
      setPromoMessage('✨ 15% Exclusive Traveler Discount Applied!');
    } else if (code === 'EXPLORE20') {
      setAppliedDiscount(0.20);
      setPromoMessage('✨ 20% Flash Promo Applied!');
    } else {
      setPromoMessage('❌ Invalid promo code. Try "WANDER15"');
    }
  };

  // Cost calculation
  const baseItemPrice = bookingItem.priceUSD * adults;
  const addOnsTotal = addOns.filter(a => a.selected).reduce((sum, a) => sum + (a.priceUSD * adults), 0);
  const subtotalUSD = baseItemPrice + addOnsTotal;
  const discountAmountUSD = subtotalUSD * appliedDiscount;
  const totalAmountUSD = subtotalUSD - discountAmountUSD;

  const handleCompleteBooking = () => {
    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      referenceNumber: generateBookingRef(),
      type: bookingItem.type,
      itemId: bookingItem.id,
      itemTitle: bookingItem.title,
      destination: bookingItem.destination,
      startDate: travelDate,
      guests: {
        adults: adults,
        children: 0
      },
      totalAmountUSD: totalAmountUSD,
      paidAmountUSD: paymentMethod === 'reserve_now' ? 0 : totalAmountUSD,
      currency: currentCurrency,
      status: 'confirmed',
      contact: {
        fullName,
        email,
        phone,
        specialRequests
      },
      addOns: addOns.filter(a => a.selected).map(a => a.name),
      createdAt: new Date().toISOString()
    };

    setConfirmedBooking(newBooking);
    onBookingConfirmed(newBooking);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        id="modal-booking-checkout"
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
              Step {step} of 4 • Secure Travel Checkout
            </span>
            <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white">
              {step === 4 ? '🎉 Reservation Confirmed' : bookingItem.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: Traveler Details */}
        {step === 1 && (
          <div className="p-6 space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {bookingItem.destination}
              </span>
              <span className="font-mono text-emerald-400 font-bold">
                {formatPrice(bookingItem.priceUSD, currentCurrency)} / person
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Primary Guest Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 text-white text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Email for Itinerary Voucher</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 text-white text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Mobile Phone & WhatsApp</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 text-white text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Travel Departure Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-950 text-white text-xs p-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Number of Travelers</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={adults}
                  onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
                  className="w-24 bg-slate-950 text-white text-xs font-bold p-2.5 rounded-xl border border-slate-800"
                />
                <span className="text-xs text-slate-400">Adult(s)</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Special Dietary & Concierge Requests (Optional)</label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="e.g. Vegetarian meals, honeymoon welcome package, ground-floor room preferred..."
                rows={2}
                className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800 resize-none"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                id="btn-booking-step-1"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
              >
                <span>Continue to Add-Ons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Add-Ons */}
        {step === 2 && (
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Customize Your Travel Protection & Convenience
            </h4>

            <div className="space-y-3">
              {addOns.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    addon.selected
                      ? 'bg-emerald-950/20 border-emerald-500/50 shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center text-xs ${
                      addon.selected ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                    }`}>
                      {addon.selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{addon.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{addon.description}</p>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-emerald-400 shrink-0">
                    +{formatPrice(addon.priceUSD * adults, currentCurrency)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Back
              </button>
              <button
                id="btn-booking-step-2"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Payment & Confirmation */}
        {step === 3 && (
          <div className="p-6 space-y-5">
            {/* Promo code bar */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
              <Tag className="w-4 h-4 text-emerald-400 shrink-0" />
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (try: WANDER15)"
                className="bg-transparent text-white text-xs flex-1 focus:outline-none uppercase font-mono"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Apply
              </button>
            </div>
            {promoMessage && (
              <p className={`text-xs ${appliedDiscount > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400'}`}>
                {promoMessage}
              </p>
            )}

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <p className="text-[11px] uppercase font-bold text-slate-400">Select Payment Guarantee</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'card', label: 'Credit Card', icon: CreditCard },
                  { id: 'apple_pay', label: 'Apple / Google', icon: Lock },
                  { id: 'reserve_now', label: 'Reserve ($0 Now)', icon: ShieldCheck },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === m.id
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <m.icon className="w-4 h-4" />
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Base Experience ({adults} Guests)</span>
                <span className="font-mono text-white">{formatPrice(baseItemPrice, currentCurrency)}</span>
              </div>

              {addOnsTotal > 0 && (
                <div className="flex justify-between text-slate-400">
                  <span>Selected Protection & Add-ons</span>
                  <span className="font-mono text-white">+{formatPrice(addOnsTotal, currentCurrency)}</span>
                </div>
              )}

              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Promo Discount ({(appliedDiscount * 100)}%)</span>
                  <span className="font-mono">-{formatPrice(discountAmountUSD, currentCurrency)}</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                <span className="font-bold text-white text-sm">Total Due Today</span>
                <span className="font-serif-display text-xl font-bold text-emerald-400 font-mono">
                  {paymentMethod === 'reserve_now' ? '$0.00 (Pay on Departure)' : formatPrice(totalAmountUSD, currentCurrency)}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Back
              </button>
              <button
                id="btn-confirm-final-booking"
                onClick={handleCompleteBooking}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/30"
              >
                <Lock className="w-3.5 h-3.5 text-slate-950" />
                <span>Confirm & Issue Travel Voucher</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Success Confirmation Screen */}
        {step === 4 && confirmedBooking && (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif-display text-2xl font-bold text-white">
                Bon Voyage, {fullName}!
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                Your journey has been officially reserved. Confirmation details and itinerary vouchers have been dispatched to <strong className="text-emerald-400">{email}</strong>.
              </p>
            </div>

            {/* Voucher Reference Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400">Booking Reference</span>
                <span className="font-mono text-emerald-400 font-extrabold text-sm">{confirmedBooking.referenceNumber}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Destination</span>
                  <span className="font-semibold text-white">{confirmedBooking.destination}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Departure</span>
                  <span className="font-semibold text-white">{formatDate(confirmedBooking.startDate)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Party Size</span>
                  <span className="font-semibold text-white">{confirmedBooking.guests.adults} Guest(s)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Status</span>
                  <span className="text-emerald-400 font-bold uppercase">Confirmed (Active)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Voucher</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                Done & View in My Trips
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
