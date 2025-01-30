import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-16 pb-12 md:pt-24 md:pb-16 bg-background">
      <div className="text-center animate-fade-up">
        <h1 className="text-xl md:text-3xl font-bold mb-4 font-orbitron">
          Resolve Issues Faster. Work Smarter.
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto font-orbitron">
          Sift captures your team's implicit knowledge, aggregates essential information, and delivers it at critical decision points—so you never waste time searching.
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};