
import { Link2, Brain, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { fadeInUpClass } from "../shared/animations";

export const FeatureGrid = () => {
  const features = [
    {
      icon: <Link2 className="w-6 h-6 text-accent" />,
      title: "Seamless Integration",
      description: "Connect your entire tech stack with one click:",
      items: [
        "ServiceNow & Jira for incident tracking",
        "Slack & Teams for communication",
        "Confluence & wikis for documentation",
        "Datadog & Splunk for monitoring"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "AI-Powered Context",
      description: "Intelligent capture of critical technical context:",
      items: [
        "Smart workflow pattern detection",
        "Automated technical discussion indexing",
        "Incident-solution relationship mapping",
        "Real-time knowledge preservation"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Real-Time Insights",
      description: "Get relevant information exactly when needed:",
      items: [
        "Context-aware recommendations",
        "Historical incident correlation",
        "Actionable resolution insights",
        "Continuous learning system"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Auto Documentation",
      description: "Documentation that writes itself:",
      items: [
        "Self-updating resolution guides",
        "Pattern-based learning system",
        "Evolution with your systems",
        "Zero manual maintenance"
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
            An intelligent layer that captures and surfaces critical information during technical workflows—no manual work required.
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
