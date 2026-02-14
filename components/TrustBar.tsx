import React from 'react';
import { Star, Shield, Users, Trophy, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center max-w-5xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
              <Star className="w-5 h-5 text-accent-500 fill-current" />
              <span className="font-semibold text-gray-600">4.9/5 Average Rating</span>
           </div>
           <div className="h-4 w-px bg-gray-300"></div>
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
              <Shield className="w-5 h-5 text-brand-600" />
              <span className="font-semibold text-gray-600">Fully Licensed & Insured</span>
           </div>
           <div className="h-4 w-px bg-gray-300"></div>
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
              <Trophy className="w-5 h-5 text-brand-600" />
              <span className="font-semibold text-gray-600">Top Rated Service 2024</span>
           </div>
           <div className="h-4 w-px bg-gray-300"></div>
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
              <Users className="w-5 h-5 text-brand-600" />
              <span className="font-semibold text-gray-600">Family Owned Business</span>
           </div>
        </div>

        {/* Mobile View - Scroller */}
        <div className="md:hidden flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
             <div className="flex-shrink-0 flex items-center gap-2">
                <Star className="w-4 h-4 text-accent-500 fill-current" />
                <span className="font-semibold text-sm text-gray-700">4.9/5 Rating</span>
             </div>
             <div className="flex-shrink-0 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-600" />
                <span className="font-semibold text-sm text-gray-700">Licensed & Insured</span>
             </div>
             <div className="flex-shrink-0 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span className="font-semibold text-sm text-gray-700">Satisfaction Guarantee</span>
             </div>
        </div>
      </div>
    </section>
  );
};