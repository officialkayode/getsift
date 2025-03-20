
import { Link2, Brain, Zap, MessageSquare, ArrowRight, LineChart, Filter, AlarmClock } from "lucide-react";
import { fadeInUpClass } from "../shared/animations";

export const FeatureGrid = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-accent" />,
      title: "Smart Data Aggregation",
      description: "Unify your support toolkit in one place:",
      items: [
        "Automatically pulls from ServiceNow & Jira tickets",
        "Indexes Slack & Teams discussions in real-time",
        "Connects to Datadog & Splunk for logs analysis",
        "Syncs with Confluence & wikis for documentation"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "LLM-Powered Analysis",
      description: "Leverage advanced AI to extract meaning:",
      items: [
        "Explains complex log outputs in plain English",
        "Identifies patterns across similar incidents",
        "Connects related incidents that humans miss",
        "Suggests root causes based on historical data"
      ]
    },
    {
      icon: <Filter className="w-6 h-6 text-accent" />,
      title: "Contextual Knowledge",
      description: "Get exactly what you need, when you need it:",
      items: [
        "Surfaces relevant past solutions automatically",
        "Filters noise to highlight critical signals",
        "Delivers insights based on your current context",
        "Adapts to your team's unique knowledge needs"
      ]
    },
    {
      icon: <AlarmClock className="w-6 h-6 text-accent" />,
      title: "Dynamic Documentation",
      description: "Knowledge that evolves with your team:",
      items: [
        "Auto-captures resolution steps and decisions",
        "Creates living documentation that updates itself",
        "Builds searchable knowledge base as you work",
        "Preserves institutional knowledge permanently"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-muted" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${fadeInUpClass}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            How Sift Works
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            An intelligent layer that captures context from your support workflows and delivers knowledge exactly when you need it—no manual work required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative space-y-6 p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="bg-accent/10 p-3 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground/90">{feature.title}</h3>
              <p className="text-foreground/60 text-lg">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-accent" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
