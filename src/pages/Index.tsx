import {
  SiftNavbar,
  CompactHero,
  CompactProduct,
  CompactTrust,
  CompactCTA,
  CompactFooter,
} from "@/components/landing";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <SiftNavbar />
      <CompactHero />
      <CompactProduct />
      <CompactTrust />
      <CompactCTA />
      <CompactFooter />
    </main>
  );
};

export default Index;
