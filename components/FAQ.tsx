import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
    {
        question: "How long does installation take?",
        answer: "Most installations are completed in a single day (usually 3-5 hours). We'll remove your old door and have the new one running smoothly before we leave."
    },
    {
        question: "Do you offer financing?",
        answer: "Yes! We offer flexible financing plans, including 0% interest options for 12 months for qualified homeowners."
    },
    {
        question: "What warranty do you provide?",
        answer: "We stand by our work. Most doors come with a limited lifetime manufacturer warranty, and we provide a 5-year labor warranty on our installation."
    },
    {
        question: "Do you remove the old garage door?",
        answer: "Absolutely. We handle the complete removal and eco-friendly disposal of your old garage door and tracks."
    },
    {
        question: "How soon can I schedule?",
        answer: "We often have same-day or next-day appointments available for estimates. Installation can typically be scheduled within 24-48 hours of selecting your door."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-brand-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-5 pt-0 text-gray-600 bg-white">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};