'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShoppingBag, Users } from 'lucide-react';
import { MorphingText } from './magicui/morphing-text';
import { AvatarCircles } from './magicui/avatar-circles';

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={499} avatarUrls={avatars} />;
}


export default function ReviewsSection() {
  const stats = [
    {
      id: 1,
      icon: <ShoppingBag className="w-8 h-8 text-indigo-500" />,
      value: '14,000+',
      label: 'Worksheets'
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8 text-emerald-500" />,
      value: '12+',
      label: 'Skills'
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      value: '4.9',
      label: 'Parents Rating'
    },
    {
      id: 4,
      icon: "",
      value: "3-12",
      label: "Age range"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-12 md:py-16 dark:bg-gray-900">
      <div className="container mx-auto px-1">
        <MorphingText texts={["14,000+ Worksheets", "12+ Skills", "4.9 Parent Ratings",]} className='text-[20pt] md:text-[30pt] font-baloo text-[#13C0FA]' />

        <div className="text-center mb-2 mt-2 sm:mb-3 sm:mt-3 md:mb-5 md:mt-5">
          <div className='flex items-center justify-center'>
            <AvatarCirclesDemo/> 
            <span className='ml-1 text-xs sm:text-sm md:text-base'>
              Trusted by <span className='font-antiqueolive text-[#13C0FA] font-semibold'>500+</span> parents worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}