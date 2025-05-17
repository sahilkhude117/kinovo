"use client";
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function Benifits() {
  const router = useRouter();

    const data = [
    {
        title: "Increase in Cognitive Capacity",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    LittleLesson activities allow children to significantly develop thinking skills, <strong>logical reasoning, memory, language, reading, writing, imagination, and creativity.</strong>
                </p>
            </div>
        ),
        icon: '/images/benifits/brain.png'
    },
    {
        title: "Reduction of School Difficulties",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    With LittleLesson, <strong>you can focus on the areas where your little one struggles the most</strong>, reducing or even eliminating the child's main doubts and challenges.
                </p>
            </div>
        ),
        icon: '/images/benifits/graduaction.png'
    },
    {
        title: "School Support",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    LittleLesson also serves as academic reinforcement. Does your little one have difficulty learning certain activities? <strong>This is the perfect opportunity to help them.</strong>
                </p>
            </div>
        ),
        icon: '/images/benifits/brain2.png'
    },
    {
        title: "Inclusion in the School Environment",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    When the little ones are about to start school, you can feel that pressure in your chest, right? It's a mix of insecurity and fear, and we know exactly how it feels! That's why it's important to prepare them in advance by incorporating some activities into their routine.
                </p>
            </div>
        ),
        icon: '/images/benifits/earth.png'
    },
    {
        title: "Increase in Self-Esteem",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Many parents don't know this, <strong>but one of the main causes of low self-esteem in children</strong> is the fact that children fail to understand and complete school activities.
                </p>
            </div>
        ),
        icon: '/images/benifits/heart.png'
    },
    {
        title: "More Time with Your Little One",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Nowadays, we have less and less time at home, right? Children really feel the absence of their parents. <strong>Here, you'll be able to share unique moments with your little one</strong> and you'll notice the child's happiness while doing activities with you.
                </p>
            </div>
        ),
        icon: '/images/benifits/hand.png'
    },
    {
        title: "End of Demotivation in Studies",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    <strong>With LittleLesson activities, the lack of motivation to study is a thing of the past!</strong> Our activities are colorful, playful, and fun, providing a learning experience that turns studying into a real game. Kids learn while having fun!
                </p>
            </div>
        ),
        icon: '/images/benifits/book.png'
    },
    {
        title: "Reduction of Screen Addiction",
        content: (
            <div>
                <p className="mb-8 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Nowadays, children spend an average of <strong>5 hours a day on the internet</strong>, which includes the use of electronics such as video games, tablets, and smartphones. <strong>This material will help children spend their free time on something that truly contributes to their knowledge.</strong>
                </p>
            </div>
        ),
        icon: '/images/benifits/stop_mobile.png'
      },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full overflow-clip">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo mt-20 text-xl md:text-2xl mb-5">Benifits</RainbowButton>
            <BenefitsTimeline data={data}/>
            <div className="justify-center">
                <Button
                    className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-8 mt-5 mb-5 px-16 text-3xl md:text-4xl md:py-12 md:px-24 font-bold  rounded-full transition-colors duration-200 md:mt-10 mb-10"
                    onClick={() => router.push('#pricing')}
                >
                    I Want Kinovo
                </Button>
            </div>
        </div>
    );
}


interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: string;
}

export const BenefitsTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-3xl lg:max-w-sm md:w-full">
              <div className="h-20 absolute left-3 md:left-3 w-20 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <img src={item.icon} alt="icon" className="pointer-events-none relative z-10 h-20 w-20 object-cover" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-40 md:text-4xl font-bold text-[#13C0FA] dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-40 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#13C0FA] dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
