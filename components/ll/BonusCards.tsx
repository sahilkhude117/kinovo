"use client";
import React from "react";
import { RainbowButton } from "../magicui/rainbow-button";

interface BonusCardProps {
  title: string;
  description?: string;
  imageUrl: string;
}

function BonusCard({ title, description, imageUrl }: BonusCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 md:p-4 lg:p-6 border border-gray-100 hover:border-gray-200">
      <div className="flex flex-col items-center text-center mb-1 md:mb-2">
        <div className="w-full mb-2 md:mb-3">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-45 md:h-100 object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xs md:text-sm lg:text-lg font-bold text-gray-800 leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-xs md:text-sm text-gray-600 mt-2 mb-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BonusCards() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6 md:py-12 px-4">
      <RainbowButton 
        variant="outline" 
        className="rounded-full text-[#13C0FA] font-baloo font-bold text-lg lg:text-2xl px-4 md:px-6 lg:px-8 mb-6"
      >
        +3 Amazing Bonuses
      </RainbowButton>
      
      <div className="w-full max-w-3xl m-2 mx-auto mt-4 md:mt-8">
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          <BonusCard 
            title="Cut and Glue" 
            imageUrl="/images/contents/cut.png"
          />
          <BonusCard 
            title="Drawing To Color" 
            imageUrl="/images/contents/Drawing_to_color.png"
          />
          <BonusCard 
            title="Games and Playtime" 
            imageUrl="/images/contents/games_and_play.png"
          />
        </div>
      </div>
    </div>
  );
}