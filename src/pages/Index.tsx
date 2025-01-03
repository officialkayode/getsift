import { HeroSection } from "@/components/HeroSection.tsx";
import { InnovativeSolutions } from "@/components/InnovativeSolutions";
import { ValueProposition } from "@/components/ValueProposition";
import { CompetitiveLandscape } from "@/components/CompetitiveLandscape";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer.tsx";

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
