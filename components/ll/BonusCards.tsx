"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SheetDescription } from "../ui/sheet";
import { RainbowButton } from "../magicui/rainbow-button";

export function ThreeDCardDemo({title, description, imageUrl}:{title:string; description:string; imageUrl:string}) {
  return (
    <CardContainer className="inter-var px-2 md:px-5 w-3/4 md:w-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-4 md:p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4">
          <img
            src={imageUrl}
            height={"1000"}
            width="1000"
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


export default function BonusCards(){
    return (
        <div className="flex flex-col items-center justify-center w-full overflow-hidden">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo font-bold mt-20 text-xl md:text-2xl ">+3 Amazing Bonuses</RainbowButton>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 mt-6 md:mt-10 w-full px-4 ml-2 mr-2 md:px-6">
                <ThreeDCardDemo title="Cut and Glue" description="" imageUrl="/images/contents/cut.png"/>
                <ThreeDCardDemo title="Drawing To Color" description="" imageUrl="/images/contents/Drawing_to_color.png"/>
                <ThreeDCardDemo title="Games and Playtime" description="" imageUrl="/images/contents/games_and_play.png"/>
            </div>
        </div>
    )
}