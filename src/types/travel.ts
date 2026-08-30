export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromUSD: number; // multiplier from USD
  label: string;
}

export type SearchCategory = 'flights' | 'stays' | 'packages' | 'experiences' | 'cars';

export type TravelRegion = 'all' | 'europe' | 'asia' | 'americas' | 'africa' | 'islands';

export type TravelStyle = 'all' | 'adventure' | 'luxury' | 'culture' | 'beaches' | 'culinary' | 'nature' | 'romantic';

export interface SearchState {
  category: SearchCategory;
  origin: string;
  destination: string;
  departDate: string;
  returnDate: string;
  travelers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabinClass: 'economy' | 'premium_economy' | 'business' | 'first';
  rooms: number;
  directOnly: boolean;
  freeCancellationOnly: boolean;
  allInclusiveOnly: boolean;
  budgetMaxUSD: number;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'europe' | 'asia' | 'americas' | 'africa' | 'islands';
  tagline: string;
  heroImage: string;
  gallery: string[];
  description: string;
  bestMonths: string;
  avgDailyBudgetUSD: number;
  rating: number;
  reviewsCount: number;
  styles: TravelStyle[];
  weatherTempC: number;
  weatherCondition: string;
  highlights: string[];
  popularDishes: { name: string; desc: string }[];
  visaInfo: string;
  safetyScore: number; // 0-100
  timeZone: string;
  defaultItinerary: ItineraryDay[];
}

export interface ItineraryActivity {
  id: string;
  time: string; // e.g. "09:00 AM"
  title: string;
  location: string;
  category: 'sight' | 'food' | 'activity' | 'transfer' | 'hotel';
  costUSD: number;
  durationHours: number;
  description: string;
  tips?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  summary: string;
  activities: ItineraryActivity[];
}

export interface CustomTripPlan {
  id: string;
  destinationId: string;
  destinationName: string;
  tripTitle: string;
  startDate: string;
  travelersCount: number;
  days: ItineraryDay[];
  estimatedFlightCostUSD: number;
  estimatedLodgingCostUSD: number;
}

export interface VacationPackage {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  country: string;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  originalPriceUSD: number;
  discountPercentage: number;
  badge: string; // e.g. "Early Bird Special", "Bestseller", "Luxury Escape"
  heroImage: string;
  rating: number;
  reviewsCount: number;
  flightIncluded: boolean;
  hotelRating: number;
  mealPlan: string;
  itineraryHighlights: string[];
  departureDates: string[];
  groupSizeMax: number;
  overview: string;
}

export interface FlightOption {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number; // 0 for nonstop
  stopoverCity?: string;
  priceUSD: number;
  cabinClass: string;
  baggageIncluded: string;
  aircraft: string;
  seatsLeft: number;
}

export interface StayOption {
  id: string;
  name: string;
  destinationId: string;
  destinationName: string;
  location: string;
  starRating: number;
  guestRating: number;
  reviewsCount: number;
  pricePerNightUSD: number;
  heroImage: string;
  gallery: string[];
  roomType: string;
  amenities: string[];
  freeCancellation: boolean;
  breakfastIncluded: boolean;
  badge?: string;
}

export interface ExperienceOption {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  category: string;
  durationHours: number;
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  includesGuide: boolean;
  freeCancellation: boolean;
  groupSize: string;
  overview: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  selected: boolean;
}

export interface Booking {
  id: string;
  referenceNumber: string;
  type: 'package' | 'flight' | 'stay' | 'custom_trip';
  itemId: string;
  itemTitle: string;
  destination: string;
  startDate: string;
  endDate?: string;
  guests: {
    adults: number;
    children: number;
  };
  totalAmountUSD: number;
  paidAmountUSD: number;
  currency: CurrencyCode;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  contact: {
    fullName: string;
    email: string;
    phone: string;
    specialRequests?: string;
  };
  addOns: string[];
  createdAt: string;
}

export interface TravelerReview {
  id: string;
  authorName: string;
  authorLocation: string;
  authorAvatar: string;
  destinationName: string;
  rating: number;
  date: string;
  tripType: string; // e.g. "Honeymoon", "Solo Adventure", "Family Vacation"
  reviewText: string;
  photos?: string[];
  helpfulCount: number;
}
