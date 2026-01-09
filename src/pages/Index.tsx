import {
  SinglePageNavbar,
  HeroWithBackground,
  ProductSection,
  DemoSection,
  WaitlistSection,
  BlogSection,
  PrivacySection,
  SinglePageFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SinglePageNavbar />
      <HeroWithBackground />
      <ProductSection />
      <DemoSection />
      <WaitlistSection />
      <BlogSection />
      <PrivacySection />
      <SinglePageFooter />
    </main>
  );
};

export default Index;
