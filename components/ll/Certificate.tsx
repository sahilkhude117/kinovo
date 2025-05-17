'use client'
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ScratchToReveal } from "../magicui/scratch-to-reveal";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ScratchToRevealDemo() {

  const [dimensions, setDimensions] = useState({
    width: 300,
    height: 200
  });

  // Update dimensions based on screen size
  useEffect(() => {
    const handleResize = () => {
      // For larger screens (md breakpoint is typically 768px)
      if (window.innerWidth >= 768) {
        setDimensions({
          width: 650, // Slightly reduced from 750
          height: 430  // Slightly reduced from 500
        });
      } else if (window.innerWidth >= 400) {
        // Medium-small screens
        setDimensions({
          width: 350,
          height: 250
        });
      } else {
        // Very small screens
        setDimensions({
          width: 320,
          height: 220
        });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center px-2">
    <ScratchToReveal
      width={dimensions.width}
      height={dimensions.height}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <Image
        src={'/images/contents/certificate.png'}
        alt="certificate"
        height={"600"}
        width="600"
        className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
      />
    </ScratchToReveal>
    </div>
  );
}

export default function Certificate() {
  const router = useRouter();
    const word = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
    `;
    const words = [
        {
            text: "Scratch",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
        text: "To",
        },
        {
        text: "Reveal",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center bg-blue-50">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo font-bold mt-20 text-xl md:text-2xl ">Surprise For You</RainbowButton>
            <div>
                <TypewriterEffectSmooth words={words} className="text-md md:text-md lg:text-md xl:text-md"/>
            </div>
            <div className="mb-10">
                <ScratchToRevealDemo/>
            </div>
            <div>
                <div className="bg-orange-600 px-3 py-2 text-white font-baloo font-bold text-xl md:text-2xl rounded-md mb-5">RECOMMENDED AGE</div>
            </div>
            <div className="flex flex-row font-baloo text-xl md:text-2xl font-bold mb-5">FOR CHILDREN AGED <div className="text-[#00c2cb] font-baloo text-xl md:text-2xl font-bold pl-2">1 TO 10 YEARS</div></div>
            <div className="flex justify-center item-center mb-5 ml-10 mr-10 max-w-2xl">
                <div className="font-baloo text-base md:text-xl font-semibold text-center">Kinovo is recommended for children aged 1 to 10. Therefore, if your child falls within this age range, you can purchase with confidence, as you will find activities suitable for all ages between 1 and 10.</div>
            </div>
            <div className="justify-center">
                <Button
                    className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-8 mt-5 mb-5 px-16 text-3xl md:text-4xl md:py-12 md:px-24 font-bold  rounded-full transition-colors duration-200 md:mt-10 mb-10"
                    onClick={() => router.push('#pricing')}
                >
                    I Want Kinovo
                </Button>
            </div>
        </div> 
    )
}

