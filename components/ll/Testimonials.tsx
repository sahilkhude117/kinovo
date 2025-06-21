'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jones",
    quote: "LittleLesson made a huge difference in my daughter's literacy. She has fun while learning, and I feel reassured knowing the material is high-quality. The bonuses were an unexpected gift—I'll definitely recommend it!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    quote: "The platform exceeded my expectations. My son's reading skills improved dramatically within just a few weeks. The interactive lessons keep him engaged for hours.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    quote: "As a teacher, I appreciate the pedagogical approach. The curriculum is well-structured and the progress tracking helps me understand each child's learning journey.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    quote: "Fantastic resource for homeschooling. The variety of activities keeps my kids interested and the quality of content is outstanding. Worth every penny!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Park",
    quote: "My daughter was struggling with reading until we found this platform. Now she reads confidently and actually enjoys it. The transformation has been incredible.",
    rating: 5,
  }
];

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-8 md:py-8 px-2 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            What Parents Say
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Discover how our platform has made a difference in children's learning journeys
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-[50px] md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 mx-2 md:mx-8 relative"
            >
              {/* Speech bubble pointer */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-4 bg-white rotate-45 shadow-lg"></div>
              </div>

              {/* Profile Image/Initial */}
              <motion.div 
                className="flex justify-center mb-4 md:mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                  {currentTestimonial.image ? (
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                      {getInitials(currentTestimonial.name)}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Name */}
              <motion.h3 
                className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center mb-2 md:mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {currentTestimonial.name}
              </motion.h3>

              {/* Quote */}
              <motion.blockquote 
                className="text-sm md:text-base lg:text-lg text-gray-600 text-center mb-4 md:mb-6 leading-relaxed italic max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                "{currentTestimonial.quote}"
              </motion.blockquote>

              {/* Rating */}
              <motion.div 
                className="flex justify-center space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {renderStars(currentTestimonial.rating)}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 m-1 md:p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center space-x-2 mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;