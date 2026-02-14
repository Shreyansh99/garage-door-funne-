import React, { useState, useEffect } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden border-t border-gray-200">
      <a 
        href="#lead-form"
        className="block w-full bg-brand-600 text-white font-bold text-center py-3 rounded-lg shadow-md active:bg-brand-700"
      >
        Get My Free Quote
      </a>
    </div>
  );
};