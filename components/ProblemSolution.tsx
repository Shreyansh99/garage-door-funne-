import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    "Loud, grinding noises",
    "Broken springs or cables",
    "Outdated, faded appearance",
    "Poor insulation (high energy bills)",
    "Security vulnerabilities"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Is Your Garage Door Causing Problems?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't let a faulty door compromise your home's safety and curb appeal.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Problems Card */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-red-500">⚠</span> The Signs of Trouble
                </h3>
                <ul className="space-y-4">
                    {problems.map((problem, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            {problem}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Solution Card */}
            <div className="flex-1 bg-brand-50 p-8 rounded-2xl shadow-md border border-brand-100">
                <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                    <span className="text-brand-600">✓</span> The ProGarage Solution
                </h3>
                <p className="text-brand-800 mb-6 leading-relaxed">
                    We replace old, unsafe, and outdated garage doors quickly and professionally. Upgrade to a modern, silent, and insulated system in as little as 24 hours.
                </p>
                <a 
                    href="#lead-form"
                    className="inline-flex items-center justify-center w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors"
                >
                    Get A Free Replacement Quote
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};