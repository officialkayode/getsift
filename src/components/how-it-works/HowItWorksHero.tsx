
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "../shared/animations";

export const HowItWorksHero = () => {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 text-center">
      <div className={fadeInUpClass}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-orbitron bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          How Sift Works
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/70 font-cormorant mb-8 leading-relaxed">
          Sift creates an intelligent layer that captures and surfaces critical information during technical workflows, eliminating the need for manual documentation
        </p>
      </div>
    </section>
  );
};
