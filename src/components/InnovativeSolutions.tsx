import { Brain, Zap, Clock } from "lucide-react";

export const InnovativeSolutions = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-up">
          Implicit Knowledge Capture
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Automated Context Capture</h3>
            <p className="text-white/70">
              Automatically records actions, decisions, and context during incident response without disrupting the workflow.
            </p>
          </div>
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Proactive Information Delivery</h3>
            <p className="text-white/70">
              Surfaces relevant historical context and similar incidents at critical decision points during RCA.
            </p>
          </div>
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Time-to-Resolution Focus</h3>
            <p className="text-white/70">
              Reduces MTTR by eliminating time spent searching for information or documenting after the fact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};