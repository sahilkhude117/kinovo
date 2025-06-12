import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Benifits } from "@/components/ll/Benifits";
import BonusCards from "@/components/ll/BonusCards";
import Certificate from "@/components/ll/Certificate";
import { ContentCard } from "@/components/ll/DragableCard";
import HeroSection from "@/components/ll/HeroSection";
import { HowItWorks } from "@/components/ll/HowItWorks";
import {OfferBanner} from "@/components/ll/OfferBanner";
import PricingSection from "@/components/ll/Pricing";
import TestimonialsSection from "@/components/ll/Testimonials";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main>
            <OfferBanner
                title = "Get 25% Off"
                description = ""
                linkText = "Get Now"
                linkUrl = "#pricing"
                defaultVisible
            />
            <Navbar/>
            <HeroSection/>
            <HowItWorks/>
            <ContentCard/>
            <BonusCards/>
            <Certificate/>
            <Benifits/>
            <PricingSection/>
            <TestimonialsSection/>
            <FAQSection/>
            <Footer/>
        </main>
    )
}
