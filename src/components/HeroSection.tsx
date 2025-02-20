
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16 bg-background">
      <div className={`text-center ${fadeInUpClass}`}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-orbitron bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Resolve Issues Faster. Work Smarter.
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto font-cormorant leading-relaxed">
          Sift captures your team's implicit knowledge, aggregates essential information, and delivers it at critical decision points—so you never waste time searching.
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};
