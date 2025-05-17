'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function AnimatedTestimonialsDemo() {
  const router = useRouter();
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 w-full overflow-hidden">
        <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo mt-16 text-xl md:text-2xl">Happy Parents</RainbowButton>
        <div className="w-full max-w-full">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        <div className="flex justify-center items-center w-full px-4">
          <Button
              className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-4 px-6 text-xl md:text-3xl lg:text-4xl md:py-8 md:px-16 lg:py-12 lg:px-24 font-bold rounded-full transition-colors duration-200 mb-10 w-full md:w-auto"
              onClick={() => router.push('#pricing')}
          >
              I Also Want
          </Button>
      </div>
    </div>
  )
}
