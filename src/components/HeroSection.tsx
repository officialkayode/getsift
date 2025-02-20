
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className={`text-center ${fadeInUpClass}`}>
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 text-accent font-medium text-sm">
          Bringing clarity to incident management
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight">
          Unify. Analyze. Resolve.
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto font-sans leading-relaxed">
          Transform scattered logs and alerts into actionable insights. Sift brings all your incident data together, helping SREs and TSEs diagnose and resolve issues swiftly.
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
          <div className="flex items-center gap-2 text-accent">
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">Join forward-thinking teams already using Sift</span>
          </div>
        </div>
      </div>
    </div>
  );
};
