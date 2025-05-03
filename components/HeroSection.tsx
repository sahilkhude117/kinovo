// components/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#fffef2] overflow-hidden">
      <div className="aspect-square sm:aspect-video md:aspect-[16/8] lg:aspect-[16/7] xl:h-screen w-full">
        <div className="absolute inset-0 w-[120%] left-[-10%] sm:w-full sm:left-0">
          <video 
            className="w-full h-full object-cover"
            src="https://backend.beastphilanthropy.org/wp-content/uploads/2025/03/Bp-Sizzle-Website-Showreel.m4v" 
            autoPlay 
            muted 
            loop
            playsInline
            poster='https://backend.beastphilanthropy.org/wp-content/uploads/2024/07/video-cover-image-1-1.webp'
          ></video>
        </div>
      </div>
    </div>
  );
}