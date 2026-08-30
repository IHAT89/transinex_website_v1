import { CurrencyConfig, Destination, VacationPackage, FlightOption, StayOption, ExperienceOption, TravelerReview, TravelStyle } from '../types/travel';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateFromUSD: 1.0, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rateFromUSD: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rateFromUSD: 0.79, label: 'GBP (£)' },
  JPY: { code: 'JPY', symbol: '¥', rateFromUSD: 155.0, label: 'JPY (¥)' },
  AUD: { code: 'AUD', symbol: 'A$', rateFromUSD: 1.52, label: 'AUD (A$)' },
  CAD: { code: 'CAD', symbol: 'C$', rateFromUSD: 1.37, label: 'CAD (C$)' },
  SGD: { code: 'SGD', symbol: 'S$', rateFromUSD: 1.34, label: 'SGD (S$)' }
};

export const POPULAR_ORIGINS = [
  { code: 'JFK', city: 'New York', country: 'United States', airport: 'John F. Kennedy Intl' },
  { code: 'LHR', city: 'London', country: 'United Kingdom', airport: 'Heathrow Airport' },
  { code: 'LAX', city: 'Los Angeles', country: 'United States', airport: 'Los Angeles Intl' },
  { code: 'HND', city: 'Tokyo', country: 'Japan', airport: 'Haneda Airport' },
  { code: 'CDG', city: 'Paris', country: 'France', airport: 'Charles de Gaulle' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', airport: 'Changi Airport' },
  { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', airport: 'Dubai Intl' },
  { code: 'SYD', city: 'Sydney', country: 'Australia', airport: 'Kingsford Smith' },
  { code: 'YVR', city: 'Vancouver', country: 'Canada', airport: 'Vancouver Intl' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', airport: 'Frankfurt Airport' }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'asia',
    tagline: 'Ancient temples, tranquil zen gardens & sublime culinary heritage',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Kyoto was Japan\'s imperial capital for over a millennium and remains the country\'s cultural soul. Home to over 2,000 Buddhist temples and Shinto shrines, sublime stone gardens, preserved wooden machiya townhouses, and the enchanting bamboo groves of Arashiyama.',
    bestMonths: 'Mar – May (Cherry Blossom) & Oct – Nov (Autumn Foliage)',
    avgDailyBudgetUSD: 165,
    rating: 4.95,
    reviewsCount: 3420,
    styles: ['culture', 'culinary', 'luxury'],
    weatherTempC: 22,
    weatherCondition: 'Pleasant & Crisp',
    highlights: ['Fushimi Inari Shrine Gates', 'Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Grove', 'Gion Geisha District', 'Nishiki Food Market'],
    popularDishes: [
      { name: 'Kaiseki Ryori', desc: 'Traditional multi-course seasonal Japanese haute cuisine' },
      { name: 'Matcha Parfait & Uji Tea', desc: 'Stone-ground ceremonial green tea treats' },
      { name: 'Yudofu', desc: 'Silken simmered tofu in seasoned kombu broth' }
    ],
    visaInfo: 'Visa-free for 90 days for US, UK, EU, Canadian, and Australian passport holders.',
    safetyScore: 98,
    timeZone: 'GMT+9 (JST)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Historic Heart & Geisha Quarters',
        summary: 'Immerse in Gion, historic Yasaka Shrine, and lantern-lit dining along Pontocho.',
        activities: [
          { id: 'k1', time: '08:30 AM', title: 'Fushimi Inari Early Morning Hike', location: 'Southern Kyoto', category: 'sight', costUSD: 0, durationHours: 2.5, description: 'Walk through thousands of vibrant vermilion torii gates before peak crowds arrive.', tips: 'Reach the Yotsutsuji intersection for panoramic city views.' },
          { id: 'k2', time: '12:00 PM', title: 'Nishiki Market Street Food Safari', location: 'Nakagyo Ward', category: 'food', costUSD: 28, durationHours: 1.5, description: 'Sample fresh octopus skewers, soy milk donuts, wagyu beef skewers, and pickled vegetables.', tips: 'Look for vendors with seats inside.' },
          { id: 'k3', time: '03:00 PM', title: 'Kiyomizu-dera Wooden Stage & Higashiyama Walk', location: 'Higashiyama', category: 'sight', costUSD: 12, durationHours: 2.5, description: 'Marvel at the ancient cliffside wooden terrace and wander stone-paved Ninenzaka and Sannenzaka alleys.' },
          { id: 'k4', time: '07:00 PM', title: 'Traditional Kaiseki Dinner in Pontocho Alley', location: 'Pontocho', category: 'food', costUSD: 85, durationHours: 2.0, description: 'Riverside seasonal delicacies served with premium local Kyoto sake.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Bamboo Forest & Zen Reflections',
        summary: 'Explore the western mountain district of Arashiyama and golden temples.',
        activities: [
          { id: 'k5', time: '08:00 AM', title: 'Arashiyama Bamboo Forest & Tenryu-ji Garden', location: 'Arashiyama', category: 'sight', costUSD: 8, durationHours: 2.5, description: 'Listen to the soothing wind rustling the emerald bamboo shoots and meditate in UNESCO World Heritage Zen garden.' },
          { id: 'k6', time: '11:30 AM', title: 'Scenic Sagano Romantic Train Ride', location: 'Sagano Gorge', category: 'activity', costUSD: 15, durationHours: 1.5, description: 'Retro open-air locomotive hugging the sparkling Hozu River.' },
          { id: 'k7', time: '02:30 PM', title: 'Kinkaku-ji (The Golden Pavilion) Visit', location: 'Kita Ward', category: 'sight', costUSD: 5, durationHours: 1.5, description: 'The top two floors are covered in pure gold leaf shimmering over Mirror Pond.' },
          { id: 'k8', time: '05:30 PM', title: 'Authentic Tea Ceremony Masterclass', location: 'Uji Quarter', category: 'activity', costUSD: 45, durationHours: 1.5, description: 'Learn the meditative art of chado from an Urasenke certified tea master.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Northern Shrines & Artisanal Craft',
        summary: 'Discover Daitoku-ji rock gardens, textile workshops, and twilight canal stroll.',
        activities: [
          { id: 'k9', time: '09:00 AM', title: 'Philosopher\'s Path & Silver Pavilion (Ginkaku-ji)', location: 'Sakyo Ward', category: 'sight', costUSD: 6, durationHours: 2.0, description: 'Stone path alongside canal lined with cherry and maple trees.' },
          { id: 'k10', time: '12:30 PM', title: 'Handmade Soba Lunch with Mountain Tempura', location: 'Ginkakuji-mae', category: 'food', costUSD: 22, durationHours: 1.0, description: 'Buckwheat soba freshly rolled this morning with seasonal wild mountain vegetables.' },
          { id: 'k11', time: '02:30 PM', title: 'Traditional Silk Weaving & Kimono Dyeing Studio', location: 'Nishijin Textile District', category: 'activity', costUSD: 35, durationHours: 2.0, description: 'Hands-on indigo dyeing workshop with 5th generation artisans.' },
          { id: 'k12', time: '06:30 PM', title: 'Night Walk through Gion\'s Lantern-lit Alleys', location: 'Gion-Kobubanchi', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Atmospheric evening stroll with historic wooden ochaya houses.' }
        ]
      }
    ]
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'europe',
    tagline: 'Dramatic cliffside villas, lemon groves & sapphire Mediterranean waters',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A 50-kilometer stretch of mountainous coastline along the Sorrentine Peninsula. Pastel-colored villages cling to vertical cliffs, with terraced vineyards and lemon orchards overlooking crystal turquoise coves.',
    bestMonths: 'May – Jun & Sep – Oct (Warm waters, fewer summer crowds)',
    avgDailyBudgetUSD: 240,
    rating: 4.92,
    reviewsCount: 2890,
    styles: ['luxury', 'beaches', 'culinary', 'romantic' as TravelStyle],
    weatherTempC: 26,
    weatherCondition: 'Sunny Mediterranean Breeze',
    highlights: ['Positano Cliffside Village', 'Ravello Villa Rufolo Gardens', 'Path of the Gods Hiking Trail', 'Capri Blue Grotto Day Cruise', 'Fresh Limoncello Tasting'],
    popularDishes: [
      { name: 'Scialatielli ai Frutti di Mare', desc: 'Handmade ribbon pasta with clams, mussels, and wild prawns' },
      { name: 'Delizia al Limone', desc: 'Fluffy sponge cake filled with Sorrento lemon pastry cream' },
      { name: 'Neapolitan Bufala Mozzarella', desc: 'DOP buffalo mozzarella with fresh basil and heirloom tomatoes' }
    ],
    visaInfo: 'Schengen zone rules apply (90 days visa-free for major international travelers).',
    safetyScore: 94,
    timeZone: 'GMT+1 (CET)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Positano Dreams & Beachside Aperitivo',
        summary: 'Arrive in Positano, explore pastel boutiques, and relax at Spiaggia Grande.',
        activities: [
          { id: 'a1', time: '09:00 AM', title: 'Arrival & Scenic Coastal Drive to Positano', location: 'SS163 Coast Road', category: 'transfer', costUSD: 40, durationHours: 1.5, description: 'Spectacular winding road with viewpoints overlooking the Tyrrhenian Sea.' },
          { id: 'a2', time: '11:00 AM', title: 'Positano Stairway Exploration & Boutique Shopping', location: 'Positano Center', category: 'sight', costUSD: 0, durationHours: 2.0, description: 'Wander cascading flower-filled alleyways lined with handmade leather sandals and linen wear.' },
          { id: 'a3', time: '01:30 PM', title: 'Seafood Lunch overlooking Marina Grande', location: 'Chez Black / Ristorante Buca', category: 'food', costUSD: 65, durationHours: 1.5, description: 'Fresh catch of the day, wood-fired seafood pizza, and local chilled Greco di Tufo wine.' },
          { id: 'a4', time: '04:30 PM', title: 'Private Sunset Gozzo Boat Cruise', location: 'Positano Pier', category: 'activity', costUSD: 110, durationHours: 2.5, description: 'Sail past cliffside caves with prosecco, fresh fruit, and swimming stops in secluded coves.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Path of the Gods & Historic Amalfi Town',
        summary: 'Trek the legendary Sentiero degli Dei and visit the 9th-century Duomo di Amalfi.',
        activities: [
          { id: 'a5', time: '08:30 AM', title: 'Sentiero degli Dei (Path of the Gods) Guided Trek', location: 'Bomerano to Nocelle', category: 'activity', costUSD: 35, durationHours: 3.5, description: 'Breathtaking coastal hiking trail perched 600m above sea level with jaw-dropping vistas.' },
          { id: 'a6', time: '01:00 PM', title: 'Rustic Farmhouse Lunch in Nocelle', location: 'Santa Croce Viewpoint', category: 'food', costUSD: 30, durationHours: 1.5, description: 'Homemade gnocchi, organic prosciutto, and fresh goat ricotta.' },
          { id: 'a7', time: '03:30 PM', title: 'Amalfi Cathedral & Cloister of Paradise', location: 'Piazza del Duomo', category: 'sight', costUSD: 6, durationHours: 1.5, description: 'Arab-Norman Romanesque masterpiece with bronze doors cast in Constantinople.' },
          { id: 'a8', time: '05:30 PM', title: 'Organic Lemon Orchard Tour & Limoncello Tasting', location: 'Valle dei Mulini', category: 'activity', costUSD: 25, durationHours: 1.5, description: 'Family-owned terrace orchards harvesting giant sfusato amalfitano lemons.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Ravello Heights & Capri Day Sail',
        summary: 'Bask in music history in Ravello and take a hydrofoil to glamorous Capri.',
        activities: [
          { id: 'a9', time: '09:00 AM', title: 'Villa Cimbrone & Infinity Terrace in Ravello', location: 'Ravello', category: 'sight', costUSD: 12, durationHours: 2.0, description: 'Marble busts lined along the Terrazza dell\'Infinito overlooking the coastline.' },
          { id: 'a10', time: '12:00 PM', title: 'High-speed Boat to Isle of Capri & Faraglioni Rocks', location: 'Amalfi Port to Capri', category: 'transfer', costUSD: 45, durationHours: 1.0, description: 'Glide across the bay to the jewel of the Gulf of Naples.' },
          { id: 'a11', time: '02:00 PM', title: 'Capri Blue Grotto & Chairlift up Mount Solaro', location: 'Anacapri', category: 'activity', costUSD: 40, durationHours: 2.5, description: 'Spectacular 360-degree views from the island\'s highest summit.' },
          { id: 'a12', time: '07:30 PM', title: 'Farewell Candlelight Dinner with Gulf Views', location: 'Marina Piccola', category: 'food', costUSD: 95, durationHours: 2.0, description: 'Handmade ravioli capresi with caciotta cheese and fresh marjoram.' }
        ]
      }
    ]
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps & Zermatt',
    country: 'Switzerland',
    region: 'europe',
    tagline: 'Iconic Matterhorn peaks, crystalline glacier lakes & alpine luxury',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A paradise of snowcapped 4,000m summits, world-class scenic railways, car-free alpine hamlets, and pristine meadows with ringing cowbells. Experience the mighty pyramid of the Matterhorn and ride the legendary Gornergrat cogwheel train.',
    bestMonths: 'Dec – Mar (Ski & Winter Wonderland) & Jun – Sep (Alpine Hiking)',
    avgDailyBudgetUSD: 280,
    rating: 4.96,
    reviewsCount: 2150,
    styles: ['adventure', 'nature', 'luxury'],
    weatherTempC: 18,
    weatherCondition: 'Clear Mountain Air & Crisp Sun',
    highlights: ['Gornergrat Cogwheel Railway (3,089m)', 'Matterhorn Glacier Paradise', 'Five Lakes (5-Seenweg) Trail', 'Car-free Zermatt Village', 'Traditional Fondue in Igloo Chalet'],
    popularDishes: [
      { name: 'Valaisanne Cheese Fondue', desc: 'Melted Gruyère and Emmental with white wine and kirsch' },
      { name: 'Zürcher Geschnetzeltes & Rösti', desc: 'Sliced veal in mushroom cream sauce with crispy potato hash' },
      { name: 'Swiss Dark Chocolate Truffles', desc: 'Artisanal alpine truffles with fresh cream' }
    ],
    visaInfo: 'Schengen area member. 90-day visa-free for standard western travelers.',
    safetyScore: 99,
    timeZone: 'GMT+1 (CET)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Ascent to the Matterhorn Viewpoints',
        summary: 'Ride Europe\'s highest open-air cogwheel train to Gornergrat for unmatched alpine vistas.',
        activities: [
          { id: 's1', time: '08:30 AM', title: 'Gornergrat Railway Alpine Climb', location: 'Zermatt GGB Station', category: 'activity', costUSD: 75, durationHours: 2.0, description: 'Cogwheel train traversing dramatic viaducts and pine forests up to 3,089 meters.' },
          { id: 's2', time: '11:00 AM', title: 'Riffelsee Mirror Reflection Lake Hike', location: 'Rotenboden', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Capture the world-famous reflection of the Matterhorn peak in still glacier water.' },
          { id: 's3', time: '01:00 PM', title: 'Alpine Chalet Lunch with Valais Wine', location: 'Restaurant Riffelalp', category: 'food', costUSD: 45, durationHours: 1.5, description: 'Sizzling hot raclette scraped over baby potatoes with cornichons.' },
          { id: 's4', time: '04:00 PM', title: 'Zermatt Old Village Stroll & Hinterdorf Quarters', location: 'Zermatt Village', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Historic 16th-century sun-blackened wooden barns raised on mushroom-shaped stones.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Glacier Palace & High-altitude Adventure',
        summary: 'Ascend to Matterhorn Glacier Paradise at 3,883 meters and explore ice caverns.',
        activities: [
          { id: 's5', time: '09:00 AM', title: 'Matterhorn Glacier Ride Cableway', location: 'Trockener Steg', category: 'activity', costUSD: 85, durationHours: 2.5, description: 'Highest 3S cableway in the world featuring crystal glass-bottom cabins.' },
          { id: 's6', time: '12:00 PM', title: 'Glacier Palace Ice Carvings & Viewing Platform', location: 'Glacier Summit', category: 'sight', costUSD: 10, durationHours: 1.5, description: 'Walk 15 meters below the glacial surface through glittering natural ice tunnels.' },
          { id: 's7', time: '02:30 PM', title: 'Mountain Biking or Downhill Cart Descent', location: 'Sunnegga Valley', category: 'activity', costUSD: 38, durationHours: 2.0, description: 'Exhilarating ride down scenic flow trails flanked by wildflower pastures.' },
          { id: 's8', time: '07:00 PM', title: 'Fondue Feast in Fireside Mountain Cabin', location: 'Findeln Chalet', category: 'food', costUSD: 60, durationHours: 2.0, description: 'Truffle-infused Swiss fondue paired with local Fendant white wine.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Glacier Express & Thermal Spa Immersion',
        summary: 'Panoramic train ride and rejuvenating thermal springs amidst snowy summits.',
        activities: [
          { id: 's9', time: '09:30 AM', title: 'Panoramic Glacier Express Scenic Segment', location: 'Zermatt to Brig', category: 'transfer', costUSD: 65, durationHours: 2.0, description: 'Floor-to-ceiling panoramic glass carriages cruising through mountain gorges.' },
          { id: 's10', time: '01:00 PM', title: 'Alpine Thermal Wellness & Outdoor Infinity Pool', location: 'Leukerbad / Valais', category: 'activity', costUSD: 50, durationHours: 3.0, description: 'Mineral-rich 38°C thermal waters surrounded by towering limestone cliffs.' },
          { id: 's11', time: '05:30 PM', title: 'Swiss Chocolate Masterclass & Tasting', location: 'Artisanal Chocolatier', category: 'food', costUSD: 40, durationHours: 1.5, description: 'Learn the secrets of Swiss conching and craft your own single-origin praline box.' }
        ]
      }
    ]
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Islands',
    country: 'Indonesia',
    region: 'asia',
    tagline: 'Emerald rice terraces, spiritual water temples & tropical surf sanctuaries',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The Island of the Gods seamlessly weaves sacred Hindu traditions, lush tropical rainforests, cascading waterfalls in Munduk, and vibrant cliffside beach clubs in Uluwatu with affordable world-class hospitality.',
    bestMonths: 'Apr – Oct (Dry season with sunny skies & gentle breezes)',
    avgDailyBudgetUSD: 95,
    rating: 4.89,
    reviewsCount: 4120,
    styles: ['adventure', 'beaches', 'culture', 'nature'],
    weatherTempC: 29,
    weatherCondition: 'Warm & Tropical Breeze',
    highlights: ['Tegallalang Rice Terraces', 'Uluwatu Sunset Temple & Kecak Dance', 'Nusa Penida Kelingking Beach', 'Mount Batur Sunrise Volcano Trek', 'Tirta Empul Holy Water Purification'],
    popularDishes: [
      { name: 'Nasi Campur Bali', desc: 'Fragrant rice with spiced chicken, sate lilit, crispy tempeh, and sambal matah' },
      { name: 'Bebek Betutu', desc: 'Slow-roasted duck wrapped in banana leaves with rich Balinese bumbu spices' },
      { name: 'Dragon Fruit Smoothie Bowls', desc: 'Fresh organic tropical fruit bowls with coconut flakes & chia' }
    ],
    visaInfo: 'Visa on Arrival (VoA) available for $35 for 30 days for 80+ nationalities.',
    safetyScore: 92,
    timeZone: 'GMT+8 (WITA)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Spiritual Ubud & Sacred Jungles',
        summary: 'Discover holy water springs, monkey sanctuaries, and artisan woodcraft.',
        activities: [
          { id: 'b1', time: '08:00 AM', title: 'Tirta Empul Holy Water Temple Purification Ritual', location: 'Tampaksiring', category: 'sight', costUSD: 10, durationHours: 2.0, description: 'Participate in the centuries-old Melukat cleansing ceremony in sacred mountain springs.' },
          { id: 'b2', time: '11:00 AM', title: 'Tegallalang Emerald Rice Terraces & Jungle Swing', location: 'North Ubud', category: 'activity', costUSD: 18, durationHours: 2.0, description: 'Walk through subak irrigation systems and soar above coconut palms on a sky swing.' },
          { id: 'b3', time: '01:30 PM', title: 'Plant-based Organic Feast in Jungle Garden', location: 'Moksa / Alchemy Ubud', category: 'food', costUSD: 20, durationHours: 1.5, description: 'Farm-to-table culinary creations featuring local heirloom herbs and wild mushrooms.' },
          { id: 'b4', time: '04:00 PM', title: 'Sacred Monkey Forest Sanctuary Walk', location: 'Central Ubud', category: 'sight', costUSD: 6, durationHours: 1.5, description: 'Explore moss-covered ancient temples inhabited by hundreds of playful grey macaques.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Mount Batur Sunrise & Hot Springs',
        summary: 'Hike an active caldera at dawn and soak in natural volcanic thermal baths.',
        activities: [
          { id: 'b5', time: '03:30 AM', title: 'Mount Batur Sunrise Volcano Trek', location: 'Kintamani', category: 'activity', costUSD: 45, durationHours: 4.5, description: 'Ascend the 1,717m peak with headlights to watch the sun ignite the clouds over Lake Batur.' },
          { id: 'b6', time: '08:30 AM', title: 'Toya Devasya Volcanic Hot Springs Relaxation', location: 'Batur Caldera', category: 'activity', costUSD: 15, durationHours: 2.0, description: 'Natural 39°C geothermal infinity pools looking across to Mount Abang.' },
          { id: 'b7', time: '01:00 PM', title: 'Kanto Lampo Cascading Waterfall Swim', location: 'Gianyar', category: 'sight', costUSD: 4, durationHours: 1.5, description: 'Step into a natural rocky canyon with tiered water curtains.' },
          { id: 'b8', time: '06:30 PM', title: 'Balinese Royal Sate Tasting & Live Gamelan', location: 'Campuhan Ridge', category: 'food', costUSD: 25, durationHours: 2.0, description: 'Sizzling lemongrass skewers over coconut charcoal with peanut sauces.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Nusa Penida Marine Adventure & Cliffs',
        summary: 'Speedboat to Nusa Penida to swim with giant manta rays and see T-Rex cliff.',
        activities: [
          { id: 'b9', time: '07:30 AM', title: 'Speedboat to Nusa Penida Island', location: 'Sanur Harbor', category: 'transfer', costUSD: 25, durationHours: 1.0, description: 'Glide across the crystal strait to the dramatic offshore limestone island.' },
          { id: 'b10', time: '09:30 AM', title: 'Manta Point Snorkeling with Giant Ocean Rays', location: 'South Penida Coast', category: 'activity', costUSD: 50, durationHours: 2.5, description: 'Swim alongside gentle 4-meter oceanic manta rays in crystalline azure water.' },
          { id: 'b11', time: '01:00 PM', title: 'Kelingking "T-Rex" Cliff Lookout & Diamond Beach', location: 'West Nusa Penida', category: 'sight', costUSD: 5, durationHours: 2.5, description: 'World-famous dinosaur-shaped headland dropping into churning turquoise waves.' },
          { id: 'b12', time: '06:00 PM', title: 'Uluwatu Sunset Clifftop Fire Dance & Seafood', location: 'Jimbaran Bay', category: 'food', costUSD: 35, durationHours: 2.5, description: 'Beachfront candlelit tables with grilled jumbo prawns, calamari, and cold Bintang.' }
        ]
      }
    ]
  },
  {
    id: 'iceland',
    name: 'Iceland Ring Road & Aurora',
    country: 'Iceland',
    region: 'europe',
    tagline: 'Glacial lagoons, cascading waterfalls, black sands & ethereal northern lights',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The land of fire and ice where volcanic geysers erupt beside colossal glaciers. Drive along dramatic basalt coastlines, swim in geothermal lagoons, walk through crystalline ice caves, and chase the dancing Aurora Borealis.',
    bestMonths: 'Sep – Mar (Northern Lights) & Jun – Aug (Midnight Sun & Lupines)',
    avgDailyBudgetUSD: 230,
    rating: 4.94,
    reviewsCount: 1980,
    styles: ['adventure', 'nature', 'luxury'],
    weatherTempC: 8,
    weatherCondition: 'Crisp Arctic Light & Refreshing Breeze',
    highlights: ['Jökulsárlón Glacier Lagoon', 'Reynisfjara Black Sand Beach', 'Blue Lagoon Geothermal Spa', 'Skógafoss & Seljalandsfoss Waterfalls', 'Vatnajökull Ice Cave Expedition'],
    popularDishes: [
      { name: 'Arctic Char & Skyr', desc: 'Pan-seared glacier trout with dill potatoes and whipped skyr' },
      { name: 'Kjötsúpa Traditional Lamb Soup', desc: 'Hearty slow-simmered Icelandic lamb with root vegetables' },
      { name: 'Cinnamon Snúður & Rye Bread Ice Cream', desc: 'Fresh bakeries pairing geothermal steam-baked bread treats' }
    ],
    visaInfo: 'Schengen country. Visa-free for up to 90 days for Western passport holders.',
    safetyScore: 99,
    timeZone: 'GMT+0 (UTC)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Golden Circle & Steaming Geysers',
        summary: 'Experience the tectonic rift at Thingvellir, Gullfoss golden falls, and Geysir.',
        activities: [
          { id: 'i1', time: '08:30 AM', title: 'Thingvellir National Park Silfra Fissure Walk', location: 'Thingvellir', category: 'sight', costUSD: 10, durationHours: 2.0, description: 'Walk between the North American and Eurasian tectonic plates.' },
          { id: 'i2', time: '11:30 AM', title: 'Strokkur Geysir Eruptions & Geothermal Field', location: 'Haukadalur', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Watch the geothermal fountain shoot boiling water 30 meters into the sky every 6-8 minutes.' },
          { id: 'i3', time: '01:30 PM', title: 'Gullfoss Roaring Canyon Waterfall', location: 'Hvítá River', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Two-tiered glacier-fed roaring cascade plunging into a deep rugged canyon.' },
          { id: 'i4', time: '04:30 PM', title: 'Secret Lagoon Geothermal Soak', location: 'Flúðir', category: 'activity', costUSD: 28, durationHours: 2.0, description: 'Iceland\'s oldest natural hot spring pool kept at a constant 38-40°C.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'South Coast Waterfalls & Black Sands',
        summary: 'Walk behind roaring water curtains and explore dramatic basalt columns.',
        activities: [
          { id: 'i5', time: '08:30 AM', title: 'Seljalandsfoss Behind-the-Falls Path', location: 'South Shore', category: 'sight', costUSD: 5, durationHours: 1.5, description: 'Walk into the cavern directly behind a 60-meter high thundering waterfall.' },
          { id: 'i6', time: '11:00 AM', title: 'Skógafoss Rainbow Mist Climb', location: 'Skógar', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Climb 527 steps alongside the roaring falls with views to the ocean.' },
          { id: 'i7', time: '01:30 PM', title: 'Reynisfjara Black Sand Beach & Basalt Columns', location: 'Vík í Mýrdal', category: 'sight', costUSD: 0, durationHours: 2.0, description: 'Jet-black volcanic sands framed by majestic sea stacks and hexagonal basalt pillars.' },
          { id: 'i8', time: '05:00 PM', title: 'Vatnajökull Blue Ice Cave Expedition', location: 'Skaftafell', category: 'activity', costUSD: 120, durationHours: 3.0, description: 'Superjeep ride and guided crampon trek inside luminous natural blue ice tunnels.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Glacier Lagoon & Northern Lights Chase',
        summary: 'Floating icebergs at Diamond Beach and midnight Aurora photography.',
        activities: [
          { id: 'i9', time: '09:00 AM', title: 'Jökulsárlón Amphibian Boat Tour', location: 'Glacier Lagoon', category: 'activity', costUSD: 60, durationHours: 2.0, description: 'Sail among 1,000-year-old brilliant blue icebergs breaking off Breiðamerkurjökull.' },
          { id: 'i10', time: '11:30 AM', title: 'Diamond Beach Crystal Ice Stroll', location: 'Breiðamerkursandur', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Glistening diamond-like chunks of iceberg washed up on volcanic black sand.' },
          { id: 'i11', time: '04:00 PM', title: 'Blue Lagoon Geothermal Retreat & Silica Mask', location: 'Reykjanes', category: 'activity', costUSD: 85, durationHours: 3.0, description: 'Milky-blue mineral-rich hot waters surrounded by black moss-covered lava fields.' },
          { id: 'i12', time: '09:30 PM', title: 'Guided Aurora Borealis Stargazing Safari', location: 'Dark Sky Zone', category: 'activity', costUSD: 70, durationHours: 3.5, description: 'Chase the dancing green and violet curtains of solar light with hot cocoa and expert photo guides.' }
        ]
      }
    ]
  },
  {
    id: 'santorini',
    name: 'Santorini & Cyclades',
    country: 'Greece',
    region: 'islands',
    tagline: 'Whitewashed cubist villas, cobalt blue domes & legendary caldera sunsets',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Born from a massive volcanic eruption in antiquity, Santorini features whitewashed cave houses clinging to crescent cliffs, sapphire blue domes, red sand beaches, and world-renowned Assyrtiko volcanic wines.',
    bestMonths: 'Apr – Jun & Sep – Nov (Sunny Aegean days with balmy evening breezes)',
    avgDailyBudgetUSD: 220,
    rating: 4.93,
    reviewsCount: 3670,
    styles: ['luxury', 'beaches', 'culinary', 'romantic' as TravelStyle],
    weatherTempC: 27,
    weatherCondition: 'Warm Aegean Sun & Light Meltemi Breeze',
    highlights: ['Oia Blue Domed Churches', 'Caldera Rim Hiking Trail (Fira to Oia)', 'Catamaran Sunset Cruise with BBQ', 'Akrotiri Prehistoric Ruins', 'Volcanic Red & Black Sand Beaches'],
    popularDishes: [
      { name: 'Santorini Tomato Fritters (Tomatokeftedes)', desc: 'Sweet sun-ripened volcanic cherry tomatoes with fresh mint' },
      { name: 'Grilled Calamari & Aegean Sea Bass', desc: 'Freshly caught fish dressed in wild oregano and Kalamata olive oil' },
      { name: 'Assyrtiko Wine & Baklava', desc: 'Mineral-rich dry white wine paired with layered pistachio pastry' }
    ],
    visaInfo: 'Schengen zone: 90 days visa-free for most passport holders.',
    safetyScore: 97,
    timeZone: 'GMT+2 (EET)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Caldera Clifftop Walk & Oia Sunset',
        summary: 'Walk through whitewashed alleys, admire blue domes, and watch the sun dip into the sea.',
        activities: [
          { id: 'st1', time: '09:00 AM', title: 'Fira to Imerovigli Clifftop Walk', location: 'Caldera Trail', category: 'sight', costUSD: 0, durationHours: 2.0, description: 'Scenic path passing cliffside churches with panoramic views across the volcanic caldera.' },
          { id: 'st2', time: '12:00 PM', title: 'Greek Meze Lunch overlooking the Abyss', location: 'Imerovigli Clifftop', category: 'food', costUSD: 35, durationHours: 1.5, description: 'Tzatziki, fava bean puree, grilled halloumi, and warm pita with local white wine.' },
          { id: 'st3', time: '03:30 PM', title: 'Oia Village Blue Domes & Windmill Exploration', location: 'Oia Village', category: 'sight', costUSD: 0, durationHours: 2.5, description: 'Photograph the world\'s most famous blue-domed churches and marble-paved alleys.' },
          { id: 'st4', time: '07:00 PM', title: 'Caldera Sunset Dinner at Kastro Oia', location: 'Oia Castle Ruins', category: 'food', costUSD: 85, durationHours: 2.0, description: 'Watch the cliffs glow golden and amber as the sun sets over the Aegean.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Catamaran Cruise & Hot Springs Swim',
        summary: 'Sail the volcanic crater, swim in sulfur thermal springs, and feast on grilled lobster.',
        activities: [
          { id: 'st5', time: '10:00 AM', title: 'Luxury Lagoon 450 Catamaran Sailing', location: 'Ammoudi Bay', category: 'activity', costUSD: 130, durationHours: 5.0, description: 'Sail past Indian Rock and the Venetian Lighthouse with unlimited Greek wine and open bar.' },
          { id: 'st6', time: '11:30 AM', title: 'Nea Kameni Volcanic Hot Springs Swimming', location: 'Volcano Bay', category: 'activity', costUSD: 0, durationHours: 1.0, description: 'Jump into warm mineral-rich reddish sulfur waters bubbling from submarine vents.' },
          { id: 'st7', time: '01:30 PM', title: 'Fresh BBQ Lunch on Board', location: 'White Beach Bay', category: 'food', costUSD: 0, durationHours: 1.5, description: 'Freshly grilled chicken souvlaki, Greek salad, tzatziki, and shrimp saganaki.' },
          { id: 'st8', time: '06:00 PM', title: 'Ammoudi Bay Octopus Dinner & Cliff Jumping', location: 'Ammoudi Port', category: 'sight', costUSD: 55, durationHours: 2.0, description: 'Charming fishing cove with sun-drying octopus hung over the emerald water.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Prehistoric Akrotiri & Volcanic Vineyards',
        summary: 'Explore Greece\'s Pompeii and tour cliffside basket-pruned vineyards.',
        activities: [
          { id: 'st9', time: '09:30 AM', title: 'Akrotiri Bronze Age Archaeological City', location: 'South Santorini', category: 'sight', costUSD: 14, durationHours: 2.0, description: 'Walk through preserved multi-story Minoan buildings buried under volcanic ash in 1600 BC.' },
          { id: 'st10', time: '12:00 PM', title: 'Red Beach & Perissa Black Sand Swim', location: 'Akrotiri & Perissa', category: 'sight', costUSD: 0, durationHours: 2.0, description: 'Unique contrasting volcanic sands with sun loungers and crystal waters.' },
          { id: 'st11', time: '03:30 PM', title: 'Santo Wines Clifftop Tasting Experience', location: 'Pyrgos', category: 'activity', costUSD: 45, durationHours: 2.0, description: 'Taste 6 flight varieties of ancient Kouloura basket-trained volcanic wines.' }
        ]
      }
    ]
  },
  {
    id: 'banff',
    name: 'Banff & Canadian Rockies',
    country: 'Canada',
    region: 'americas',
    tagline: 'Turquoise glacial lakes, jagged granite peaks & untamed alpine wilderness',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Canada’s first national park spans over 6,600 square kilometers of awe-inspiring Canadian Rocky Mountain wilderness. Featuring the unreal iridescent turquoise of Lake Louise and Moraine Lake, and abundant wildlife including elk, grizzly bears, and bighorn sheep.',
    bestMonths: 'Jun – Sep (Glacial Lakes & Wildflowers) & Dec – Apr (World-class Powder Skiing)',
    avgDailyBudgetUSD: 190,
    rating: 4.95,
    reviewsCount: 1840,
    styles: ['adventure', 'nature'],
    weatherTempC: 17,
    weatherCondition: 'Crisp Mountain Breeze',
    highlights: ['Moraine Lake & Valley of the Ten Peaks', 'Lake Louise & Fairmont Chateau', 'Icefields Parkway Scenic Drive', 'Banff Upper Hot Springs', 'Athabasca Glacier Ice Explorer'],
    popularDishes: [
      { name: 'Alberta AAA Prime Rib Steak', desc: 'Locally grass-fed beef grilled over hickory with truffle butter' },
      { name: 'Traditional Poutine', desc: 'Crispy hand-cut fries smothered in rich dark gravy and squeaky cheese curds' },
      { name: 'Warm Saskatoon Berry Pie', desc: 'Wild subalpine berries baked in flaky butter crust with maple ice cream' }
    ],
    visaInfo: 'eTA required for visa-exempt foreign nationals ($7 CAD online).',
    safetyScore: 98,
    timeZone: 'GMT-7 (MST)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Lake Louise & Lake Agnes Tea House',
        summary: 'Paddle turquoise waters and hike to a historic off-grid mountain tea house.',
        activities: [
          { id: 'bn1', time: '07:30 AM', title: 'Lake Louise Sunrise Canoe Experience', location: 'Lake Louise Boathouse', category: 'activity', costUSD: 95, durationHours: 2.0, description: 'Glide a red canoe across mirror-smooth glacial waters before the crowds arrive.' },
          { id: 'bn2', time: '10:00 AM', title: 'Lake Agnes Tea House Alpine Trail Hike', location: 'Lake Louise Trailhead', category: 'activity', costUSD: 0, durationHours: 3.0, description: 'Hike through pine forests past Mirror Lake up to a 1905 wooden tea house.' },
          { id: 'bn3', time: '01:30 PM', title: 'Homemade Soup & Fresh Baked Scones', location: 'Lake Agnes Tea House (2,135m)', category: 'food', costUSD: 22, durationHours: 1.0, description: 'Wholesome alpine lunch powered entirely by mountain hiking porters.' },
          { id: 'bn4', time: '04:30 PM', title: 'Banff Gondola & Sulphur Mountain Boardwalk', location: 'Banff Gondola', category: 'sight', costUSD: 52, durationHours: 2.0, description: 'Ride to 2,281m summit for 360-degree vistas across six Rocky Mountain ranges.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Moraine Lake & Icefields Parkway',
        summary: 'Marvel at the Valley of the Ten Peaks and cruise one of the world\'s greatest scenic drives.',
        activities: [
          { id: 'bn5', time: '08:00 AM', title: 'Moraine Lake Rockpile Viewpoint', location: 'Moraine Lake', category: 'sight', costUSD: 15, durationHours: 2.0, description: 'The famous "Twenty Dollar View" with brilliant blue waters cradled by 10 jagged peaks.' },
          { id: 'bn6', time: '11:00 AM', title: 'Icefields Parkway Drive to Peyto Lake', location: 'Hwy 93 North', category: 'sight', costUSD: 0, durationHours: 2.5, description: 'Stop at the wolf-head shaped Peyto Lake fed by Caldron Glacier.' },
          { id: 'bn7', time: '02:00 PM', title: 'Columbia Icefield All-Terrain Ice Explorer', location: 'Athabasca Glacier', category: 'activity', costUSD: 85, durationHours: 2.5, description: 'Ride massive 6-wheel Ice Explorers onto ancient 300m thick glacier ice and drink pure glacial melt.' },
          { id: 'bn8', time: '06:30 PM', title: 'Bison Burger & Local Craft Beer in Banff Town', location: 'Banff Avenue Brewing Co.', category: 'food', costUSD: 32, durationHours: 1.5, description: 'Locally raised Alberta bison with aged cheddar and flight of mountain-brewed IPAs.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Johnston Canyon & Upper Hot Springs',
        summary: 'Walk catwalks suspended over rushing waterfalls and soak in natural mineral springs.',
        activities: [
          { id: 'bn9', time: '09:00 AM', title: 'Johnston Canyon Lower & Upper Falls Trek', location: 'Bow Valley Parkway', category: 'sight', costUSD: 0, durationHours: 2.5, description: 'Suspended iron walkways fastened directly into deep limestone gorge walls.' },
          { id: 'bn10', time: '12:30 PM', title: 'Mountain Lunch in Fairmont Banff Springs Hotel', location: 'Waldhaus Restaurant', category: 'food', costUSD: 48, durationHours: 1.5, description: 'Bavarian-inspired schnitzel and fondue overlooking the roaring Bow Falls.' },
          { id: 'bn11', time: '03:30 PM', title: 'Banff Upper Hot Springs Thermal Mineral Soak', location: 'Mountain Ave', category: 'activity', costUSD: 16, durationHours: 2.0, description: 'Natural 40°C thermal mineral baths looking across to Mount Rundle.' }
        ]
      }
    ]
  },
  {
    id: 'marrakech',
    name: 'Marrakech & Sahara',
    country: 'Morocco',
    region: 'africa',
    tagline: 'Vibrant spice souks, terracotta palaces, riad courtyards & golden dunes',
    heroImage: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The Ochre City of Morocco is a mesmerizing sensory tapestry of serpentine medina alleys, fragrant spice pyramids, intricately carved cedar riads, tranquil Majorelle botanical gardens, and Sahara desert expeditions under starry skies.',
    bestMonths: 'Oct – Apr (Pleasant warm sunshine without intense summer desert heat)',
    avgDailyBudgetUSD: 110,
    rating: 4.88,
    reviewsCount: 2310,
    styles: ['culture', 'adventure', 'culinary'],
    weatherTempC: 24,
    weatherCondition: 'Warm Sun & Dry Desert Air',
    highlights: ['Jemaa el-Fnaa Night Market', 'Jardin Majorelle & YSL Museum', 'Bahia Palace Intricate Tilework', 'Agafay Desert Luxury Camp', 'Traditional Hammam & Argan Oil Ritual'],
    popularDishes: [
      { name: 'Slow-cooked Lamb Tagine with Prunes', desc: 'Tender lamb simmered in clay conical pot with toasted almonds & saffron' },
      { name: 'Pastilla (B\'stilla)', desc: 'Flaky filo pastry layered with spiced chicken, cinnamon, and powdered sugar' },
      { name: 'Fresh Mint Tea (Berber Whiskey)', desc: 'Gunpowder green tea poured high with fresh spearmint and orange blossom' }
    ],
    visaInfo: 'Visa-free for 90 days for US, EU, UK, Canada, Australia.',
    safetyScore: 89,
    timeZone: 'GMT+1 (WET)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Medina Labyrinth & Jemaa el-Fnaa Spectacle',
        summary: 'Navigate ancient souks, marvel at Moorish palaces, and feast amidst storytellers.',
        activities: [
          { id: 'm1', time: '09:00 AM', title: 'Bahia Palace & Saadian Tombs Exploration', location: 'Mellah Quarter', category: 'sight', costUSD: 7, durationHours: 2.0, description: '19th-century royal palace adorned with zellij tilework, stained glass, and marble courtyards.' },
          { id: 'm2', time: '11:30 AM', title: 'Artisanal Souk Safari & Spice Market Tour', location: 'Medina', category: 'activity', costUSD: 0, durationHours: 2.5, description: 'Explore leather tanners, brass lantern workshops, handwoven Berber carpets, and saffron merchants.' },
          { id: 'm3', time: '02:00 PM', title: 'Riad Rooftop Tagine Lunch', location: 'Nomad / Cafe des Epices', category: 'food', costUSD: 24, durationHours: 1.5, description: 'Modern Moroccan dining overlooking the bustling spice square.' },
          { id: 'm4', time: '06:30 PM', title: 'Jemaa el-Fnaa Night Food Market Atmosphere', location: 'Main Square', category: 'food', costUSD: 18, durationHours: 2.0, description: 'Smoke-filled vibrant night square with sizzling skewers, spiced snail broth, musicians, and performers.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Jardin Majorelle & Royal Hammam',
        summary: 'Wander Yves Saint Laurent\'s cobalt sanctuary and unwind in a steam spa.',
        activities: [
          { id: 'm5', time: '08:30 AM', title: 'Jardin Majorelle & Yves Saint Laurent Museum', location: 'Gueliz', category: 'sight', costUSD: 15, durationHours: 2.5, description: 'Cobalt blue villa framed by 300 exotic plant species and YSL haute couture gallery.' },
          { id: 'm6', time: '12:00 PM', title: 'Ben Youssef Madrasa Islamic College', location: 'Northern Medina', category: 'sight', costUSD: 5, durationHours: 1.5, description: '14th-century architectural marvel featuring carved cedarwood and stucco arabesques.' },
          { id: 'm7', time: '03:00 PM', title: 'Royal Black Soap & Argan Oil Hammam Ritual', location: 'Les Bains de Marrakech', category: 'activity', costUSD: 55, durationHours: 2.0, description: 'Eucalyptus steam scrub with kessa glove, rose water rinse, and relaxing argan massage.' },
          { id: 'm8', time: '07:30 PM', title: 'Fine Dining in 18th-century Palace Courtyard', location: 'Dar Moha', category: 'food', costUSD: 60, durationHours: 2.0, description: 'Gourmet pigeon pastilla and couscous seven vegetables around illuminated fountain.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Agafay Desert Sunset & Stargazing',
        summary: 'Camel trek across stone dunes and dine under infinite Saharan constellations.',
        activities: [
          { id: 'm9', time: '10:00 AM', title: 'Scenic Transfer to Agafay Rocky Desert', location: 'Agafay Desert', category: 'transfer', costUSD: 30, durationHours: 1.0, description: 'Drive out to lunar-like stony dunes with the snow-capped Atlas Mountains on the horizon.' },
          { id: 'm10', time: '01:00 PM', title: 'Desert Oasis Poolside Lunch & Berber Bread Making', location: 'Inara Camp', category: 'food', costUSD: 35, durationHours: 2.0, description: 'Bake traditional flatbread in clay ovens and relax in desert infinity pool.' },
          { id: 'm11', time: '05:00 PM', title: 'Golden Hour Camel Caravan & Quad Biking', location: 'Desert Dunes', category: 'activity', costUSD: 45, durationHours: 2.0, description: 'Ride through undulating desert ridges in traditional indigo cheche scarf.' },
          { id: 'm12', time: '08:00 PM', title: 'Candlelit Berber Feast by the Bonfire with Gnawa Music', location: 'Luxury Glamping Tent', category: 'activity', costUSD: 50, durationHours: 3.0, description: 'Authentic desert barbecue, live fireside lute performances, and professional telescope stargazing.' }
        ]
      }
    ]
  },
  {
    id: 'cape-town',
    name: 'Cape Town & Winelands',
    country: 'South Africa',
    region: 'africa',
    tagline: 'Table Mountain wonders, coastal penguin sanctuaries & historic wine valleys',
    heroImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Voted one of the most beautiful cities on Earth, Cape Town blends the towering flat-topped plateau of Table Mountain with two oceans, Boulders Beach African penguins, and world-class culinary estates in Stellenbosch.',
    bestMonths: 'Nov – Mar (Warm Southern Hemisphere summer & beach weather)',
    avgDailyBudgetUSD: 140,
    rating: 4.91,
    reviewsCount: 1650,
    styles: ['adventure', 'nature', 'culinary', 'beaches'],
    weatherTempC: 25,
    weatherCondition: 'Sunny Coastal Glow',
    highlights: ['Table Mountain Rotating Aerial Cableway', 'Boulders Beach African Penguin Colony', 'Cape Point & Cape of Good Hope', 'Franschhoek Wine Tram Experience', 'Kirstenbosch National Botanical Garden'],
    popularDishes: [
      { name: 'Cape Malay Bobotie', desc: 'Spiced minced meat baked with savory egg custard and yellow sultana rice' },
      { name: 'Fresh Atlantic Kingklip & Oysters', desc: 'Pan-roasted linefish with lemon caper sauce and Saldanha Bay oysters' },
      { name: 'Pinotage & Braai Platter', desc: 'South African wood-fired barbecue meats paired with signature bold red wine' }
    ],
    visaInfo: '90-day visa exemption for tourists from US, Canada, EU, UK, Australia.',
    safetyScore: 88,
    timeZone: 'GMT+2 (SAST)',
    defaultItinerary: [
      {
        dayNumber: 1,
        title: 'Table Mountain & Bo-Kaap Heritage',
        summary: 'Ascend the iconic plateau and explore colorful historic streets.',
        activities: [
          { id: 'ct1', time: '08:30 AM', title: 'Table Mountain Aerial Cableway Ascent', location: 'Tafelberg Rd', category: 'sight', costUSD: 24, durationHours: 2.5, description: 'Rotating 360-degree cable car ascending to 1,085m flat summit.' },
          { id: 'ct2', time: '11:30 AM', title: 'Bo-Kaap Vibrant Houses & Spice Walk', location: 'Bo-Kaap', category: 'sight', costUSD: 0, durationHours: 1.5, description: 'Pastel-painted cobblestone quarter celebrated for its Cape Malay cultural roots.' },
          { id: 'ct3', time: '01:30 PM', title: 'Cape Malay Cooking Class & Samosa Lunch', location: 'Rose Corner Cafe', category: 'activity', costUSD: 35, durationHours: 2.0, description: 'Fold crispy samosas and blend custom chili curry paste with local matriarchs.' },
          { id: 'ct4', time: '05:00 PM', title: 'Camps Bay Sunset Cocktail by the Palm Beach', location: 'Victoria Rd Promenade', category: 'food', costUSD: 28, durationHours: 2.0, description: 'Cocktails looking out over the Twelve Apostles mountain peaks and crashing surf.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Cape Peninsula & African Penguin Sanctuary',
        summary: 'Drive Chapman\'s Peak to the edge of the continent and meet wild penguins.',
        activities: [
          { id: 'ct5', time: '08:30 AM', title: 'Chapman\'s Peak Drive Coastal Scenic Route', location: 'Hout Bay to Noordhoek', category: 'transfer', costUSD: 6, durationHours: 1.5, description: 'One of the world\'s most breathtaking marine cliffside engineering marvels.' },
          { id: 'ct6', time: '10:30 AM', title: 'Boulders Beach African Penguin Boardwalk', location: 'Simon\'s Town', category: 'sight', costUSD: 12, durationHours: 2.0, description: 'Wander wooden boardwalks right beside hundreds of wild nesting African penguins.' },
          { id: 'ct7', time: '01:30 PM', title: 'Cape of Good Hope & Cape Point Funicular', location: 'Cape Point National Park', category: 'sight', costUSD: 25, durationHours: 3.0, description: 'Stand at the southwesternmost tip of the African continent where towering waves collide.' },
          { id: 'ct8', time: '07:00 PM', title: 'V&A Waterfront Seafood Dinner with Harbor Views', location: 'Victoria & Alfred Waterfront', category: 'food', costUSD: 45, durationHours: 2.0, description: 'Grilled crayfish and seafood potjie with live acoustic African marimba bands.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Stellenbosch & Franschhoek Wine Tram',
        summary: 'Hop-on hop-off double decker tram touring historic 300-year-old Cape Dutch wine estates.',
        activities: [
          { id: 'ct9', time: '09:30 AM', title: 'Franschhoek Wine Tram Estate Tour', location: 'Franschhoek Valley', category: 'activity', costUSD: 40, durationHours: 4.5, description: 'Open-sided vintage tram stopping at award-winning wine estates for cellar tours.' },
          { id: 'ct10', time: '01:30 PM', title: 'Artisanal Cheese & Biltong Pairing Lunch', location: 'Babylonstoren Estate', category: 'food', costUSD: 40, durationHours: 2.0, description: 'Dine in historic greenhouse surrounded by 8 acres of formal botanical kitchen gardens.' },
          { id: 'ct11', time: '04:30 PM', title: 'Kirstenbosch Tree Canopy "Boomslang" Walk', location: 'Newlands', category: 'sight', costUSD: 14, durationHours: 2.0, description: 'Curved steel and timber bridge floating above the treetops with mountain views.' }
        ]
      }
    ]
  }
];

export const VACATION_PACKAGES: VacationPackage[] = [
  {
    id: 'pkg-transinex-choral-vienna',
    title: 'Transinex International Choral & Youth Orchestra Festival: Vienna & Prague',
    destinationId: 'swiss-alps',
    destinationName: 'Vienna, Salzburg & Prague',
    country: 'Austria & Czech Republic',
    durationDays: 10,
    durationNights: 9,
    priceUSD: 2380,
    originalPriceUSD: 2980,
    discountPercentage: 20,
    badge: '🎵 Transinex Music Festival',
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.99,
    reviewsCount: 385,
    flightIncluded: true,
    hotelRating: 4,
    mealPlan: 'Full Board (Breakfast, Lunch & Dinner) for Choirs & Bands',
    itineraryHighlights: [
      'Gala Concert Performance in Historic Golden Hall / St. Stephen’s Cathedral',
      'Masterclasses with European Maestros & Choral Clinicians',
      'Friendship Concert & Cultural Exchange with Austrian & Czech Youth Choirs',
      'Mozart Birthplace & Prague Old Town Square Educational Guided Immersion',
      'Dedicated Transinex Tour Manager & Stage Logistics Coordinator from Singapore'
    ],
    departureDates: ['2026-09-12', '2026-10-10', '2026-11-15', '2026-12-08'],
    groupSizeMax: 35,
    overview: 'Transinex’s flagship international music festival tour for school choirs, concert bands, and youth orchestras. Perform in Europe’s most revered concert halls with seamless instrument transport, stage rehearsals, and cultural exchange.'
  },
  {
    id: 'pkg-transinex-japan-stem',
    title: 'Japan Educational Learning Journey: Tokyo STEM, Robotics & Kyoto Heritage',
    destinationId: 'kyoto',
    destinationName: 'Tokyo, Tsukuba & Kyoto',
    country: 'Japan',
    durationDays: 8,
    durationNights: 7,
    priceUSD: 1950,
    originalPriceUSD: 2450,
    discountPercentage: 20,
    badge: '🎓 Educational Immersion',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
    rating: 4.98,
    reviewsCount: 512,
    flightIncluded: true,
    hotelRating: 4,
    mealPlan: 'Daily Japanese Buffet Breakfast + School Group Dinners',
    itineraryHighlights: [
      'JAXA Space Center & Miraikan National Museum of Emerging Science Visit',
      'Japanese High School / University Student Interactive Cultural Exchange',
      'Tokyo Bullet Train Shinkansen Ride with Physics & Transport Case Study',
      'Kyoto Traditional Artisan Workshops (Kintsugi pottery & Yuzen silk dyeing)',
      'Certified Educational Travel Leader & 24/7 Safety Escort'
    ],
    departureDates: ['2026-09-20', '2026-10-18', '2026-11-22', '2026-12-14'],
    groupSizeMax: 28,
    overview: 'An enriching pedagogical journey blending cutting-edge artificial intelligence, aerospace technology, and centuries of preserved Japanese craftsmanship for students and curious explorers.'
  },
  {
    id: 'pkg-kyoto-zen',
    title: 'Imperial Japan: Kyoto Temples, Bullet Train & Mount Fuji',
    destinationId: 'kyoto',
    destinationName: 'Kyoto & Tokyo',
    country: 'Japan',
    durationDays: 8,
    durationNights: 7,
    priceUSD: 1890,
    originalPriceUSD: 2490,
    discountPercentage: 24,
    badge: '🌟 Bestseller 2026',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 428,
    flightIncluded: true,
    hotelRating: 5,
    mealPlan: 'Daily Gourmet Breakfast + 2 Kaiseki Dinners',
    itineraryHighlights: [
      'Roundtrip International Flights & 7-Day JR Shinkansen Pass',
      '5-Star Traditional Machiya Boutique Ryokan Stay with Onsen',
      'VIP Early Access to Fushimi Inari & Arashiyama Bamboo Grove',
      'Private Master Tea Ceremony & Geisha Cultural Evening',
      'Dedicated English-speaking Local Cultural Specialist Guide'
    ],
    departureDates: ['2026-09-15', '2026-10-04', '2026-10-22', '2026-11-10', '2026-12-02'],
    groupSizeMax: 12,
    overview: 'Experience the ultimate harmony of ancient Japanese traditions and futuristic bullet trains. Immerse in tranquil Kyoto moss gardens, indulge in multi-course Kaiseki cuisine, and unwind in natural volcanic hot spring onsens.'
  },
  {
    id: 'pkg-amalfi-luxury',
    title: 'Amalfi Coast Dolce Vita: Positano, Ravello & Capri Yachting',
    destinationId: 'amalfi',
    destinationName: 'Amalfi Coast & Capri',
    country: 'Italy',
    durationDays: 7,
    durationNights: 6,
    priceUSD: 2240,
    originalPriceUSD: 2980,
    discountPercentage: 25,
    badge: '🍋 Luxury Romance',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    rating: 4.94,
    reviewsCount: 312,
    flightIncluded: true,
    hotelRating: 5,
    mealPlan: 'Daily Buffet Breakfast + Sunset Seafood Banquet',
    itineraryHighlights: [
      'Clifftop Sea-View Terrace Suite in Positano',
      'Private Sunset Yacht Charter to Capri & Blue Grotto',
      'Path of the Gods Guided Hiking Expedition with Farmhouse Feast',
      'Exclusive Villa Rufolo & Cimbrone Garden Access in Ravello',
      'Private Mercedes Chauffeured Coastal Transfers'
    ],
    departureDates: ['2026-09-10', '2026-09-24', '2026-10-08', '2026-10-20'],
    groupSizeMax: 10,
    overview: 'The quintessential Italian luxury escape. Savor freshly caught seafood over azure Mediterranean waters, cruise past the iconic Faraglioni sea stacks on a private mahogany cruiser, and breathe in sweet lemon blossoms.'
  },
  {
    id: 'pkg-swiss-peaks',
    title: 'Grand Swiss Alpine Odyssey: Matterhorn, Glacier Express & Spas',
    destinationId: 'swiss-alps',
    destinationName: 'Zermatt, Interlaken & St. Moritz',
    country: 'Switzerland',
    durationDays: 7,
    durationNights: 6,
    priceUSD: 2450,
    originalPriceUSD: 3150,
    discountPercentage: 22,
    badge: '🏔️ Alpine Exclusive',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    rating: 4.97,
    reviewsCount: 265,
    flightIncluded: true,
    hotelRating: 5,
    mealPlan: 'Swiss Breakfasts + Traditional Alpine Fondue Night',
    itineraryHighlights: [
      'First-Class Glacier Express Panoramic Train Window Seat',
      'Matterhorn Glacier Paradise 3S Gondola Pass (3,883m)',
      '5-Star Alpine Spa Resort Stay with Heated Outdoor Pools',
      'Guided Hike of the Five Lakes Mirror Trail',
      'Swiss Chocolate & Artisanal Cheese Craft Masterclass'
    ],
    departureDates: ['2026-09-18', '2026-10-02', '2026-10-16', '2026-11-05'],
    groupSizeMax: 14,
    overview: 'Witness nature at its most majestic among 4,000-meter snowcapped giants. Glide across soaring viaducts in floor-to-ceiling glass train cars and plunge into mineral thermal springs.'
  },
  {
    id: 'pkg-bali-retreat',
    title: 'Bali Tropical Harmony: Ubud Jungles, Nusa Penida & Clifftop Villas',
    destinationId: 'bali',
    destinationName: 'Ubud, Nusa Penida & Uluwatu',
    country: 'Indonesia',
    durationDays: 9,
    durationNights: 8,
    priceUSD: 1190,
    originalPriceUSD: 1690,
    discountPercentage: 30,
    badge: '🔥 30% Off Super Deal',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.91,
    reviewsCount: 540,
    flightIncluded: true,
    hotelRating: 5,
    mealPlan: 'All Breakfasts + Daily Afternoon Tea & Floating Brunch',
    itineraryHighlights: [
      'Private Pool Jungle Villa in Ubud & Beachfront Suite in Uluwatu',
      'Mount Batur Sunrise Volcano Trek & Volcanic Hot Springs',
      'Private Speedboat Tour to Nusa Penida & Manta Ray Snorkeling',
      'Traditional Balinese Royal Spa & Flower Bath Ceremony',
      'Uluwatu Sunset Clifftop Kecak Fire Dance Show'
    ],
    departureDates: ['2026-09-08', '2026-09-22', '2026-10-12', '2026-11-01', '2026-11-20'],
    groupSizeMax: 12,
    overview: 'Rejuvenate mind and spirit in Southeast Asia’s most captivating island. From lush emerald rice terraces and sacred water temples to swimming alongside gentle manta rays.'
  },
  {
    id: 'pkg-iceland-aurora',
    title: 'Iceland Ring Road Expedition: Glaciers, Ice Caves & Aurora Lights',
    destinationId: 'iceland',
    destinationName: 'Reykjavik, South Coast & Vatnajökull',
    country: 'Iceland',
    durationDays: 8,
    durationNights: 7,
    priceUSD: 2190,
    originalPriceUSD: 2790,
    discountPercentage: 21,
    badge: '🌌 Aurora Borealis Guaranteed',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop',
    rating: 4.95,
    reviewsCount: 380,
    flightIncluded: true,
    hotelRating: 4,
    mealPlan: 'Full Nordic Breakfasts + 3 Glacier Gourmet Dinners',
    itineraryHighlights: [
      '4x4 Superjeep Excursion into Natural Blue Crystal Ice Caves',
      'Jökulsárlón Glacier Lagoon Zodiac Boat Tour among Icebergs',
      'Blue Lagoon & Sky Lagoon Geothermal Spa Access',
      'Nightly Guided Aurora Photography Safaris with Astronomer',
      'Reynisfjara Black Sand Beach & Golden Circle Private Tour'
    ],
    departureDates: ['2026-09-28', '2026-10-15', '2026-11-01', '2026-11-18', '2026-12-05'],
    groupSizeMax: 12,
    overview: 'An otherworldly journey through the land of dramatic volcanic contrasts. Walk behind thundering waterfalls, stand on basalt black sands, and marvel at the luminous green ribbons of the Northern Lights.'
  },
  {
    id: 'pkg-santorini-aegean',
    title: 'Santorini & Mykonos Cycladic Dream: Caldera Suites & Sunset Cruises',
    destinationId: 'santorini',
    destinationName: 'Santorini & Mykonos',
    country: 'Greece',
    durationDays: 7,
    durationNights: 6,
    priceUSD: 1980,
    originalPriceUSD: 2580,
    discountPercentage: 23,
    badge: '🇬🇷 Island Escape',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
    rating: 4.93,
    reviewsCount: 410,
    flightIncluded: true,
    hotelRating: 5,
    mealPlan: 'Caldera Terrace Champagne Breakfasts',
    itineraryHighlights: [
      'Cave Suite with Private Outdoor Plunge Pool overlooking Caldera',
      'Catamaran Sunset Sailing with BBQ & Volcanic Hot Springs Dip',
      'High-Speed Hydrofoil Inter-island Transfers',
      'Akrotiri Minoan Ruins VIP Tour & Wine Masterclass',
      'Oia Sunset Viewpoint Reserved Table Dining'
    ],
    departureDates: ['2026-09-12', '2026-09-26', '2026-10-10', '2026-10-24'],
    groupSizeMax: 10,
    overview: 'Live the postcard vision of the Greek Isles with whitewashed cliffside towns, cobalt domes, infinity pools touching the clouds, and world-class Mediterranean dining.'
  }
];

export const FLIGHT_OPTIONS: FlightOption[] = [
  {
    id: 'fl-101',
    airline: 'Singapore Airlines',
    airlineCode: 'SQ',
    flightNumber: 'SQ 618',
    fromCode: 'JFK',
    fromCity: 'New York',
    toCode: 'KIX',
    toCity: 'Kyoto / Osaka',
    departureTime: '10:30 AM',
    arrivalTime: '02:45 PM (+1)',
    duration: '15h 15m',
    stops: 0,
    priceUSD: 890,
    cabinClass: 'Economy Premium',
    baggageIncluded: '2x 23kg Checked Bags + Carry-on',
    aircraft: 'Airbus A350-900',
    seatsLeft: 5
  },
  {
    id: 'fl-102',
    airline: 'All Nippon Airways (ANA)',
    airlineCode: 'NH',
    flightNumber: 'NH 110',
    fromCode: 'LAX',
    fromCity: 'Los Angeles',
    toCode: 'HND',
    toCity: 'Tokyo / Kyoto',
    departureTime: '11:50 AM',
    arrivalTime: '03:30 PM (+1)',
    duration: '11h 40m',
    stops: 0,
    priceUSD: 780,
    cabinClass: 'Economy Flex',
    baggageIncluded: '2x 23kg Checked Bags',
    aircraft: 'Boeing 787-9 Dreamliner',
    seatsLeft: 7
  },
  {
    id: 'fl-103',
    airline: 'Emirates',
    airlineCode: 'EK',
    flightNumber: 'EK 205',
    fromCode: 'JFK',
    fromCity: 'New York',
    toCode: 'NAP',
    toCity: 'Naples / Amalfi',
    departureTime: '06:15 PM',
    arrivalTime: '09:20 AM (+1)',
    duration: '9h 05m',
    stops: 0,
    priceUSD: 720,
    cabinClass: 'Economy Standard',
    baggageIncluded: '1x 23kg Checked + 1 Carry-on',
    aircraft: 'Boeing 777-300ER',
    seatsLeft: 4
  },
  {
    id: 'fl-104',
    airline: 'Swiss International Air Lines',
    airlineCode: 'LX',
    flightNumber: 'LX 15',
    fromCode: 'JFK',
    fromCity: 'New York',
    toCode: 'ZRH',
    toCity: 'Zurich / Zermatt',
    departureTime: '08:45 PM',
    arrivalTime: '10:35 AM (+1)',
    duration: '7h 50m',
    stops: 0,
    priceUSD: 690,
    cabinClass: 'Economy Saver',
    baggageIncluded: '1x 23kg Checked Bag',
    aircraft: 'Boeing 777-300ER',
    seatsLeft: 9
  },
  {
    id: 'fl-105',
    airline: 'Qatar Airways',
    airlineCode: 'QR',
    flightNumber: 'QR 702',
    fromCode: 'LHR',
    fromCity: 'London',
    toCode: 'DPS',
    toCity: 'Bali Denpasar',
    departureTime: '03:10 PM',
    arrivalTime: '05:40 PM (+1)',
    duration: '16h 30m',
    stops: 1,
    stopoverCity: 'Doha (1h 45m transit)',
    priceUSD: 810,
    cabinClass: 'Economy Comfort',
    baggageIncluded: '2x 23kg Checked Bags',
    aircraft: 'Airbus A350-1000',
    seatsLeft: 3
  },
  {
    id: 'fl-106',
    airline: 'Icelandair',
    airlineCode: 'FI',
    flightNumber: 'FI 614',
    fromCode: 'JFK',
    fromCity: 'New York',
    toCode: 'KEF',
    toCity: 'Reykjavik',
    departureTime: '08:15 PM',
    arrivalTime: '06:10 AM (+1)',
    duration: '5h 55m',
    stops: 0,
    priceUSD: 460,
    cabinClass: 'Economy Light',
    baggageIncluded: 'Carry-on Included',
    aircraft: 'Boeing 737 MAX 8',
    seatsLeft: 12
  }
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'stay-kyoto-hoshinoya',
    name: 'Hoshinoya Kyoto Riverside Sanctuary',
    destinationId: 'kyoto',
    destinationName: 'Kyoto',
    location: 'Arashiyama, Kyoto',
    starRating: 5,
    guestRating: 9.8,
    reviewsCount: 310,
    pricePerNightUSD: 520,
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Riverside Pavilion with Tatami & Hinoki Cedar Tub',
    amenities: ['Private Boat Arrival', 'Thermal Onsen Baths', 'Michelin Kaiseki Dining', 'High-Speed Wi-Fi', 'Zen Tea Garden'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '👑 Exceptional 9.8'
  },
  {
    id: 'stay-amalfi-le-sirenuse',
    name: 'Villa Bellavista Clifftop Resort Positano',
    destinationId: 'amalfi',
    destinationName: 'Amalfi Coast',
    location: 'Via Cristoforo Colombo, Positano',
    starRating: 5,
    guestRating: 9.7,
    reviewsCount: 440,
    pricePerNightUSD: 680,
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Deluxe Sea View Suite with Balcony & Jacuzzi',
    amenities: ['Cliffside Infinity Pool', 'Private Beach Access', 'Oyster & Champagne Bar', 'Full Service Spa', 'Concierge Speedboat'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '🌊 Breathtaking Views'
  },
  {
    id: 'stay-swiss-cervo',
    name: 'Cervo Mountain Luxury Chalet Zermatt',
    destinationId: 'swiss-alps',
    destinationName: 'Swiss Alps',
    location: 'Riedweg, Zermatt',
    starRating: 5,
    guestRating: 9.6,
    reviewsCount: 290,
    pricePerNightUSD: 590,
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Matterhorn Peak Suite with Open Fireplace & Sauna',
    amenities: ['Ski-in/Ski-out Access', 'Alpine Ashram Spa', 'Heated Outdoor Infinity Tub', 'Organic Mountain Kitchen', 'Matterhorn View Terrace'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '🎿 Ski-in / Ski-out'
  },
  {
    id: 'stay-bali-hanging-gardens',
    name: 'Hanging Gardens Rainforest Estate Ubud',
    destinationId: 'bali',
    destinationName: 'Bali',
    location: 'Buahan, Ubud, Bali',
    starRating: 5,
    guestRating: 9.5,
    reviewsCount: 680,
    pricePerNightUSD: 380,
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Panoramic Jungle Pool Villa',
    amenities: ['Iconic Tiered Infinity Pool', 'Funicular Train in Jungle', 'Ayurvedic Spa Pavilions', 'Yoga Pavilion', 'Complimentary High Tea'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '🌿 World\'s Best Pool'
  },
  {
    id: 'stay-iceland-retreat',
    name: 'The Retreat at Blue Lagoon Iceland',
    destinationId: 'iceland',
    destinationName: 'Iceland',
    location: 'Grindavik, Iceland',
    starRating: 5,
    guestRating: 9.9,
    reviewsCount: 350,
    pricePerNightUSD: 740,
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Lava Suite with Private Geothermal Lagoon Access',
    amenities: ['Private Silica Lagoon', 'Subterranean Spa', 'Michelin-selected Dining', 'Floor-to-Ceiling Moss Views', 'Aurora Wake-Up Service'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '💎 Pure Luxury 9.9'
  },
  {
    id: 'stay-santorini-grace',
    name: 'Grace Hotel Auberge Collection Santorini',
    destinationId: 'santorini',
    destinationName: 'Santorini',
    location: 'Imerovigli, Santorini',
    starRating: 5,
    guestRating: 9.8,
    reviewsCount: 520,
    pricePerNightUSD: 650,
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop'
    ],
    roomType: 'Deluxe Caldera Plunge Pool Suite',
    amenities: ['World-famous Infinity Pool', 'Varoulko Santorini Dining', 'Champagne Sunset Lounge', 'In-suite Spa Treatments', '24/7 Island Concierge'],
    freeCancellation: true,
    breakfastIncluded: true,
    badge: '🌅 Ultimate Sunset'
  }
];

export const EXPERIENCES: ExperienceOption[] = [
  {
    id: 'exp-kyoto-tea',
    title: 'Private Authentic Urasenke Tea Master Ceremony & Kimono',
    destinationId: 'kyoto',
    destinationName: 'Kyoto',
    category: 'Culture & Heritage',
    durationHours: 2.5,
    priceUSD: 85,
    rating: 4.98,
    reviewsCount: 610,
    heroImage: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=800&auto=format&fit=crop',
    includesGuide: true,
    freeCancellation: true,
    groupSize: 'Max 6 people',
    overview: 'Step inside a 300-year-old preserved Machiya teahouse. Wear an authentic silk kimono and learn the philosophical art of Japanese hospitality (Omotenashi) while whisking ceremonial grade matcha.'
  },
  {
    id: 'exp-amalfi-boat',
    title: 'Capri & Blue Grotto Sunset Yacht Cruise with Prosecco & Swim',
    destinationId: 'amalfi',
    destinationName: 'Amalfi Coast',
    category: 'Cruises & Sailing',
    durationHours: 6.0,
    priceUSD: 160,
    rating: 4.96,
    reviewsCount: 840,
    heroImage: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800&auto=format&fit=crop',
    includesGuide: true,
    freeCancellation: true,
    groupSize: 'Max 10 people',
    overview: 'Sail along the dramatic Sorrentine cliffs to the magical Isle of Capri. Swim in crystal azure coves, glide through the iridescent Blue Grotto, and toast the sunset with local limoncello and prosecco.'
  },
  {
    id: 'exp-swiss-ice',
    title: 'Matterhorn 3,883m Glacier Paradise & Underground Ice Palace',
    destinationId: 'swiss-alps',
    destinationName: 'Swiss Alps',
    category: 'High-Altitude Adventure',
    durationHours: 4.0,
    priceUSD: 110,
    rating: 4.95,
    reviewsCount: 430,
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    includesGuide: true,
    freeCancellation: true,
    groupSize: 'Max 12 people',
    overview: 'Ascend to Europe\'s highest cable car station at 3,883 meters. Walk through glistening ice caverns carved 15 meters inside the glacier and enjoy 360-degree views of 38 alpine 4,000m peaks.'
  },
  {
    id: 'exp-bali-manta',
    title: 'Nusa Penida Giant Manta Ray Snorkeling & Kelingking Cliff Tour',
    destinationId: 'bali',
    destinationName: 'Bali',
    category: 'Marine Wildlife',
    durationHours: 8.0,
    priceUSD: 75,
    rating: 4.92,
    reviewsCount: 1120,
    heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop',
    includesGuide: true,
    freeCancellation: true,
    groupSize: 'Small Group',
    overview: 'Snorkel directly beside magnificent 4-meter oceanic manta rays in crystal-clear waters, followed by scenic island visits to Kelingking T-Rex cliff and Diamond Beach.'
  }
];

export const EXPERIENCE_OPTIONS = EXPERIENCES;

export const TRAVELER_REVIEWS: TravelerReview[] = [
  {
    id: 'rev-1',
    authorName: 'Elena & Marcus Vance',
    authorLocation: 'San Francisco, CA',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    destinationName: 'Kyoto & Tokyo, Japan',
    rating: 5,
    date: 'August 2026',
    tripType: 'Honeymoon Odyssey',
    reviewText: 'Terra Voyages planned the trip of our lifetime. The custom day-by-day planner was completely seamless, and our private tea master experience in Arashiyama brought us to tears of joy. Having the train passes and boutique ryokan bookings synchronized in one place saved us hours of stress.',
    helpfulCount: 48
  },
  {
    id: 'rev-2',
    authorName: 'Dr. Julian Thorne',
    authorLocation: 'London, UK',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    destinationName: 'Amalfi Coast, Italy',
    rating: 5,
    date: 'July 2026',
    tripType: 'Luxury Anniversary',
    reviewText: 'From the private boat charter around Capri to our cliffside table at Kastro, everything was executed to absolute perfection. The live currency toggle and direct flight search made organizing this for my wife completely effortless.',
    helpfulCount: 36
  },
  {
    id: 'rev-3',
    authorName: 'Sophia Lin & Family',
    authorLocation: 'Vancouver, Canada',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    destinationName: 'Banff National Park, Canada',
    rating: 5,
    date: 'August 2026',
    tripType: 'Family Adventure',
    reviewText: 'The custom itinerary builder is hands down the best tool I have ever used. We adjusted our daily activities, monitored costs live, and had all confirmation vouchers ready for our glacier ice explorer ride. Outstanding craftsmanship!',
    helpfulCount: 29
  }
];
