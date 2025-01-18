import { HeroSection } from "@/components/HeroSection";
import { NavigationBar } from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] text-[#272525]">
      <NavigationBar />
      <div className="min-h-screen">
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;