// components/HowItWorks.tsx
'use client'
import { Book, Download, Rocket } from "lucide-react";
import Image from "next/image";
import {motion} from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      icon: "🛒",
      title: "Purchase & Download",
      description: "Buy once and get instant access to the entire bundle of 150+ printable worksheets."
    },
    {
      icon: "🖨️",
      title: "Print What You Need",
      description: "Simply print the worksheets you want to use. No need to print everything at once."
    },
    {
      icon: "✏️",
      title: "Learn & Have Fun",
      description: "Watch your child enjoy screen-free learning while developing essential skills."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-baloo text-3xl md:text-4xl text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="font-antique text-gray-600 max-w-2xl mx-auto">
            Get started in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>
            {[
              {
                step: <Book/>,
                title: "Choose Your Kit",
                description: "Browse age-appropriate learning materials",
              },
              {
                step: <Download/>,
                title: "Instant Download",
                description: "Get PDFs immediately after payment",
              },
              {
                step: <Rocket/>,
                title: "Learn & Grow",
                description: "Print and start the fun learning journey",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FBB406] text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
        </div>

        {/* <div className="mt-16 bg-[#FBB406]/10 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/parenting.webp"
                  alt="Child enjoying worksheets"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="font-baloo text-2xl text-gray-800 mb-4">
                Easy to Use, Big Results
              </h3>
              <p className="font-antique text-gray-700 mb-4">
                Our worksheets are designed to be straightforward for parents to implement and engaging for children to complete. Each activity includes simple instructions and is crafted to provide meaningful learning opportunities.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h4 className="font-baloo text-gray-800">Pro Tip</h4>
                    <p className="font-antique text-sm text-gray-600">
                      Store printed worksheets in a binder with tab dividers for each subject. Perfect for on-the-go learning!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;