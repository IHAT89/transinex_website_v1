import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Compass, 
  CheckCircle2, 
  BookOpen, 
  Luggage, 
  Utensils, 
  ShieldCheck,
  Bot
} from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

interface AITravelAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AdvisorResponse {
  query: string;
  destination: string;
  summary: string;
  packingTips: string[];
  hiddenGems: string[];
  etiquetteTips: string[];
  estimatedDailyBudget: string;
}

export const AITravelAdvisorModal: React.FC<AITravelAdvisorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDest, setSelectedDest] = useState('kyoto');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentAdvice, setCurrentAdvice] = useState<AdvisorResponse | null>({
    query: 'Essential guide, packing & cultural etiquette for Kyoto',
    destination: 'Kyoto, Japan',
    summary: 'Kyoto combines serene Zen temples with exquisite culinary heritage. Visiting in spring or autumn yields breathtaking views, but requires comfortable walking footwear and respecting traditional shrine etiquette.',
    packingTips: [
      'Slip-on footwear: You will frequently remove shoes when entering temples and traditional tatami restaurants.',
      'Modest lightweight layers: Shoulders and knees should be covered inside active Buddhist monasteries.',
      'Coin pouch: Japan is still partially cash-centric; 100-yen coins are essential for temple donation boxes and lockers.',
      'Portable Wi-Fi / eSIM for navigating the intricate bus network.'
    ],
    hiddenGems: [
      'Gio-ji Moss Temple in Arashiyama: A secluded green jewel with lush emerald moss carpets far less crowded than central spots.',
      'Murin-an Garden: Private Meiji-era landscape villa with cascading stream and quiet tea house.',
      'Pontocho Alley at Twilight: Narrow lantern-lit walkway alongside the Kamogawa River.'
    ],
    etiquetteTips: [
      'Never walk while eating street food; finish snacks beside the vendor stall before moving.',
      'Do not photograph geishas or maikos without explicit polite permission in Gion.',
      'Silence mobile phones on all public trains and subways.'
    ],
    estimatedDailyBudget: '$150 - $220 USD / day (including boutique stay, JR passes & Kaiseki lunch)'
  });

  if (!isOpen) return null;

  const quickPrompts = [
    { label: '🍵 Kyoto Food & Tea Guide', destId: 'kyoto', query: 'Best hidden tea masters and kaiseki spots in Kyoto' },
    { label: '🍋 Amalfi Coast Yachting & Sights', destId: 'amalfi', query: 'How to navigate Capri and Positano by ferry and private boat' },
    { label: '🏔️ Swiss Alps Hiking & Gear', destId: 'swiss-alps', query: 'Packing and rail pass strategies for Zermatt & Matterhorn' },
    { label: '🌌 Iceland Aurora & Winter Prep', destId: 'iceland', query: 'Winter driving tips and thermal gear for Iceland ring road' },
    { label: '🏝️ Bali Manta Rays & Jungles', destId: 'bali', query: 'Best diving spots and sacred temple purification rituals in Bali' },
  ];

  const handleGenerateAdvice = (destId: string, queryText: string) => {
    setIsGenerating(true);
    const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];

    setTimeout(() => {
      let advice: AdvisorResponse;

      if (destId === 'amalfi') {
        advice = {
          query: queryText,
          destination: 'Amalfi Coast, Italy',
          summary: 'The Amalfi Coast is a dramatic vertical paradise. Steep staircases and cliffside roads mean packing light and prioritizing hydrofoil sea transport over cramped coastal buses.',
          packingTips: [
            'Sturdy non-slip sandals or sneakers for climbing hundreds of Positano stone steps.',
            'UPF 50+ linen shirts, wide-brim sun hats, and reef-safe sunscreen.',
            'Water shoes for pebbled Mediterranean coves and cliff-jumping grottos.',
            'Light evening shawl for breezy clifftop dining in Ravello.'
          ],
          hiddenGems: [
            'Fiordo di Furore: Dramatic natural fjord spanned by an arched bridge over emerald waters.',
            'Villa Cimbrone Infinity Terrace in Ravello: Endless views 350 meters above the sea.',
            'Atrani Village: Tiny tranquil fishing hamlet just 10 minutes walk from bustling Amalfi.'
          ],
          etiquetteTips: [
            'Cappuccino is strictly a morning beverage before 11:00 AM; order espresso after lunch or dinner.',
            'Cover shoulders when entering Duomo di Amalfi Cathedral.',
            'Tipping is customary for private skippers (10-15%) but modest in family trattorias (round up the bill).'
          ],
          estimatedDailyBudget: '$220 - $340 USD / day (including coastal transfers, sea-view terrace dining)'
        };
      } else if (destId === 'swiss-alps') {
        advice = {
          query: queryText,
          destination: 'Swiss Alps & Zermatt',
          summary: 'High alpine terrain with pristine air and world-class scenic trains. Layering is key as temperatures fluctuate sharply between valley villages and 3,800m glacier summits.',
          packingTips: [
            'Merino wool base layers and windproof Gore-Tex shell jacket.',
            'UV Category 3 or 4 sunglasses (glacier light reflection is intense).',
            'Swiss Travel Pass downloaded to your mobile wallet for seamless train boarding.',
            'Universal Type-J power adapter (Swiss three-pin grounded plugs).'
          ],
          hiddenGems: [
            'Riffelsee early morning: Mirror reflection of the Matterhorn before wind ripples the water.',
            'Findeln hamlet: Traditional sun-blackened timber chalets with award-winning farm-to-table dining.',
            'Gorner Gorge wooden footbridge suspended over roaring glacial turquoise meltwater.'
          ],
          etiquetteTips: [
            'Punctuality is sacred: Swiss trains depart precisely on the designated second.',
            'Always greet fellow hikers with "Grüezi" when passing on alpine trails.',
            'Never drink beer with fondue—stick with white wine (Fendant) or hot black tea to aid digestion.'
          ],
          estimatedDailyBudget: '$260 - $380 USD / day (including mountain railways and mountain huts)'
        };
      } else {
        advice = {
          query: queryText,
          destination: `${dest.name}, ${dest.country}`,
          summary: `Curated strategic recommendations for ${dest.name}. Known for ${dest.tagline.toLowerCase()}, this destination offers exceptional value when planned in harmony with local seasons.`,
          packingTips: [
            'Versatile breathable layers tailored for ' + dest.weatherCondition.toLowerCase() + '.',
            'Universal travel power bank and travel insurance documentation.',
            'Eco-friendly refillable water bottle and compact daypack for day trips.'
          ],
          hiddenGems: dest.highlights.map(h => `${h}: Iconic landmark recommended for early morning exploration.`),
          etiquetteTips: [
            'Carry local currency for artisanal markets and family-run restaurants.',
            'Respect local sacred sites and follow photography guidelines at religious monuments.',
            'Download offline navigation maps prior to arrival.'
          ],
          estimatedDailyBudget: `$${dest.avgDailyBudgetUSD} - $${dest.avgDailyBudgetUSD + 80} USD / day`
        };
      }

      setCurrentAdvice(advice);
      setIsGenerating(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        id="modal-ai-advisor"
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5 shadow-md shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif-display text-lg font-bold text-white">Smart Travel Concierge</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AI Grounded
                </span>
              </div>
              <p className="text-xs text-slate-400">Personalized packing, cultural etiquette & secret spot advisories</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Question Prompts */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase text-slate-500 shrink-0">Popular Guides:</span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedDest(p.destId);
                handleGenerateAdvice(p.destId, p.query);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 border border-slate-800 text-xs font-medium whitespace-nowrap transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {isGenerating ? (
            <div className="py-16 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
              <p className="text-sm font-semibold text-white">Analyzing destination knowledge & travel guidelines...</p>
              <p className="text-xs text-slate-400">Synthesizing packing lists, seasonal weather, and local customs.</p>
            </div>
          ) : currentAdvice && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Destination Header Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 border border-emerald-500/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Expert Advisory Report</span>
                  <span className="font-mono text-xs font-bold text-cyan-300">{currentAdvice.estimatedDailyBudget}</span>
                </div>
                <h4 className="font-serif-display text-xl font-bold text-white">
                  {currentAdvice.destination}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {currentAdvice.summary}
                </p>
              </div>

              {/* 3 Pillars: Packing, Hidden Gems, Etiquette */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Packing */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <h5 className="font-bold text-white text-xs flex items-center gap-1.5 text-emerald-400">
                    <Luggage className="w-4 h-4" />
                    <span>Essential Packing List</span>
                  </h5>
                  <ul className="space-y-2">
                    {currentAdvice.packingTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-slate-300 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hidden Gems */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <h5 className="font-bold text-white text-xs flex items-center gap-1.5 text-cyan-400">
                    <Compass className="w-4 h-4" />
                    <span>Secret Spots & Views</span>
                  </h5>
                  <ul className="space-y-2">
                    {currentAdvice.hiddenGems.map((gem, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-slate-300 leading-normal">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{gem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Etiquette & Customs */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <h5 className="font-bold text-white text-xs flex items-center gap-1.5 text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cultural Etiquette</span>
                  </h5>
                  <ul className="space-y-2">
                    {currentAdvice.etiquetteTips.map((eti, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-slate-300 leading-normal">
                        <span className="text-amber-400 font-bold shrink-0">•</span>
                        <span>{eti}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Custom Question Input */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (customPrompt.trim()) {
                handleGenerateAdvice(selectedDest, customPrompt);
                setCustomPrompt('');
              }
            }}
            className="flex items-center gap-2"
          >
            <select
              value={selectedDest}
              onChange={(e) => setSelectedDest(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs py-2.5 px-3 rounded-xl border border-slate-800 cursor-pointer"
            >
              {DESTINATIONS.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>

            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Ask custom question (e.g. Best photography spots at sunrise?)"
              className="bg-slate-900 text-white text-xs py-2.5 px-3.5 rounded-xl border border-slate-800 flex-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />

            <button
              type="submit"
              disabled={isGenerating}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Ask</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
