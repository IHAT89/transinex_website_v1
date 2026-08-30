import React, { useState } from 'react';
import { Star, ThumbsUp, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TravelerReview } from '../types/travel';
import { TRAVELER_REVIEWS } from '../data/travelData';

export const TravelerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<TravelerReview[]>(TRAVELER_REVIEWS);
  const [votedIds, setVotedIds] = useState<string[]>([]);

  const handleVoteHelpful = (id: string) => {
    if (votedIds.includes(id)) return;
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
    setVotedIds(prev => [...prev, id]);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Verified Explorer Testimonials</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Real Stories from Global Adventurers
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Over 14,000 itineraries executed with 4.95/5 average customer satisfaction.
        </p>
      </div>

      {/* Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => {
          const hasVoted = votedIds.includes(rev.id);
          return (
            <div
              key={rev.id}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between space-y-4 shadow-lg hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating & Trip Type */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {rev.tripType}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-slate-700 mb-2" />

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-emerald-400 block">
                    Traveled to: {rev.destinationName}
                  </span>
                </div>
              </div>

              {/* Author & Helpful Button */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.authorAvatar}
                    alt={rev.authorName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">{rev.authorName}</span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Verified Traveler • {rev.authorLocation}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleVoteHelpful(rev.id)}
                  className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg border transition-colors ${
                    hasVoted
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.helpfulCount}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
