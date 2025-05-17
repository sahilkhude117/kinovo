import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { RainbowButton } from "../magicui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "../ui/button";

export function ContentCard() {
  
    const items = [
        {
            title: "Illustrated Alphabet",
            image: "/images/contents/a.png",
            className: "absolute top-10 left-[20%] rotate-[-5deg]",
        },
        {
            title: "Age Wise",
            image: "/images/contents/age_wise.png",
            className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
            title: "Busy Books",
            image: "/images/contents/books.png",
            className: "absolute top-5 left-[40%] rotate-[8deg]",
        },
        {
            title: "Colors and Shapes",
            image: "/images/contents/color_and_shapes.png",
            className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
            title: "Dot-to-Dot",
            image: "/images/contents/dot-to-dot.png",
            className: "absolute top-20 right-[35%] rotate-[2deg]",
        },
        {
            title: "Forming Words",
            image: "/images/contents/forming_words.png",
            className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
            title: "Games",
            image: "/images/contents/games.png",
            className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
        // {
        //     title: "Handwriting",
        //     image: "/images/contents/handwriting.png",
        //     className: "absolute top-36 right-[20%] rotate-[-3deg]",
        // },
        // {
        //     title: "Math Fun",
        //     image: "/images/contents/math.png",
        //     className: "absolute top-16 left-[35%] rotate-[6deg]",
        // },
        // {
        //     title: "Numbers",
        //     image: "/images/contents/numbers.png",
        //     className: "absolute top-28 left-[60%] rotate-[-8deg]",
        // },
        // {
        //     title: "Parenting & Nutrition",
        //     image: "/images/contents/parenting.png",
        //     className: "absolute top-12 right-[25%] rotate-[9deg]",
        // },
        // {
        //     title: "Premium",
        //     image: "/images/contents/premium.png",
        //     className: "absolute top-44 left-[15%] rotate-[3deg]",
        // },
        // {
        //     title: "Pretend Play",
        //     image: "/images/contents/pretend_play.png",
        //     className: "absolute top-20 left-[50%] rotate-[-4deg]",
        // },
        // {
        //     title: "Reading",
        //     image: "/images/contents/reading.png",
        //     className: "absolute top-32 right-[30%] rotate-[7deg]",
        // },
        // {
        //     title: "Reward Charts",
        //     image: "/images/contents/reward_charts.png",
        //     className: "absolute top-4 left-[10%] rotate-[-6deg]",
        // },
        // {
        //     title: "Stop Mobile Addiction",
        //     image: "/images/contents/stop_mobile.png",
        //     className: "absolute top-24 right-[15%] rotate-[5deg]",
        // },
        // {
        //     title: "Tracing",
        //     image: "/images/contents/tracing.png",
        //     className: "absolute top-40 right-[10%] rotate-[-9deg]",
        // },
    ];

    const words = [
    {
      text: "Tip:",
    },
    {
      text: "To",
    },
    {
      text: "view",
    },
    {
      text: "more, ",
    },
    {
      text: "Drag Cards",
      className: "text-blue-500 dark:text-blue-500",
    },
    ];

  return (
    <div className="flex flex-col items-center justify-center bg-blue-50">
        <div>
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo font-bold mt-20 text-xl md:text-2xl ">What You Will Get</RainbowButton>
        </div>
        <div>
          <TypewriterEffectSmooth words={words} className="mb-10 text-md md:text-md lg:text-md xl:text-md" />
        </div>
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        And Many more...
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-50 w-50 md:h-80 md:w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
    </div>
  );
}
