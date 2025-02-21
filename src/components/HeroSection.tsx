
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16 bg-background">
      <div className={`text-center ${fadeInUpClass}`}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
          Resolve Issues Faster. Work Smarter.
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Sift captures your team's implicit knowledge, aggregates essential information, and delivers it at critical decision points—so you never waste time searching.
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};
