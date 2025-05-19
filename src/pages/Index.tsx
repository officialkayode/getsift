
import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { CompanyCarousel } from "@/components/CompanyCarousel";
import { Footer } from "@/components/Footer";
import { FeatureGrid } from "@/components/how-it-works/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Video backdrop covers the entire page */}
      <div className="relative">
        <HeroSection />
        
        {/* Content sections stacked on top of the video background */}
        <div className="relative bg-background">
          <CompanyCarousel />
          <ProblemStatement />
          <SolutionSection />
          <FeatureGrid />
          <BenefitsSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
