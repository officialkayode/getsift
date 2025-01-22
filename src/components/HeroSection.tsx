import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Right Knowledge, Right Time, Right Team 
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
          Sift helps teams aggregate essential information and proactively deliver at critical decision points while balancing workloads, keeping your service teams running smoothly even during staff changes
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};
