import {
  SinglePageNavbar,
  HeroWithBackground,
  LogoStrip,
  ProblemSection,
  SolutionSection,
  TrustSection,
  SinglePageFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SinglePageNavbar />
      <HeroWithBackground />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <LogoStrip />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
