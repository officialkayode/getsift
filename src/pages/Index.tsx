import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { CompanyCarousel } from "@/components/CompanyCarousel";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-[#272525]">
      <div className="min-h-screen">
        <NavigationBar />
        <HeroSection />
        <ProblemStatement />
        <SolutionSection />
        <BenefitsSection />
        <CTASection />
        <CompanyCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default Index;