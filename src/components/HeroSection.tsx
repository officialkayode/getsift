import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Capture Critical Knowledge During RCA
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
          Sift automatically captures and surfaces relevant information during incident response, 
          helping teams make faster, more informed decisions without disrupting their workflow
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};