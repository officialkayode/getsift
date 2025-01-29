import { Brain, Database, Zap } from "lucide-react";

export const InnovativeSolutions = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-12 animate-fade-up">
          Our Solution
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Implicit Knowledge Capture</h3>
            <p className="text-white/70">
              Automatically captures valuable team knowledge during daily workflows, preserving critical insights without manual documentation.
            </p>
          </div>
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Database className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Smart Information Aggregation</h3>
            <p className="text-white/70">
              Intelligently combines and organizes information from various sources to create a comprehensive knowledge base.
            </p>
          </div>
          <div className="space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Proactive Delivery</h3>
            <p className="text-white/70">
              Delivers relevant information at critical decision points, ensuring teams have the context they need when they need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};