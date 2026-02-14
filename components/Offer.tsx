import React from 'react';
import { Timer, ArrowRight } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-700 to-brand-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-100 text-sm font-semibold mb-6 border border-white/20">
            <Timer className="w-4 h-4" />
            Limited Time Offer
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Get $250 OFF Installation
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free on-site estimate this week and receive an instant $250 credit towards your new garage door system.
        </p>

        <a 
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors shadow-lg"
        >
            Claim My $250 Discount <ArrowRight className="w-5 h-5" />
        </a>
        
        <p className="mt-4 text-sm text-brand-300">
            Limited slots available in your area. Offer expires soon.
        </p>
      </div>
    </section>
  );
};