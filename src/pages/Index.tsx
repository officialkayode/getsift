
import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { CompanyCarousel } from "@/components/CompanyCarousel";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { FeatureGrid } from "@/components/how-it-works/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <NavigationBar />
      <HeroSection />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <CompanyCarousel />
      </div>
      <ProblemStatement />
      <SolutionSection />
      <FeatureGrid />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
