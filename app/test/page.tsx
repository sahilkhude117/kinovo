// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ValueProposition from "@/components/ValueProposition";
import BenefitsSection from "@/components/FloatingBubbles";
import BundleOverview from "@/components/BundleOverview";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ReviewsSection from "@/components/ShortReview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <ReviewsSection/>
      <BenefitsSection/>
      {/* <ValueProposition/> */}
      {/* <BundleOverview/> */}
      <CategoriesSection/>
      <HowItWorks/>
      <TestimonialsCarousel/>
      <FinalCTA/>
      <FAQSection/>
      <Footer />
    </main>
  );
}