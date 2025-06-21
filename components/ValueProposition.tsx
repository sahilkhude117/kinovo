// components/ValueProposition.tsx
import Image from "next/image";
import { Check } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    "Teacher-created content",
    "Age-appropriate activities",
    "Instant digital delivery",
    "Print & use anytime",
    "Supports multiple learning styles",
    "Progress tracking sheets included"
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            Screen-Free Learning Made Simple
          </h2>
          <p className="font-antique text-gray-600 max-w-2xl mx-auto">
            Give your child the joy of hands-on learning with our premium worksheets designed to make education fun and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/api/placeholder/600/500"
              alt="Child enjoying worksheets"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-baloo text-2xl text-gray-800 mb-6">
              Why Parents & Teachers Love Our Worksheets
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="mt-1 bg-[#13C0FA]/10 rounded-full p-1">
                    <Check size={16} className="text-[#13C0FA]" />
                  </div>
                  <span className="font-antique text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#FBB406]/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-[#FBB406] rounded-full p-2 text-white">
                  🏆
                </div>
                <div>
                  <p className="font-baloo text-gray-800">
                    Trusted by 1,000+ families nationwide
                  </p>
                  <p className="font-antique text-sm text-gray-600">
                    Developed by experienced educators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;