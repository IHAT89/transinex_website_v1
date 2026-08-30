import React from 'react';
import { Compass, Globe, ShieldCheck, Mail, Phone, Heart } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-serif-display text-lg font-bold text-white tracking-tight">
                Terra Voyages
              </span>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Curating bespoke travel itineraries, luxury hotel reservations, verified airline connections, and private local specialists worldwide.
            </p>

            <div className="flex items-center gap-4 text-slate-400 text-xs pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                IATA & ASTA Certified
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                140+ Destinations
              </span>
            </div>
          </div>

          {/* Featured Sanctuaries */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Top Destinations
            </h4>
            <ul className="space-y-2">
              {DESTINATIONS.slice(0, 5).map(d => (
                <li key={d.id}>
                  <a href={`#destinations`} className="hover:text-emerald-400 transition-colors">
                    {d.name}, {d.country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Tools */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Travel Planning
            </h4>
            <ul className="space-y-2">
              <li><a href="#trip-planner" className="hover:text-emerald-400 transition-colors">Custom Day-by-Day Planner</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Curated Vacation Packages</a></li>
              <li><a href="#flights-stays" className="hover:text-emerald-400 transition-colors">Flight Fare Comparison</a></li>
              <li><a href="#flights-stays" className="hover:text-emerald-400 transition-colors">5-Star Luxury Villas</a></li>
              <li><a href="#destinations" className="hover:text-emerald-400 transition-colors">Destination Travel Guides</a></li>
            </ul>
          </div>

          {/* Customer & Safety */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Trust & Support
            </h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer">24/7 Global Concierge</span></li>
              <li><span className="hover:text-white cursor-pointer">Travel Insurance Advisory</span></li>
              <li><span className="hover:text-white cursor-pointer">Flexible Cancellation Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Carbon Offset Verification</span></li>
              <li><span className="hover:text-white cursor-pointer">Terms & Privacy Pledge</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Terra Voyages Global Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Notice</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Settings</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
