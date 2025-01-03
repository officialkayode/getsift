import { HeroSection } from "@/components/HeroSection.tsx";
import { InnovativeSolutions } from "@/components/InnovativeSolutions";
import { ValueProposition } from "@/components/ValueProposition";
import { CompetitiveLandscape } from "@/components/CompetitiveLandscape";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] text-[#272525]">
      <div className="min-h-screen">
        <HeroSection />
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