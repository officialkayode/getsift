
import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { CompanyCarousel } from "@/components/CompanyCarousel";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { FeatureGrid } from "@/components/how-it-works/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <CompanyCarousel />
      <ProblemStatement />
      <SolutionSection />
      <HowItWorksHero />
      <FeatureGrid />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
