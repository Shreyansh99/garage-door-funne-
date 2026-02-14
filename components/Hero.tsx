import React from 'react';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';
import { LeadForm } from './LeadForm';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex-grow flex items-center bg-dark-950 overflow-hidden min-h-[calc(100vh-80px)]">
        {/* Ambient Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 py-12 lg:py-0 relative z-10 h-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 h-full">
                
                {/* Left Column: Copy */}
                <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                        Fix Your <span className="text-brand-500 relative inline-block">
                            Garage Door
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-600 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                        <br />
                        In The Next <span className="text-white underline decoration-brand-500 underline-offset-8 decoration-4">24 Hours</span>.
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Top-rated local pros. Upfront pricing. 
                        <span className="block text-white font-medium mt-1">Get your free quote in 30 seconds.</span>
                    </p>

                    {/* Trust Bullets - Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10">
                            <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span className="font-bold text-gray-200 text-sm">Same-Day Service</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10">
                             <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                             <span className="font-bold text-gray-200 text-sm">Licensed & Insured</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10">
                             <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0" />
                             <span className="font-bold text-gray-200 text-sm">Local Experts</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Lead Form */}
                <div className="w-full lg:w-[480px] flex-shrink-0 relative">
                    {/* Glow behind form */}
                    <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full transform scale-90 -z-10"></div>
                    
                    <LeadForm className="relative z-10 w-full" />
                    
                    <div className="mt-6 flex items-center justify-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest opacity-60">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> 256-Bit SSL Secure</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> No Obligation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};