'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import confetti from "canvas-confetti";
import { ConfettiButton } from './magicui/confetti';
import { useRouter } from 'next/navigation';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Screen-free development",
      description: "Say goodbye to digital distractions. Our printable worksheets give little hands the tactile experience they need while developing fine motor skills that screens simply can't provide."
    },
    {
      title: "Progress you can see",
      description: "Watch confidence bloom as your child masters new skills. Each worksheet is thoughtfully designed to provide just the right amount of challenge without overwhelming."
    },
    {
      title: "Flexible learning on your schedule",
      description: "No more rigid lesson plans. Print what you need, when you need it—perfect for busy families, homeschoolers, or supplementing classroom learning."
    },
    {
      title: "Skills that stack",
      description: "Our worksheets don't just teach isolated concepts. They build interconnected skills that compound over time, creating a strong foundation for lifelong learning."
    }
  ];

  const handleClick = () => {
    const end = Date.now() + 1 * 1000; // 1 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const router = useRouter();

  return (
    <section id='products' className="w-full py-16 bg-[#d5d5d5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center min-h-screen">
          {/* Left side - Image with framer motion */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div 
              className="relative aspect-square w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/images/bundle.jpg" 
                alt="Children learning with printable worksheets" 
                width={800}
                height={800}
              />
            </motion.div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="text-left md:text-left">
              <h2 className="font-baloo text-4xl md:text-6xl lg:text-7xl font-black ">
                <span className="block md:inline">Screen-Free</span>{" "}
                <span className="block md:inline">Learning</span>{" "}
                <span className="block">Made Simple</span>
              </h2>

              <div className="mb-8 mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {benefits.map((benefit, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="font-baloo text-lg">
                        {benefit.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        {benefit.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              <Button 
                onClick={() => router.push('https://rzp.io/rzp/kj0uP2Ui')}
                className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo text-2xl font-bold py-6 px-12 rounded-full transition-colors duration-200"
              >
                GET WORKSHEETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

