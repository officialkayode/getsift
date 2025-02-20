
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "../shared/animations";

export const HowItWorksCTA = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className={fadeInUpClass}>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 font-orbitron bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Ready to transform your technical operations?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/70 font-cormorant leading-relaxed">
          Join the waitlist today and be among the first to experience the future of technical knowledge management.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
};
