// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

// Mock data for FAQs
const faqs = [
  {
    question: "How am I going to receive the Kinovo?",
    answer: "Quickly and easily, after purchase approval, access to the content will be automatically sent to your email. You can then print it at your convenience and do it with your child."
  },
  {
    question: "Will the material be delivered to my house? Is the product physical?",
    answer: "No, nothing will be sent to your residence. Kinovo is ENTIRELY DIGITAL (in PDF) and will be sent to your email."
  },
  {
    question: "How long does it take to receive the material?",
    answer: "After completing your purchase, you will receive access to the product for download in your registered email."
  },
  {
    question: "Is the payment one-time?",
    answer: "Yes, you pay once and have unlimited access to the purchased material, being able to access and download it as many times as you want."
  },
  {
    question: "Which age group is Kinovo's material suitable for?",
    answer: "For children aged 1 to 10 years."
  },
  {
    question: "Can children over 10 years old do the Kinovo?",
    answer: "Without a doubt, we even recommend it, as this way you'll be able to gauge the child's level of learning. We've had many cases of children older than 10 years old who have completed Kinovo activities, and the feedback has been very positive."
  },
  {
    question: "What are the bonuses?",
    answer: "Besides all the aforementioned materials, you will also receive, free of charge, 3 Exclusive Kinovo Bonuses (the Cut and Glue, Drawings to Color, and Games and Playtime). But not only that, upon completing the activities, your little one will also receive a Personalized Children's Diploma with their name."
  },
  {
    question: "What is the price in my local currency?",
    answer: "To see the price in your country's currency, simply click on the button and you will be redirected to the page where the value of Kinovo in your local currency is automatically displayed."
  },
  {
    question: "What form of payment do you accept?",
    answer: "We accept almost all payment methods. To view them, click on the button and you will be redirected to the page where all the available payment methods in your country are listed."
  },
  {
    question: "Is the payment method reliable?",
    answer: "Your data is 100% protected because we use Razorpay's payment gateway, one of the largest and most recognized infoproduct platforms worldwide."
  }
];

const FAQSection = () => {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="faq" className="mt-4 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo text-2xl md:text-4xl text-gray-800 mb-2 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-antique text-sm md:text-basetext-gray-600">
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
                <h3 className="font-baloo text-base md:text-lg text-gray-800">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="p-6 pt-0">
                  <p className="font-antique text-sm md:text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-antique text-sm md:text-base text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button onClick={() => router.push('/policies/contact')} className="font-baloo text-[#13C0FA] hover:text-[#0fabde] flex items-center justify-center mx-auto">
            <span>Contact Support</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="justify-center">
            <Button
                className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo py-6 md:py-8 px-12 md:px-16 mt-5 mb-5 px-16 text-3xl md:text-4xl md:py-12 md:px-24 font-bold  rounded-full transition-colors duration-200 mt-10"
                onClick={() => router.push('#pricing')}
            >
                I Want Kinovo
            </Button>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;