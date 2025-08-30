import React from 'react';
import { AutoRepairHero } from '../ui/auto-repair-hero';

export const AutoRepairHeroSection = () => {
  return (
    <AutoRepairHero>
      {/* Badge */}
      <div className="inline-flex items-center rounded-full bg-blue-100/90 px-4 py-2 text-sm font-medium text-blue-800 mb-8 backdrop-blur-sm">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Trusted Auto Repair Insurance
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
        Protect Your 
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Auto Repair Business
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
        Comprehensive insurance coverage designed specifically for auto repair shops. 
        From garage keepers liability to workers compensation - we've got you covered.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          Get Free Quote
        </button>
        <button className="px-8 py-4 bg-white/90 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center backdrop-blur-sm">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Expert
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
          <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
          <div className="text-gray-300 text-sm md:text-base">Claims Support</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
          <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
          <div className="text-gray-300 text-sm md:text-base">Shops Protected</div>
        </div>
      </div>
    </AutoRepairHero>
  );
};