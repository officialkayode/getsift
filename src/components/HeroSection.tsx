
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";
import { Highlighter } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className={`text-center ${fadeInUpClass}`}>
        <div className="flex items-center justify-center mb-3">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <Highlighter className="mr-1 h-4 w-4" />
            The Grammarly for Support Engineering
          </span>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-6">
          Never solve the same problem twice
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
          Sift is an AI-powered context-aware assistant that helps support engineers resolve incidents faster.
          It aggregates data from your tools, learns from past incidents, and delivers contextual insights
          right when you need them.
        </p>
        <div className="flex flex-col items-center gap-6">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};
