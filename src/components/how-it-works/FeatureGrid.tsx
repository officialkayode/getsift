import { MessageSquare, Brain, Zap, Shield, ArrowRight } from "lucide-react";

export const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Connects to Your Tools",
      description: "Sift integrates with your existing technical stack to capture context without workflow disruption.",
      items: ["Monitoring systems", "Incident management platforms", "System logs and metrics", "Documentation systems"]
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "Captures Critical Context",
      description: "Our AI automatically captures and indexes important technical context during incident response and troubleshooting.",
      items: ["System state changes", "Investigation steps", "Resolution patterns", "Technical decisions"]
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Surfaces Information Automatically",
      description: "Relevant information is proactively surfaced at critical decision points during technical workflows.",
      items: ["Similar past incidents", "Related system changes", "Previous solutions", "Expert insights"]
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Preserves Technical Knowledge",
      description: "Critical technical knowledge is preserved without requiring manual documentation efforts.",
      items: ["Implicit knowledge capture", "Automated context preservation", "Decision trail recording", "Technical pattern recognition"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-bold font-gelasio">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
            <ul className="space-y-2 text-muted-foreground">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};