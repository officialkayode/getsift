import { HeroSection } from "@/components/sections/HeroSection";
import { InnovativeSolutions } from "@/components/sections/InnovativeSolutions";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { CompetitiveLandscape } from "@/components/sections/CompetitiveLandscape";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="min-h-screen bg-slate-900 text-slate-100">
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
