"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import { Card, CardContent } from "../ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {motion} from 'framer-motion'
import { RainbowButton } from "../magicui/rainbow-button";
import { CardSpotlight } from "../ui/card-spotlight";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function BackgroundGradientDemo() {
  const router = useRouter();
  return (
    <div className="mx-4 md:m-8 mb-10" id="pricing">
      <BackgroundGradient className="rounded-[22px] max-w-3xl p-2 sm:p-8 bg-white">
            <div className="flex">
                {[
                    {
                        name: "SUPER COMBO",
                        price: "₹149",
                        originalPrice: '₹199',
                        description: "That value will be converted to your local currency",
                        features: [
                            "One-time payment + Lifetime Access",
                            "Over 14000+ activities in PDF",
                            "Kinovo Complete Literacy",
                            "Bonus 1: Cut and Glue",
                            "Bonus 2: Drawings to Color",
                            "Bonus 3: Games and Playtime",
                            "Personalized Children's Diploma with Your Child's Name.",
                        ],
                        cta: "I WANT THE SUPER COMBO!",
                        popular: true,
                    },
                ].map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                    <Card
                        className={`relative overflow-hidden bg-white border-white h-full backdrop-blur`}
                    >
                        {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-lg">
                            Most Popular
                        </div>
                        )}
                        <CardContent className="p-3 sm:p-6 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-2 md:mt-4">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground ml-1 line-through text-red-500">{plan.originalPrice}</span>
                        </div>
                        <p className="text-muted-foreground mt-4">{plan.description}</p>
                        <ul className="space-y-3 mt-4 flex-grow">
                            {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                                <Check className="mr-2 size-4 text-primary" />
                                <span className="text-sm">{feature}</span>
                            </li>
                            ))}
                        </ul>
                        <div className="justify-center">
                            <Button
                              onClick={() => router.push('/checkout/combo')}
                              className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-4 px-4 mt-5 mb-5 text-lg md:text-2xl lg:text-3xl md:py-8 md:px-16 font-bold rounded-full transition-colors duration-200 w-full md:w-auto"
                            >
                              {plan.cta}
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                    </motion.div>
                ))}
            </div>
      </BackgroundGradient>
    </div>
  );
}

export default function PricingSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full overflow-clip bg-blue-50 ">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo mt-6 text-xl md:text-2xl mb-4">Pricing</RainbowButton>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-center">
                    <img
                        src={'/images/pricing/satisfaction_guaranteed.png'}
                        height={"450"}
                        width="450"
                        className="h-auto w-3/4 lg:w-2/3 object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="satisfaction guaranty"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="font-baloo text-xl md:text-4xl font-bold mb-2 text-center">
                        SATISFACTION GUARANTEED!
                    </div>
                    <div className="mb-5 px-4 md:px-10 max-w-2xl">
                        <div className="font-baloo text-sm md:text-xl font-semibold text-center">
                        Besides all the benefits mentioned above, when you purchase Kinovo, you get a 7-day guarantee.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-6 md:mt-10">
                <img
                  src={'/images/pricing/combo.png'}
                  height={"1000"}
                  width="1000"
                  className="h-auto w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="product combo"
                />
            </div>
            <BackgroundGradientDemo />
        </div>
    )
}

function Timer() {

 interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}
   
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Check if timer already exists in localStorage
    const storedEndTime:string | null = localStorage.getItem('promotionEndTime');
    
    if (!storedEndTime) {
      // If not set, create a new end time (30 minutes from now)
      const endTime = Date.now() + 30 * 60 * 1000; // 30 minutes in milliseconds
      localStorage.setItem('promotionEndTime', endTime.toString());
    }
    
    // Update timer every second
    const interval = setInterval(() => {
      const endTime = parseInt(localStorage.getItem('promotionEndTime') || '0');
      const currentTime = Date.now();
      const difference = endTime - currentTime;
      
      if (difference <= 0) {
        // Timer expired
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculate hours, minutes, seconds
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Show loading state until timeLeft is calculated
  if (timeLeft === null) {
    return <div className="text-center">Loading timer...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-[#FBB406] text-white text-2xl md:text-4xl font-bold rounded-lg p-4 w-20 md:w-24">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm mt-1">Hours</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-[#FBB406] text-white text-2xl md:text-4xl font-bold rounded-lg p-4 w-20 md:w-24">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm mt-1">Minutes</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-[#FBB406] text-white text-2xl md:text-4xl font-bold rounded-lg p-4 w-20 md:w-24">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
}


    
