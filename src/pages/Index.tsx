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
      <LogoStrip />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
