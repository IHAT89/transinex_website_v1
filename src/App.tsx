import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { DestinationExplorer } from './components/DestinationExplorer';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { PackageDeals } from './components/PackageDeals';
import { FlightsStaysFinder } from './components/FlightsStaysFinder';
import { TripPlanner } from './components/TripPlanner';
import { BookingModal } from './components/BookingModal';
import { MyBookingsWishlistDrawer } from './components/MyBookingsWishlistDrawer';
import { AITravelAdvisorModal } from './components/AITravelAdvisorModal';
import { TravelPerksBanner } from './components/TravelPerksBanner';
import { TravelerReviews } from './components/TravelerReviews';
import { NewsletterClub } from './components/NewsletterClub';
import { Footer } from './components/Footer';

import { 
  DESTINATIONS, 
  VACATION_PACKAGES, 
  FLIGHT_OPTIONS, 
  STAY_OPTIONS, 
  EXPERIENCE_OPTIONS 
} from './data/travelData';

import { 
  Destination, 
  SearchState, 
  CurrencyCode, 
  Booking, 
  CustomTripPlan, 
  VacationPackage, 
  FlightOption, 
  StayOption, 
  ExperienceOption 
} from './types/travel';

export default function App() {
  // Global Currency State
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');

  // Search State
  const [searchState, setSearchState] = useState<SearchState>({
    category: 'packages',
    origin: 'New York (JFK)',
    destination: '',
    departDate: '2026-10-15',
    returnDate: '2026-10-22',
    travelers: {
      adults: 2,
      children: 0,
      infants: 0,
    },
    cabinClass: 'economy',
    rooms: 1,
    directOnly: false,
    freeCancellationOnly: false,
    allInclusiveOnly: false,
    budgetMaxUSD: 5000,
  });

  const handleSearchChange = (updates: Partial<SearchState>) => {
    setSearchState((prev) => ({ ...prev, ...updates }));
  };

  // Wishlist & Saved Trips
  const [wishlistIds, setWishlistIds] = useState<string[]>(['kyoto', 'amalfi', 'bali']);
  
  // Confirmed Bookings list
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 'bk-seed-1',
      referenceNumber: 'TV-839201',
      type: 'package',
      itemId: 'pkg-1',
      itemTitle: '7-Day Kyoto & Nara Imperial Zen Discovery',
      destination: 'Kyoto, Japan',
      startDate: '2026-10-15',
      guests: { adults: 2, children: 0 },
      totalAmountUSD: 4180,
      paidAmountUSD: 4180,
      currency: 'USD',
      status: 'confirmed',
      contact: {
        fullName: 'Ian Townrow',
        email: 'iantownrow@gmail.com',
        phone: '+1 (555) 382-9104'
      },
      addOns: ['🛡️ Comprehensive Travel & Medical Insurance', '📱 Unlimited High-Speed International eSIM Data Pack'],
      createdAt: '2026-08-15T14:30:00.000Z'
    }
  ]);

  // Modals & Drawers
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);
  const [isBookingsDrawerOpen, setIsBookingsDrawerOpen] = useState(false);
  const [drawerTab, setDrawerTab] = useState<'bookings' | 'wishlist'>('bookings');
  const [isAIAdvisorOpen, setIsAIAdvisorOpen] = useState(false);

  // Booking Checkout Modal
  const [bookingModalItem, setBookingModalItem] = useState<{
    type: 'package' | 'flight' | 'stay' | 'custom_trip';
    id: string;
    title: string;
    destination: string;
    priceUSD: number;
    dates?: string;
    details?: string;
    travelersCount?: number;
  } | null>(null);

  // Custom Trip Plan State
  const defaultKyoto = DESTINATIONS[0];
  const [customPlan, setCustomPlan] = useState<CustomTripPlan>({
    id: 'plan-custom-1',
    destinationId: defaultKyoto.id,
    destinationName: defaultKyoto.name,
    tripTitle: 'Autumn Kyoto & Zen Temples Expedition',
    startDate: '2026-10-15',
    travelersCount: 2,
    days: JSON.parse(JSON.stringify(defaultKyoto.defaultItinerary)),
    estimatedFlightCostUSD: 780,
    estimatedLodgingCostUSD: 650,
    isSaved: true
  });

  // Wishlist toggle handler
  const handleToggleWishlist = (destinationId: string) => {
    setWishlistIds((prev) =>
      prev.includes(destinationId)
        ? prev.filter((id) => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  // Plan custom trip from catalog or modal
  const handlePlanCustomTripForDestination = (destination: Destination) => {
    setCustomPlan({
      id: `plan-${destination.id}-${Date.now()}`,
      destinationId: destination.id,
      destinationName: destination.name,
      tripTitle: `${destination.name} Bespoke Expedition`,
      startDate: '2026-10-15',
      travelersCount: searchState.travelers.adults || 2,
      days: JSON.parse(JSON.stringify(destination.defaultItinerary)),
      estimatedFlightCostUSD: 750,
      estimatedLodgingCostUSD: destination.avgDailyBudgetUSD * 0.5 * destination.defaultItinerary.length,
      isSaved: true
    });

    // Scroll smoothly to trip planner
    const plannerEl = document.getElementById('trip-planner');
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initiate booking handlers
  const handleBookPackage = (pkg: VacationPackage) => {
    setBookingModalItem({
      type: 'package',
      id: pkg.id,
      title: pkg.title,
      destination: `${pkg.destinationName}, ${pkg.country}`,
      priceUSD: pkg.priceUSD,
      travelersCount: searchState.travelers.adults || 2,
      details: `${pkg.durationDays} Days / ${pkg.durationNights} Nights • ${pkg.mealPlan}`
    });
  };

  const handleBookFlight = (flight: FlightOption) => {
    setBookingModalItem({
      type: 'flight',
      id: flight.id,
      title: `${flight.airline} ${flight.flightNumber} (${flight.fromCode} → ${flight.toCode})`,
      destination: flight.toCity,
      priceUSD: flight.priceUSD,
      travelersCount: searchState.travelers.adults || 2,
      details: `${flight.cabinClass} • ${flight.stops === 0 ? 'Nonstop' : flight.stopoverCity} • ${flight.baggageIncluded}`
    });
  };

  const handleBookStay = (stay: StayOption) => {
    setBookingModalItem({
      type: 'stay',
      id: stay.id,
      title: stay.name,
      destination: stay.location,
      priceUSD: stay.pricePerNightUSD * 3, // default 3 nights
      travelersCount: searchState.travelers.adults || 2,
      details: `${stay.roomType} • ${stay.guestRating}★ (${stay.reviewsCount} reviews)`
    });
  };

  const handleBookExperience = (exp: ExperienceOption) => {
    setBookingModalItem({
      type: 'custom_trip',
      id: exp.id,
      title: exp.title,
      destination: exp.destinationName,
      priceUSD: exp.priceUSD,
      travelersCount: searchState.travelers.adults || 2,
      details: `${exp.category} • ${exp.durationHours} Hours Tour`
    });
  };

  const handleBookCustomItinerary = (plan: CustomTripPlan) => {
    const totalActivitiesUSD = plan.days.reduce((sum, day) => {
      return sum + day.activities.reduce((actSum, act) => actSum + act.costUSD, 0);
    }, 0);

    const estPerPersonUSD = (
      plan.estimatedFlightCostUSD +
      (plan.estimatedLodgingCostUSD / plan.travelersCount) +
      totalActivitiesUSD +
      (plan.days.length * 60)
    );

    setBookingModalItem({
      type: 'custom_trip',
      id: plan.id,
      title: plan.tripTitle,
      destination: plan.destinationName,
      priceUSD: Math.round(estPerPersonUSD),
      travelersCount: plan.travelersCount,
      details: `${plan.days.length} Days Custom Route with Flights & Stays`
    });
  };

  const handleBookingConfirmed = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  const wishlistDestinations = DESTINATIONS.filter((d) => wishlistIds.includes(d.id));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 1. Header Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        wishlistCount={wishlistIds.length}
        bookingsCount={bookings.length}
        onOpenWishlist={() => {
          setDrawerTab('wishlist');
          setIsBookingsDrawerOpen(true);
        }}
        onOpenBookings={() => {
          setDrawerTab('bookings');
          setIsBookingsDrawerOpen(true);
        }}
        onOpenAIAdvisor={() => setIsAIAdvisorOpen(true)}
      />

      {/* 2. Hero Search Console */}
      <HeroSearch
        searchState={searchState}
        onSearchChange={handleSearchChange}
        currentCurrency={currentCurrency}
        onOpenAIAdvisor={() => setIsAIAdvisorOpen(true)}
        onSelectDestinationDirectly={setSelectedDestinationModal}
      />

      {/* 3. Destination Explorer & Filters */}
      <DestinationExplorer
        destinations={DESTINATIONS}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onOpenDestinationDetail={setSelectedDestinationModal}
        onPlanTripForDestination={handlePlanCustomTripForDestination}
        currentCurrency={currentCurrency}
      />

      {/* 4. Curated Vacation Packages & Flash Deals */}
      <PackageDeals
        packages={VACATION_PACKAGES}
        currentCurrency={currentCurrency}
        onBookPackage={handleBookPackage}
      />

      {/* 5. Interactive Custom Itinerary Builder & Cost Estimator */}
      <TripPlanner
        currentPlan={customPlan}
        onUpdatePlan={setCustomPlan}
        currentCurrency={currentCurrency}
        onBookCustomTrip={handleBookCustomItinerary}
        onSaveToSavedTrips={(plan) => {
          setCustomPlan({ ...plan, isSaved: true });
          alert(`✨ Itinerary "${plan.tripTitle}" saved successfully to your trip dashboard!`);
        }}
      />

      {/* 6. Live Flights, Stays & Activities Finder */}
      <FlightsStaysFinder
        flights={FLIGHT_OPTIONS}
        stays={STAY_OPTIONS}
        experiences={EXPERIENCE_OPTIONS}
        currentCurrency={currentCurrency}
        onBookFlight={handleBookFlight}
        onBookStay={handleBookStay}
        onBookExperience={handleBookExperience}
      />

      {/* 7. Perks & Guarantees */}
      <TravelPerksBanner />

      {/* 8. Verified Traveler Reviews */}
      <TravelerReviews />

      {/* 9. VIP Newsletter Club */}
      <NewsletterClub />

      {/* 10. Footer */}
      <Footer />

      {/* MODAL 1: Destination Detail Deep Dive */}
      {selectedDestinationModal && (
        <DestinationDetailModal
          destination={selectedDestinationModal}
          isOpen={!!selectedDestinationModal}
          onClose={() => setSelectedDestinationModal(null)}
          isWishlisted={wishlistIds.includes(selectedDestinationModal.id)}
          onToggleWishlist={() => handleToggleWishlist(selectedDestinationModal.id)}
          onPlanCustomTrip={() => {
            handlePlanCustomTripForDestination(selectedDestinationModal);
            setSelectedDestinationModal(null);
          }}
          currentCurrency={currentCurrency}
        />
      )}

      {/* MODAL 2: 4-Step Checkout & Booking Modal */}
      {bookingModalItem && (
        <BookingModal
          isOpen={!!bookingModalItem}
          onClose={() => setBookingModalItem(null)}
          bookingItem={bookingModalItem}
          currentCurrency={currentCurrency}
          onBookingConfirmed={handleBookingConfirmed}
        />
      )}

      {/* MODAL 3: Smart AI Travel Advisor Concierge */}
      <AITravelAdvisorModal
        isOpen={isAIAdvisorOpen}
        onClose={() => setIsAIAdvisorOpen(false)}
      />

      {/* DRAWER: My Trips & Wishlist */}
      <MyBookingsWishlistDrawer
        isOpen={isBookingsDrawerOpen}
        onClose={() => setIsBookingsDrawerOpen(false)}
        activeTab={drawerTab}
        onTabChange={setDrawerTab}
        bookings={bookings}
        wishlistDestinations={wishlistDestinations}
        onRemoveFromWishlist={(id) => handleToggleWishlist(id)}
        onPlanTripForDestination={(dest) => {
          handlePlanCustomTripForDestination(dest);
          setIsBookingsDrawerOpen(false);
        }}
        onCancelBooking={handleCancelBooking}
        currentCurrency={currentCurrency}
      />

    </div>
  );
}
