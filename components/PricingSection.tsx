// components/PricingSection.tsx
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const features = [
    "150+ printable worksheets",
    "12 skill categories",
    "Ages 3-10 activities",
    "Instant digital download",
    "Print as many copies as needed",
    "Lifetime access to files",
    "Regular updates with new content",
    "30-day satisfaction guarantee"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FBB406]/10 text-[#FBB406] px-4 py-1 rounded-full mb-4 font-baloo">
            Limited Time Offer
          </span>
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            Get Your Complete Worksheet Bundle
          </h2>
          <p className="font-antique text-gray-600 max-w-2xl mx-auto">
            One-time payment, lifetime access to all current and future worksheets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
          <div className="bg-[#13C0FA] p-4 text-center">
            <h3 className="font-baloo text-2xl text-white">
              Complete Kids' Worksheet Bundle
            </h3>
          </div>
          
          <div className="p-8">
            <div className="flex justify-center items-center mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 line-through font-antique text-xl">$49.99</span>
                  <span className="ml-2 bg-[#FBB406] text-white px-3 py-1 rounded-full text-sm font-baloo">
                    SAVE 40%
                  </span>
                </div>
                <div className="font-baloo text-5xl text-gray-800 my-2">$29.99</div>
                <p className="font-antique text-gray-600 text-sm">
                  Less than 20¢ per worksheet
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="mt-1 bg-[#13C0FA]/10 rounded-full p-1">
                    <Check size={16} className="text-[#13C0FA]" />
                  </div>
                  <span className="font-antique text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#FBB406] hover:bg-[#e9a706] text-white font-baloo py-6 text-lg rounded-full">
              Get Your Bundle Now
            </Button>
            
            <div className="mt-4 flex justify-center space-x-3">
              <div className="flex items-center">
                <span className="text-2xl mr-1">🔒</span>
                <span className="font-antique text-xs text-gray-600">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-1">⚡</span>
                <span className="font-antique text-xs text-gray-600">Instant Access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-[#13C0FA]/5 rounded-lg p-4 inline-block">
            <p className="font-antique text-gray-700">
              <span className="font-bold">Special Offer:</span> Order now and get <span className="text-[#13C0FA] font-bold">10 bonus activities</span> free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;