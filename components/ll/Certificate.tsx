'use client'
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ScratchToReveal } from "../magicui/scratch-to-reveal";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ResponsiveImageDemo() {
  const [dimensions, setDimensions] = useState({
    width: 450,
    height: 320
  });

  // Update dimensions based on screen size
  useEffect(() => {
    const handleResize = () => {
      // For larger screens (md breakpoint is typically 768px)
      if (window.innerWidth >= 768) {
        setDimensions({
          width: 650,
          height: 430
        });
      } else if (window.innerWidth >= 400) {
        // Medium-small screens
        setDimensions({
          width: 450,
          height: 320
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
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="/images/contents/certificate.png"
          alt="Beautiful landscape"
          width={dimensions.width}
          height={dimensions.height}
          className="object-cover"
          style={{
            width: dimensions.width,
            height: dimensions.height
          }}
        />
      </div>
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
        <div className="flex flex-col items-center justify-center">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo font-bold text-xl mt-6 md:text-2xl ">+ Personalized Certificate</RainbowButton>
            <div className="mb-6 md:mb-10 mt-6 md:mt-10">
                <ResponsiveImageDemo/>
            </div>
            <div className="justify-center">
                <Button
                    className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo mt-4 mb-5 py-6 md:py-8 px-12 md:px-16 text-3xl md:text-4xl md:py-12 md:px-24 font-bold  rounded-full transition-colors duration-200 md:mt-10 mb-10"
                    onClick={() => router.push('#pricing')}
                >
                    I Want Kinovo
                </Button>
            </div>
        </div> 
    )
}




