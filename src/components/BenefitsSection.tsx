
import { ChartLine, Brain, Clock, Link } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="container px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Why Sift?</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="flex items-start gap-4">
            <ChartLine className="w-6 h-6 text-accent" />
            <div>
              <h3 className="font-bold mb-2">Faster RCA</h3>
              <p className="text-foreground/70 text-lg">Reduce time spent searching across tools.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Brain className="w-6 h-6 text-accent" />
            <div>
              <h3 className="font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-foreground/70 text-lg">Context-aware recommendations for quicker resolution.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-accent" />
            <div>
              <h3 className="font-bold mb-2">Knowledge That Evolves</h3>
              <p className="text-foreground/70 text-lg">Documentation updates itself as your team works.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Link className="w-6 h-6 text-accent" />
            <div>
              <h3 className="font-bold mb-2">Seamless Integrations</h3>
              <p className="text-foreground/70 text-lg">Works where you work (ServiceNow, Slack, Splunk, Confluence).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
