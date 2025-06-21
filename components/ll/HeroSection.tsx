'use client'
import { ArrowRight, Check } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { HeroVideo } from "./HeroVideo";
import { AnimatedShinyTextBadge } from "./AnimatedShinyBadge";
import { AvatarCloud } from "./AvatarCloud";
import { Spotlight } from "../ui/spotlight-new";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter();

    const words = ["Premium", "Curated", "Engaging", "Creative", "Essential"];

    return (
        <section className="w-full md:py-10 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-6xl mx-auto mb-12"
            >
              <AnimatedShinyTextBadge/>
              <div className="flex flex-col justify-center items-center">
                    <div className="text-xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#13C0FA]">
                        <FlipWords words={words} className="text-xl md:text-5xl lg:text-6xl font-bold" /> Worksheets
                    </div>
                    <div className="text-xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                        For Smarter Kids, Happier Parents
                    </div>
              </div>
              <p className="text-xs md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Thousands of premium printable worksheets that make childhood education fun, engaging, and effortlessly organized.
              </p>
              <div className="flex justify-center items-center mb-6 md:mb-12">
                <HeroVideo/>
              </div>
              <div className="flex justify-center items-center mb-6 md:mb-12">
                <AvatarCloud/>
              </div>
              <div className="justify-center">
                <Button
                    className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-6 md:py-8 px-12 md:px-16 text-3xl md:text-4xl md:py-12 md:px-24 font-bold  rounded-full transition-colors duration-200"
                    onClick={() => router.push('#pricing')}
                >
                    I WANT
                </Button>
              </div>
            </motion.div>
          </div>
      </section>
    )
}

export default HeroSection;