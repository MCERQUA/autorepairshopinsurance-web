"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AutoRepairHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AutoRepairHero = React.forwardRef<HTMLDivElement, AutoRepairHeroProps>(
  ({ children, className, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    // Car movement across screen - slower animation with more scroll sensitivity
    const x = useTransform(scrollYProgress, [0.05, 0.9], [`-${3*screenWidth}px`, `${1.5*screenWidth}px`]);
    const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.75, 0.9], [0, 1, 1, 0]);

    return (
      <div ref={targetRef} className={cn("relative h-[200vh]", className)} {...props}>
        {/* Sticky container */}
        <div className="sticky top-0 flex h-screen items-center justify-center relative">
          {/* Static Background Image - Full Screen */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/auto-repair-insurance.webp)',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Static Text Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            {children}
          </div>

          {/* Moving Car Image */}
          <motion.div 
            style={{ x, opacity }} 
            className="absolute top-[35%] left-0 z-20 flex items-center"
          >
            <img
              src="/car.webp"
              alt="Car moving across screen"
              className="w-[20rem] h-auto sm:w-[24rem] md:w-[32rem] lg:w-[40rem] xl:w-[48rem] 2xl:w-[56rem] max-w-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Top Static Overlay Image */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <img
              src="/gg-top.webp"
              alt="Top overlay"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

AutoRepairHero.displayName = "AutoRepairHero";