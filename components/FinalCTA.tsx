// components/FinalCTA.tsx
'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const FinalCTA = () => {
  const router = useRouter();
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#FBB406]/10 to-[#13C0FA]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-baloo text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
            Give Your Child the Gift of <span className="text-[#13C0FA]">Fun Learning</span> Today
          </h2>
          <p className="font-antique text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who've transformed learning time with our printable worksheet bundle.
          </p>
          
          <div className="mb-8">
            <Button
              onClick={() => router.push('https://rzp.io/rzp/kj0uP2Ui')}
             className="bg-[#FBB406] hover:bg-[#13C0FA] bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo text-xl md:text-2xl font-bold py-4 md:py-6 px-8 md:px-12 rounded-full transition-colors duration-200">
              START YOUR JOURNEY NOW!
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#13C0FA]/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🎁</span>
              </div>
              <p className="font-antique text-sm text-gray-600">
                Bonus Activities<br />Included
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#13C0FA]/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">⏱️</span>
              </div>
              <p className="font-antique text-sm text-gray-600">
                Instant<br />Download
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#13C0FA]/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">✅</span>
              </div>
              <p className="font-antique text-sm text-gray-600">
                30-Day Money<br />Back Guarantee
              </p>
            </div>
          </div>
          
          <div className="py-3 px-4 bg-[#FBB406]/10 rounded-lg inline-block">
            <p className="font-antique text-sm text-gray-700">
              <span className="font-bold">⚡ Flash Sale:</span> Only <span className="text-[#FBB406] font-bold">12 hours left</span> at this special price!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;