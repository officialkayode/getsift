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
      
      {/* Full-page background wrapper with fixed image */}
      <div 
        className="relative bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: `url('/images/sift-hero-coast.jpg.png')`,
        }}
      >
        <HeroWithBackground />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
      </div>
      
      <LogoStrip />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
