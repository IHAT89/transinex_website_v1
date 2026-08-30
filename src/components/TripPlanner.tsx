import React, { useState } from 'react';
import { 
  Compass, 
  Plus, 
  Trash2, 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  DollarSign, 
  Printer, 
  Share2, 
  Check, 
  Sparkles, 
  Plane, 
  Building2, 
  Utensils, 
  ArrowRight,
  BookmarkPlus
} from 'lucide-react';
import { Destination, CustomTripPlan, ItineraryDay, ItineraryActivity, CurrencyCode } from '../types/travel';
import { DESTINATIONS } from '../data/travelData';
import { formatPrice } from '../utils/formatters';

interface TripPlannerProps {
  currentPlan: CustomTripPlan;
  onUpdatePlan: (updated: CustomTripPlan) => void;
  currentCurrency: CurrencyCode;
  onBookCustomTrip: (plan: CustomTripPlan) => void;
  onSaveToSavedTrips: (plan: CustomTripPlan) => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  currentPlan,
  onUpdatePlan,
  currentCurrency,
  onBookCustomTrip,
  onSaveToSavedTrips,
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // New activity form state
  const [newTime, setNewTime] = useState('10:00 AM');
  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newCategory, setNewCategory] = useState<'sight' | 'food' | 'activity' | 'transfer' | 'hotel'>('sight');
  const [newCost, setNewCost] = useState<number>(25);
  const [newDuration, setNewDuration] = useState<number>(1.5);
  const [newDescription, setNewDescription] = useState('');
  const [newTips, setNewTips] = useState('');

  // Handle switching destination
  const handleDestinationChange = (destId: string) => {
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    onUpdatePlan({
      ...currentPlan,
      destinationId: dest.id,
      destinationName: dest.name,
      tripTitle: `${dest.name} Custom Journey (${dest.country})`,
      days: JSON.parse(JSON.stringify(dest.defaultItinerary)),
      estimatedFlightCostUSD: 750,
      estimatedLodgingCostUSD: dest.avgDailyBudgetUSD * 0.55 * dest.defaultItinerary.length,
    });
    setSelectedDayIndex(0);
  };

  // Add new day
  const handleAddDay = () => {
    const nextDayNum = currentPlan.days.length + 1;
    const newDay: ItineraryDay = {
      dayNumber: nextDayNum,
      title: `Day ${nextDayNum} Exploration`,
      summary: 'Custom exploration, leisure & local dining.',
      activities: [
        {
          id: `custom-act-${Date.now()}`,
          time: '10:00 AM',
          title: 'Scenic Walking Tour & Landmark Exploration',
          location: currentPlan.destinationName,
          category: 'sight',
          costUSD: 15,
          durationHours: 2.0,
          description: 'Explore scenic avenues and discover local architectural highlights.',
        }
      ]
    };

    onUpdatePlan({
      ...currentPlan,
      days: [...currentPlan.days, newDay],
      estimatedLodgingCostUSD: currentPlan.estimatedLodgingCostUSD + 150
    });
    setSelectedDayIndex(currentPlan.days.length);
  };

  // Delete a day
  const handleDeleteDay = (index: number) => {
    if (currentPlan.days.length <= 1) return;
    const updated = currentPlan.days.filter((_, idx) => idx !== index).map((d, i) => ({
      ...d,
      dayNumber: i + 1
    }));
    onUpdatePlan({
      ...currentPlan,
      days: updated
    });
    setSelectedDayIndex(Math.max(0, index - 1));
  };

  // Add Activity to selected day
  const handleSaveNewActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const activity: ItineraryActivity = {
      id: `act-${Date.now()}`,
      time: newTime,
      title: newTitle,
      location: newLocation || currentPlan.destinationName,
      category: newCategory,
      costUSD: Number(newCost) || 0,
      durationHours: Number(newDuration) || 1,
      description: newDescription,
      tips: newTips || undefined
    };

    const updatedDays = [...currentPlan.days];
    updatedDays[selectedDayIndex].activities.push(activity);

    onUpdatePlan({
      ...currentPlan,
      days: updatedDays
    });

    // Reset
    setNewTitle('');
    setNewDescription('');
    setNewTips('');
    setShowAddActivityModal(false);
  };

  // Delete activity
  const handleDeleteActivity = (actId: string) => {
    const updatedDays = [...currentPlan.days];
    updatedDays[selectedDayIndex].activities = updatedDays[selectedDayIndex].activities.filter(a => a.id !== actId);
    onUpdatePlan({
      ...currentPlan,
      days: updatedDays
    });
  };

  // Calculate live costs
  const totalActivitiesCostUSD = currentPlan.days.reduce((sum, day) => {
    return sum + day.activities.reduce((actSum, act) => actSum + act.costUSD, 0);
  }, 0);

  const estimatedTotalPerPersonUSD = (
    currentPlan.estimatedFlightCostUSD +
    (currentPlan.estimatedLodgingCostUSD / currentPlan.travelersCount) +
    totalActivitiesCostUSD
  );

  const totalTripCostUSD = (
    (currentPlan.estimatedFlightCostUSD * currentPlan.travelersCount) +
    currentPlan.estimatedLodgingCostUSD +
    (totalActivitiesCostUSD * currentPlan.travelersCount)
  );

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const activeDay = currentPlan.days[selectedDayIndex] || currentPlan.days[0];

  return (
    <section id="trip-planner" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Planner Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Trip Studio</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Custom Itinerary & Cost Estimator
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Build your personalized day-by-day expedition with synchronized flight, stay, and excursion costs.
          </p>
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShareLink}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Copy shareable link"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Itinerary'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors no-print"
            title="Print or export as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>

          <button
            onClick={() => onSaveToSavedTrips(currentPlan)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <BookmarkPlus className="w-3.5 h-3.5" />
            <span>Save to Trips</span>
          </button>
        </div>
      </div>

      {/* Control Strip (Destination, Title, Travelers, Date) */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Load Destination */}
        <div>
          <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1.5">Selected Destination</label>
          <select
            value={currentPlan.destinationId}
            onChange={(e) => handleDestinationChange(e.target.value)}
            className="w-full bg-slate-950 text-white text-xs font-semibold px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            {DESTINATIONS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.country})
              </option>
            ))}
          </select>
        </div>

        {/* Trip Title */}
        <div>
          <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1.5">Custom Trip Name</label>
          <input
            type="text"
            value={currentPlan.tripTitle}
            onChange={(e) => onUpdatePlan({ ...currentPlan, tripTitle: e.target.value })}
            className="w-full bg-slate-950 text-white text-xs font-medium px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1.5">Departure Date</label>
          <input
            type="date"
            value={currentPlan.startDate}
            onChange={(e) => onUpdatePlan({ ...currentPlan, startDate: e.target.value })}
            className="w-full bg-slate-950 text-white text-xs font-medium px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Travelers Count */}
        <div>
          <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1.5">Travelers</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max="20"
              value={currentPlan.travelersCount}
              onChange={(e) => onUpdatePlan({ ...currentPlan, travelersCount: Math.max(1, Number(e.target.value)) })}
              className="w-full bg-slate-950 text-white text-xs font-bold px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <span className="text-xs text-slate-400 font-medium shrink-0">Person(s)</span>
          </div>
        </div>

      </div>

      {/* Main Studio Grid: Left = Day Timeline, Right = Cost Live Estimator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: DAY SELECTOR & ACTIVITY LIST (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Day Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {currentPlan.days.map((day, idx) => (
              <button
                key={day.dayNumber}
                id={`day-tab-${idx}`}
                onClick={() => setSelectedDayIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedDayIndex === idx
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>Day {day.dayNumber}</span>
              </button>
            ))}

            <button
              id="btn-add-day"
              onClick={handleAddDay}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-dashed border-emerald-500/40 text-xs font-bold flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Day</span>
            </button>
          </div>

          {/* Current Day Header Card */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  Day {activeDay.dayNumber} Focus
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-white mt-0.5">
                  {activeDay.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{activeDay.summary}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-add-activity"
                  onClick={() => setShowAddActivityModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Activity</span>
                </button>

                {currentPlan.days.length > 1 && (
                  <button
                    onClick={() => handleDeleteDay(selectedDayIndex)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-700 transition-colors"
                    title="Delete this day"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Activities Timeline */}
            <div className="space-y-3 pt-2">
              {activeDay.activities.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No activities scheduled for this day yet. Click "+ Add Activity" to begin crafting!
                </div>
              ) : (
                activeDay.activities.map((act) => (
                  <div
                    key={act.id}
                    id={`act-item-${act.id}`}
                    className="group bg-slate-950/70 hover:bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 p-4 flex items-start justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      {/* Time Pill */}
                      <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono font-bold text-emerald-400 shrink-0">
                        {act.time}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{act.title}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 uppercase font-semibold">
                            {act.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-cyan-400" />
                            {act.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {act.durationHours} hrs
                          </span>
                        </div>

                        {act.description && (
                          <p className="text-xs text-slate-300 mt-2 leading-relaxed">{act.description}</p>
                        )}

                        {act.tips && (
                          <p className="text-[11px] text-emerald-400/90 mt-1.5 italic bg-emerald-950/30 p-1.5 rounded-md border border-emerald-500/20">
                            💡 Local Tip: {act.tips}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-sm font-bold text-white">
                        {act.costUSD === 0 ? 'Free' : formatPrice(act.costUSD, currentCurrency)}
                      </span>

                      <button
                        onClick={() => handleDeleteActivity(act.id)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-900 transition-all"
                        title="Remove activity"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

        </div>

        {/* RIGHT: LIVE ESTIMATED COST BREAKDOWN & BOOKING (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-24 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-6 space-y-5 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-serif-display text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span>Live Cost Estimate</span>
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {currentPlan.days.length} Days / {currentPlan.days.length - 1} Nights
              </span>
            </div>

            {/* Cost Breakdown Items */}
            <div className="space-y-3 text-xs text-slate-300">
              
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-emerald-400" />
                  Estimated Roundtrip Flights
                </span>
                <span className="font-mono font-bold text-white">
                  {formatPrice(currentPlan.estimatedFlightCostUSD, currentCurrency)} / person
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Boutique Stays & Lodging
                </span>
                <span className="font-mono font-bold text-white">
                  {formatPrice(currentPlan.estimatedLodgingCostUSD, currentCurrency)} total
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  Excursions & Activity Fees
                </span>
                <span className="font-mono font-bold text-white">
                  {formatPrice(totalActivitiesCostUSD, currentCurrency)} / person
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                  Food & Local Transit Buffer
                </span>
                <span className="font-mono font-bold text-white">
                  {formatPrice(currentPlan.days.length * 60, currentCurrency)} / person
                </span>
              </div>

            </div>

            {/* Total Calculation */}
            <div className="pt-4 border-t border-slate-800 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-slate-400 uppercase font-semibold">Estimated per person</span>
                <span className="font-mono text-xl font-bold text-emerald-400">
                  {formatPrice(estimatedTotalPerPersonUSD + (currentPlan.days.length * 60), currentCurrency)}
                </span>
              </div>

              <div className="flex items-baseline justify-between text-slate-400 text-xs">
                <span>Total for {currentPlan.travelersCount} Traveler(s)</span>
                <span className="font-mono font-bold text-white text-sm">
                  {formatPrice(totalTripCostUSD + (currentPlan.days.length * 60 * currentPlan.travelersCount), currentCurrency)}
                </span>
              </div>
            </div>

            {/* Action Book Button */}
            <button
              id="btn-book-custom-itinerary"
              onClick={() => onBookCustomTrip(currentPlan)}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer"
            >
              <span>Reserve & Confirm This Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-slate-400">
              🔒 Free 24h cancellation guarantee & transparent price pledge.
            </p>

          </div>
        </div>

      </div>

      {/* Add Custom Activity Modal */}
      {showAddActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="font-serif-display text-lg font-bold text-white">
                Add Activity to Day {activeDay.dayNumber}
              </h4>
              <button
                onClick={() => setShowAddActivityModal(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveNewActivity} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Time</label>
                  <input
                    type="text"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="09:30 AM"
                    className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                  >
                    <option value="sight">🏛️ Sight / Monument</option>
                    <option value="activity">🧗 Tour / Excursion</option>
                    <option value="food">🍜 Food & Dining</option>
                    <option value="transfer">🚕 Transit / Boat</option>
                    <option value="hotel">🏨 Hotel / Check-in</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Activity Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Bamboo Grove Walk & Forest Meditation"
                  className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Arashiyama, Kyoto"
                    className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Cost (USD)</label>
                  <input
                    type="number"
                    min="0"
                    value={newCost}
                    onChange={(e) => setNewCost(Number(e.target.value))}
                    className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Description</label>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Brief note about the activity..."
                  rows={2}
                  className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800 resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Local Concierge Tip (Optional)</label>
                <input
                  type="text"
                  value={newTips}
                  onChange={(e) => setNewTips(e.target.value)}
                  placeholder="e.g. Arrive before 8:00 AM for crowd-free photos"
                  className="w-full bg-slate-950 text-white text-xs p-2.5 rounded-xl border border-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddActivityModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400"
                >
                  Save Activity
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
