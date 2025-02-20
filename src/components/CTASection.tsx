
import { WaitlistForm } from "@/components/WaitlistForm";
import { Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/30">
      <div className="container px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-accent/10">
            <Users className="w-6 h-6 text-accent" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
          Join Industry Leaders
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto font-sans">
          Forward-thinking teams are already transforming their incident management with Sift. Be among the first to experience the future of technical operations.
        </p>
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};
