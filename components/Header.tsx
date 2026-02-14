import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-dark-950 h-20 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
            <div className="bg-brand-600 text-white p-2 rounded-lg shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-white tracking-tight">
                Garage Door <span className="text-brand-500">Experts</span>
            </span>
        </div>
        
        {/* Trust Badge - Right Aligned */}
        <div className="hidden md:flex items-center gap-3 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
             <div className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
             </div>
             <span className="text-sm font-medium text-gray-300 tracking-wide">Technicians Available Now</span>
        </div>
      </div>
    </header>
  );
};