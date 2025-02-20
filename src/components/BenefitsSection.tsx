
import { Database, Brain, Clock, Link } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="container px-4 py-16 bg-primary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-12 font-display text-center">Why Choose Sift?</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-primary/30 rounded-lg p-6 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Unified Data</h3>
                <p className="text-white/70 font-sans text-lg">Bringing all your incident data together in one cohesive view.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/30 rounded-lg p-6 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Intelligent Analysis</h3>
                <p className="text-white/70 font-sans text-lg">Transform raw logs into actionable insights through advanced AI.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/30 rounded-lg p-6 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Swift Resolution</h3>
                <p className="text-white/70 font-sans text-lg">Reduce downtime with tools that expedite diagnosis and resolution.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/30 rounded-lg p-6 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Link className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2 font-display">Seamless Integration</h3>
                <p className="text-white/70 font-sans text-lg">Works with your existing tools: ServiceNow, Splunk, Slack, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
