import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Video backdrop covers the entire page */}
      <div className="relative">
        <HeroSection />
        
        {/* Only keep the footer */}
        <div className="relative bg-background">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
