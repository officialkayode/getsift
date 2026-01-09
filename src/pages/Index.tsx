import {
  SinglePageNavbar,
  HeroWithBackground,
  ProductSection,
  WaitlistSection,
  SinglePageFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SinglePageNavbar />
      <HeroWithBackground />
      <ProductSection />
      <WaitlistSection />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
