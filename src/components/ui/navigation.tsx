import React from 'react';
import { cn } from "@/lib/utils";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn("w-full bg-white shadow-lg sticky top-0 z-50", className)} {...props}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">
                  AutoInsure
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#coverage" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Coverage
                </a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-6 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button type="button" className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                Services
              </a>
              <a href="#coverage" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                Coverage
              </a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#blog" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                Blog
              </a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-sm font-medium">
                Contact
              </a>
              <button className="w-full text-left bg-blue-600 text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors mt-2">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";