import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { RainbowButton } from "../magicui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "../ui/button";
import { BenefitsTimeline } from "./Benifits";

export function ContentCard() {
  
    const data = [
        {
            title: "Illustrated Alphabet",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Beautifully illustrated alphabet activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/a.png'
        },
        {
            title: "Age Wise Learning",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Perfectly tailored content for every developmental stage</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/age_wise.png'
        },
        {
            title: "Interactive Busy Books",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Collection of busy books with interactive activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/books.png'
        },
        {
            title: "Colors and Shapes Discovery",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Fun color recognition and shape identification activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/color_and_shapes.png'
        },
        {
            title: "Dot-to-Dot Adventures",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Develop fine motor skills and number recognition</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/dot-to-dot.png'
        },
        {
            title: "Word Formation Skills",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Systematic word formation activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/forming_words.png'
        },
        {
            title: "Educational Games",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Collection of educational games</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/games.png'
        },
        {
            title: "Handwriting Mastery",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Build confident writers with structured handwriting practice</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/handwriting.png'
        },
        {
            title: "Math Fun Activities",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Fun-filled math activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/math.png'
        },
        {
            title: "Number Recognition",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Establish strong number foundations</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/numbers.png'
        },
        {
            title: "Parenting & Nutrition Guidance",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Support your parenting journey with expert guidance</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/parenting.png'
        },
        {
            title: "Premium Content Access",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Advanced activities and specialized learning materials</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/premium.png'
        },
        {
            title: "Pretend Play Activities",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Spark imagination and creativity</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/pretend_play.png'
        },
        {
            title: "Reading Comprehension",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Comprehensive reading activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/reading.png'
        },
        {
            title: "Motivational Reward Charts",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Encourage positive behavior and achievement</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/reward_charts.png'
        },
        {
            title: "Screen Time Solutions",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Combat mobile addiction with engaging offline activities</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/stop_mobile.png'
        },
        {
            title: "Tracing Practice",
            content: (
                <div>
                    <p className="mb-4 md:mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        <strong>Develop fine motor control and pre-writing skills</strong>
                    </p>
                </div>
            ),
            icon: '/images/contents/tracing.png'
        },
    ];

  return (
    <div className="flex flex-col items-center justify-center">
        <div>
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo font-bold mt-10 text-base md:text-2xl ">What You Will Get</RainbowButton>
        </div>
        <BenefitsTimeline data={data}/>
    </div>
  );
}
