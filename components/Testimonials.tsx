import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mark T.",
        role: "Homeowner",
        rating: 5,
        text: "From quote to installation in 2 days. The team was professional, clean, and the door looks amazing. Totally transformed the front of our house."
    },
    {
        id: 2,
        name: "Sarah L.",
        role: "Homeowner",
        rating: 5,
        text: "Our garage door was noisy and outdated. Now it’s smooth, quiet, and beautiful. The installer explained everything clearly."
    },
    {
        id: 3,
        name: "David R.",
        role: "Homeowner",
        rating: 5,
        text: "Best price we found and zero hassle. Highly recommend! They even hauled away the old door for free."
    }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Homeowners Are Saying
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm relative">
                    <Quote className="absolute top-6 right-6 text-gray-100 w-10 h-10 fill-current" />
                    <div className="flex text-accent-500 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic relative z-10">"{t.text}"</p>
                    <div className="font-bold text-gray-900 border-t border-gray-100 pt-4">
                        {t.name}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};