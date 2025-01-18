import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#312F2B]">
          Knowledge That Moves Your Team Forward
        </h1>
        <p className="text-xl md:text-2xl text-[#272525] mb-12 max-w-3xl mx-auto">
          Sift helps teams capture essential information and balance workloads, keeping your service teams running smoothly even during staff changes
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
          <Link to="/how-it-works">
            <Button variant="outline" size="lg">
              How Sift Works
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};