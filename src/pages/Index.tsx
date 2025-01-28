import { HeroSection } from "@/components/HeroSection";
import { CompanyCarousel } from "@/components/CompanyCarousel";
import { InnovativeSolutions } from "@/components/InnovativeSolutions";
import { ValueProposition } from "@/components/ValueProposition";
import { CompetitiveLandscape } from "@/components/CompetitiveLandscape";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-[#272525]">
      <div className="min-h-screen">
        <NavigationBar />
        <HeroSection />
        <CompanyCarousel />
        <InnovativeSolutions />
        <ValueProposition />
        <CompetitiveLandscape />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;