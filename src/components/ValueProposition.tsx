import { Check } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-up">
            Accelerate Incident Resolution
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Capture Tribal Knowledge</h4>
                    <p className="text-white/70">Automatically document troubleshooting steps and decisions during RCA workflows.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Reduce Context Switching</h4>
                    <p className="text-white/70">Access relevant information without leaving your incident response workflow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Faster Resolution Times</h4>
                    <p className="text-white/70">Proactively surface similar incidents and successful resolution paths.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Improve Team Efficiency</h4>
                    <p className="text-white/70">Enable junior engineers to leverage senior engineers' experience through captured workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};