'use client'
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function BottomBanner() {
    const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  
  // Optional: Add functionality to hide banner
  const hideBanner = () => {
    setIsVisible(false);
  };
  
  return isVisible ? (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center sm:px-6 md:px-8">
      <div 
        className="w-full max-w-5xl bg-blue-200 rounded-t-2xl shadow-lg relative"
        style={{
          borderBottom: '8px solid #FBB406',
          fontFamily: '"Baloo", sans-serif',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-6">
          <div className="text-black text-base md:text-xl mb-3 sm:mb-0 text-center sm:text-left">
            Wondering what to get?
          </div>
          
          <Button 
            className="bg-[#FBB406] hover:bg-[#13C0FA] text-base font-baloo text-white transition-colors px-8 py-0 rounded-full"
            onClick={() => router.push('/quiz')}
          >
            TAKE OUR QUIZ!
          </Button>
        </div>
        
        {/* Optional close button */}
        <button 
          onClick={hideBanner}
          className="absolute top-2 right-2 text-black hover:text-gray-200 pl-2"
          aria-label="Close banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  ) : null;
}