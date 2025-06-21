import { useState, useEffect } from 'react';

// Import shadcn Button component
import { Button } from "@/components/ui/button";

export default function OfferCountdownBanner() {
  // Initial time values matching the screenshot
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 5,
    minutes: 1,
    seconds: 4
  });

  // Set up countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        }
        
        const newDays = prev.days - 1;
        if (newDays >= 0) {
          return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }
        
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Individual time unit display component
  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-gray-800 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
        {value}
      </div>
      <span className="text-[10px] text-white mt-0.5">{label}</span>
    </div>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black py-2 px-3 md:px-6 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left side - Offer text */}
        <div className="flex items-center">
          <span className="text-orange-500 mr-2" aria-hidden="true">🔥</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="text-white text-sm md:text-base whitespace-nowrap">
              Get <span className="font-bold">50% Off</span>{" "}
              (<span className="line-through">₹250</span>{" "}
              <span className="font-bold">₹500</span>)
            </div>
            <div className="text-white text-sm md:text-base sm:ml-2 whitespace-nowrap">
              Limited time offer ends in...
            </div>
          </div>
        </div>
        
        {/* Right side - Timer and CTA button */}
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
          <div className="flex mr-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
          
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-1 h-8 text-sm"
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}