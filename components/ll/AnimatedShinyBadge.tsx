import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

export function AnimatedShinyTextBadge() {
  return (
    <div className="z-10 flex items-center justify-center mb-2 md:mb-6">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="text-xs md:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Printable Worksheets</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
    </div>
  );
}



import React from 'react';

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ children, className = "" }: AnimatedBadgeProps) => {
  return (
    <div className={`relative inline-flex items-center px-2 md:px-4 py-2 rounded-full bg-secondary border border-blue-bright/30 ${className}`}>
      <div className="absolute inset-0 rounded-full border-2 border-blue-bright/0 moving-border"></div>
      <span className="relative z-10 text-xs md:text-sm font-medium text-green-bright">
        {children}
      </span>
    </div>
  );
};