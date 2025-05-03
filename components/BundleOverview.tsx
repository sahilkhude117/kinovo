// components/BundleOverview.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for worksheets
const sampleWorksheets = [
  { id: 1, title: "Counting Adventure", category: "Math", image: "/api/placeholder/300/400" },
  { id: 2, title: "Letter Tracing Fun", category: "Writing", image: "/api/placeholder/300/400" },
  { id: 3, title: "Animal Matching", category: "Critical Thinking", image: "/api/placeholder/300/400" },
  { id: 4, title: "Word Family Practice", category: "Reading", image: "/api/placeholder/300/400" },
  { id: 5, title: "Shape Recognition", category: "Math", image: "/api/placeholder/300/400" },
  { id: 6, title: "Storytelling Prompts", category: "Creativity", image: "/api/placeholder/300/400" },
];

const BundleOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sampleWorksheets.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sampleWorksheets.length - 3 : prevIndex - 1
    );
  };

  // Key stats
  const stats = [
    { value: "150+", label: "Printable Worksheets" },
    { value: "12", label: "Skill Categories" },
    { value: "3-10", label: "Age Range" },
    { value: "4.9", label: "Parent Rating" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FBB406]/10 text-[#FBB406] px-4 py-1 rounded-full mb-4 font-baloo">
            Complete Learning Package
          </span>
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            Everything in Our Worksheet Bundle
          </h2>
          <p className="font-antique text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of 150+ worksheets covering essential skills for children ages 3-10.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-baloo text-2xl md:text-3xl text-[#13C0FA]">{stat.value}</div>
              <div className="font-antique text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative mb-8">
          <h3 className="font-baloo text-xl text-gray-800 mb-4">Sample Worksheets</h3>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {sampleWorksheets.map((worksheet) => (
                  <div 
                    key={worksheet.id}
                    className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] p-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                      <div className="relative h-48">
                        <Image 
                          src={worksheet.image} 
                          alt={worksheet.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block bg-[#13C0FA]/10 text-[#13C0FA] text-xs px-2 py-1 rounded-full mb-2 font-antique">
                          {worksheet.category}
                        </span>
                        <h4 className="font-baloo text-gray-800">{worksheet.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button className="bg-[#FBB406] hover:bg-[#e9a706] text-white font-baloo px-8 py-6 text-lg rounded-full">
            Get Your Bundle Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BundleOverview;