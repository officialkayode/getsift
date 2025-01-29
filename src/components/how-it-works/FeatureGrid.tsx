import { Link2, Brain, Zap, Shield, ArrowRight, GitBranch, MessageSquare, BarChart } from "lucide-react";

export const FeatureGrid = () => {
  const features = [
    {
      icon: <Link2 className="w-6 h-6 text-accent" />,
      title: "Technical Integration",
      description: "Unified Data Layer with native integration to your tech stack:",
      items: [
        "Incident Management: ServiceNow, Jira, PagerDuty",
        "Communication: Slack, Teams",
        "Documentation: Confluence, internal wikis",
        "Monitoring: Datadog, Splunk, ELK",
        "Version Control: GitHub, GitLab"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "Automated Context Collection",
      description: "Our intelligent system automatically captures and indexes critical technical context:",
      items: [
        "Captures workflow patterns and technical decisions",
        "Indexes technical discussions and resolution paths",
        "Maps relationships between incidents and solutions",
        "Preserves documentation automatically"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Intelligent Knowledge Delivery",
      description: "Smart delivery of relevant technical context exactly when needed:",
      items: [
        "Surfaces relevant context based on current workflow",
        "Correlates historical incidents with current issues",
        "Provides actionable insights from past resolutions",
        "Real-time knowledge evolution"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Auto Documentation",
      description: "Automated documentation generation and maintenance:",
      items: [
        "Updates documentation based on actual resolutions",
        "Learns from successful troubleshooting patterns",
        "Maintains technical context as systems evolve",
        "Continuous system improvement"
      ]
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
            <h2 className="text-xl md:text-2xl font-bold font-gelasio">{feature.title}</h2>
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