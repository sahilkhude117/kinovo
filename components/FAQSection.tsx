// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Mock data for FAQs
const faqs = [
  {
    question: "What ages are these worksheets suitable for?",
    answer: "Our worksheets are designed for children ages 3-10. The bundle includes activities for different skill and difficulty levels, so you can find appropriate content whether your child is a preschooler or in elementary school."
  },
  {
    question: "How do I access the worksheets after purchase?",
    answer: "After completing your purchase, you'll receive an email with a download link. You can download the entire bundle as a ZIP file. The worksheets are provided in PDF format which you can print directly from your computer."
  },
  {
    question: "Can I print the worksheets multiple times?",
    answer: "Yes! Once you purchase the bundle, you can print the worksheets as many times as you need for personal use. This is perfect for families with multiple children or teachers working with different students."
  },
  {
    question: "Are these worksheets aligned with educational standards?",
    answer: "Yes, our worksheets are created by experienced educators and align with common educational standards. They focus on developing key skills across multiple subject areas while keeping learning fun and engaging."
  },
  {
    question: "Do I need special materials to use these worksheets?",
    answer: "Most of our worksheets only require basic supplies like pencils, crayons, or markers. Some activities might suggest using scissors, glue, or other common household items, but we've designed the bundle to be accessible with minimal supplies."
  },
  {
    question: "What if the worksheets aren't right for my child?",
    answer: "We offer a 30-day satisfaction guarantee. If you find that our worksheets aren't suitable for your child's needs, contact our customer support team within 30 days of purchase for a full refund."
  }
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-antique text-gray-600">
            Everything you need to know about our worksheet bundle.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#13C0FA]/5 rounded-lg overflow-hidden"
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-baloo text-lg text-gray-800">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="p-6 pt-0">
                  <p className="font-antique text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-antique text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="font-baloo text-[#13C0FA] hover:text-[#0fabde] flex items-center justify-center mx-auto">
            <span>Contact Support</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;