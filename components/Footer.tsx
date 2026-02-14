import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-gray-600 mb-4 font-medium">
            &copy; {new Date().getFullYear()} Garage Door Experts. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-500">
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Do Not Sell My Info</span>
        </div>
      </div>
    </footer>
  );
};