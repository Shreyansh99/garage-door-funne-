import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
    {
        title: "Modern & Contemporary",
        description: "Clean lines, glass accents, and modern aluminum frames to boost curb appeal.",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Traditional Carriage Style",
        description: "Classic charm with the durability of modern steel and composite materials.",
        image: "https://images.unsplash.com/photo-1629081827299-a3597d396a84?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Insulated Energy-Savers",
        description: "Keep your garage warm in winter and cool in summer with R-18+ insulation.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
    }
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Replacement Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from hundreds of styles, colors, and materials. We handle everything from removal to installation.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <a href="#lead-form" className="text-brand-600 font-semibold text-sm hover:underline">
                            View Options →
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};