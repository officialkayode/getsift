import { NavigationBar } from "@/components/NavigationBar";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { FeatureGrid } from "@/components/how-it-works/FeatureGrid";
import { HowItWorksCTA } from "@/components/how-it-works/HowItWorksCTA";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <NavigationBar />
      <HowItWorksHero />
      <FeatureGrid />
      <HowItWorksCTA />
    </div>
  );
};

export default HowItWorks;