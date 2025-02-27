import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";
export const HeroSection = () => {
  return <section className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className={`text-center ${fadeInUpClass}`}>
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-6">AI-powered context-aware assistant for support engineering teams.</h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed text-center">Sift is a context-aware assistant designed for high-performing reliability and support engineering teams. It aggregates logs, detects patterns, captures implicit knowledge, proactively delivers knowledge, and auto-documents root causes, enabling faster and more efficient incident resolution.</p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </section>;
};