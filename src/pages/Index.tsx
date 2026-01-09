import {
  SinglePageNavbar,
  HeroWithBackground,
  ProductSection,
  SinglePageFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SinglePageNavbar />
      <HeroWithBackground />
      <ProductSection />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
