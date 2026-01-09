import {
  SiftHero,
  TrustStrip,
  ProblemSection,
  HowItWorks,
  InitiativeSection,
  ProductSurfaces,
  ReliabilityFramework,
  IntegrationsSection,
  FinalCTA,
  SiftFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SiftHero />
      <TrustStrip />
      <ProblemSection />
      <HowItWorks />
      <InitiativeSection />
      <ProductSurfaces />
      <ReliabilityFramework />
      <IntegrationsSection />
      <FinalCTA />
      <SiftFooter />
    </main>
  );
};

export default Index;
