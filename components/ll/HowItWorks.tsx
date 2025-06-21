'use client'
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { useEffect, useRef, useState } from 'react';
import { AnimatedBadge } from "./AnimatedShinyBadge";

export const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: '1',
      title: 'It will arrive via Email',
      description: 'The content is entirely in PDF format and after the purchase, access to the material will be sent to your email',
      image: '/images/Steps/S01E02.gif'
    },
    {
      number: '2',
      title: 'You Print',
      description: 'Unlimited access to the purchased material, being able to access, download, and print as many times as desired, in your own time.',
      image: '/images/Steps/S02E02.gif'
    },
    {
      number: '3',
      title: 'Carry out the activities',
      description: 'The printed material is ready. It\'s time to get down to work.',
      image: '/images/Steps/S03E01.gif'
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
            } else {
              setVisibleCards(prev => prev.filter(i => i !== index));
            }
          },
          { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
        );
        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="mt-10 md:mt-20 px-4 overflow-hidden bg-white">
      <div className="mx-auto items-center max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <RainbowButton 
            variant={"outline"} 
            className="rounded-full text-[#13C0FA] border-[#13C0FA] hover:bg-[#13C0FA] hover:text-white font-baloo text-md md:text-2xl transition-all duration-300"
          >
            How It Works
          </RainbowButton>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-5 text-gray-800">
            3 Simple Steps to Access
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Enjoy seamless access to 30+ premium websites in just three easy steps.
          </p>
        </div>

        <div className="max-w-4xl relative m-2 mx-auto" style={{ height: `${steps.length * 220}px` }}>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className={`
                bg-blue-50 backdrop-blur-sm border-2 border-[#FBB406] rounded-2xl p-4 md:p-8 
                shadow-lg hover:shadow-xl hover:border-[#13C0FA] hover:bg-gradient-to-br hover:from-[#FBB406]/5 hover:to-[#13C0FA]/5
                transition-all duration-700 transform absolute w-full group
                ${visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-20 opacity-0 scale-95'
                }
              `}
              style={{
                transitionDelay: `${index * 400}ms`,
                zIndex: steps.length + index,
                top: `${index * 150}px`
              }}
            >
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#FBB406] to-[#13C0FA] text-white font-bold text-lg mb-2">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center text-gray-800 group-hover:text-[#13C0FA] transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base mb-6 text-center leading-relaxed">
                {step.description}
              </p>
              
              <div className="w-full h-32 rounded-lg overflow-hidden bg-gradient-to-br from-[#FBB406]/5 to-[#13C0FA]/5 border border-gray-200 group-hover:border-[#FBB406]/50 transition-all duration-300">
                <img 
                  src={step.image} 
                  alt={`Step ${step.number}: ${step.title}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-[#FBB406] to-[#13C0FA] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-gradient-to-r from-[#13C0FA] to-[#FBB406] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};