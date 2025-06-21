// components/CategoriesSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ShinyButton } from "./magicui/shiny-button";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function AnimatedGradientTextDemo() {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-3 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#FBB406]/50 via-[#13C0FA]/50 to-[#13C0FA]/50 bg-[length:300%_100%] p-[1px]",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <AnimatedGradientText colorFrom="#13C0FA" className="text-2xl font-bold font-baloo ">
        GET PERSONALISED KIT
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
}

const categories = [
  {
    id: 1,
    name: "A for Apple",
    icon: "🍎",
    description: "Alphabet learning activities and apple-themed worksheets.",
    sampleImage: "/images/alphabets.png",
    skills: ["Letter Recognition", "Vocabulary", "Phonics", "Themed Learning"]
  },
  {
    id: 2,
    name: "Age Wise",
    icon: "👶",
    description: "Age-appropriate activities categorized by developmental stage.",
    sampleImage: "/images/age_wise.jpg",
    skills: ["Age-Appropriate Learning", "Developmental Activities", "Milestone Tasks"]
  },
  {
    id: 3,
    name: "Busy Book",
    icon: "📔",
    description: "Interactive activities to keep children engaged and learning.",
    sampleImage: "/images/busy_book.jpg",
    skills: ["Focus", "Fine Motor Skills", "Independent Play", "Interactive Learning"]
  },
  {
    id: 4,
    name: "Colouring",
    icon: "🎨",
    description: "Coloring pages and activities to develop creativity and fine motor skills.",
    sampleImage: "/images/coloring.jpg",
    skills: ["Color Recognition", "Fine Motor Skills", "Creativity", "Focus"]
  },
  {
    id: 5,
    name: "Games",
    icon: "🎮",
    description: "Educational games that make learning fun and interactive.",
    sampleImage: "/images/games.jpeg",
    skills: ["Problem Solving", "Social Skills", "Strategic Thinking", "Fun Learning"]
  },
  {
    id: 6,
    name: "Handwriting",
    icon: "✏️",
    description: "Exercises to develop handwriting skills and letter formation.",
    sampleImage: "/images/handwriting.jpg",
    skills: ["Letter Formation", "Fine Motor Skills", "Penmanship", "Writing Practice"]
  },
  {
    id: 7,
    name: "Journal",
    icon: "📓",
    description: "Journaling activities to encourage reflection and writing skills.",
    sampleImage: "/images/journal.jpeg",
    skills: ["Self-Expression", "Writing", "Reflection", "Emotional Intelligence"]
  },
  {
    id: 8,
    name: "Maths",
    icon: "🔢",
    description: "Mathematical concepts, counting, shapes, and numerical operations.",
    sampleImage: "/images/maths.jpg",
    skills: ["Counting", "Addition", "Subtraction", "Shapes", "Patterns"]
  },
  {
    id: 9,
    name: "Parenting & Nutrition",
    icon: "🥗",
    description: "Resources for healthy eating habits and nutritional education.",
    sampleImage: "/images/parenting.webp",
    skills: ["Healthy Eating", "Meal Planning", "Food Groups", "Nutritional Education"]
  },
  {
    id: 10,
    name: "Parenting Guide",
    icon: "👨‍👩‍👧‍👦",
    description: "Guidance and tips for effective parenting strategies.",
    sampleImage: "/images/parenting.webp",
    skills: ["Behavior Management", "Communication", "Child Development", "Parenting Techniques"]
  },
  {
    id: 11,
    name: "Premium",
    icon: "⭐",
    description: "High-quality premium resources and activities.",
    sampleImage: "/images/maths.jpg",
    skills: ["Advanced Learning", "Exclusive Content", "Premium Activities"]
  },
  {
    id: 12,
    name: "Pretend Play",
    icon: "🎭",
    description: "Role-playing scenarios and imaginative play activities.",
    sampleImage: "/images/pretend_play.png",
    skills: ["Imagination", "Social Skills", "Problem Solving", "Creativity"]
  },
  {
    id: 13,
    name: "Reading",
    icon: "📚",
    description: "Activities to develop literacy, phonics, and reading comprehension.",
    sampleImage: "/images/reading.jpeg",
    skills: ["Letter Recognition", "Phonics", "Sight Words", "Comprehension"]
  },
  {
    id: 14,
    name: "School Reward Charts",
    icon: "🏆",
    description: "Motivational charts and reward systems for tracking progress.",
    sampleImage: "/images/rewards.jpeg",
    skills: ["Motivation", "Goal Setting", "Achievement Recognition", "Positive Reinforcement"]
  },
  {
    id: 15,
    name: "Stop Mobile Addiction",
    icon: "📵",
    description: "Strategies and activities to reduce screen time and digital dependence.",
    sampleImage: "/images/stop_addiction.png",
    skills: ["Screen Time Management", "Alternative Activities", "Healthy Habits"]
  },
  {
    id: 16,
    name: "Tracing",
    icon: "✍️",
    description: "Line tracing activities to develop pre-writing skills and coordination.",
    sampleImage: "/images/tracing.jpeg",
    skills: ["Fine Motor Skills", "Hand-Eye Coordination", "Pre-Writing Skills", "Focus"]
  }
];

const CategoriesSection = () => {
  const router = useRouter();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#13C0FA]/10 text-[#13C0FA] px-4 py-1 rounded-full mb-4 font-baloo">
            12+ Learning Categories
          </span>
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            What's Included in Your Bundle
          </h2>
          <p className="font-antique text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage across all key developmental areas for ages 3-12.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div 
                className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#FBB406]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-baloo text-xl text-gray-800">{category.name}</h3>
                    <p className="font-antique text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div>
                  {expandedCategory === category.id ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </div>
              </div>

              {expandedCategory === category.id && (
                <div className="p-6 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={category.sampleImage}
                          alt={`${category.name} worksheet sample`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-baloo text-lg text-gray-800 mb-3">Skills Covered:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-[#13C0FA] rounded-full mr-2"></div>
                            <span className="font-antique text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-12">
          <Button
              onClick={() => router.push('https://rzp.io/rzp/kj0uP2Ui')}
                className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo text-2xl font-bold py-6 px-12 rounded-full transition-colors duration-200"
          >
            GET WORKSHEETS
          </Button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button
                variant={'outline'}
                onClick={() => router.push('/quiz')}
                className="border-[#13C0FA] text-[#13C0FA] hover:border-[#FBB406] hover:text-[#FBB406] font-baloo text-2xl font-bold py-6 px-10 rounded-full transition-colors duration-200"
          >
            GET PERSONAL KIT
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="font-antique text-sm text-gray-500 mb-2">
            *Plus additional categories: Parenting, Nutrition, Counting Numbers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;