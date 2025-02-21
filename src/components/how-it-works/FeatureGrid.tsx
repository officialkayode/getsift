
import { Link2, Brain, Zap, Shield, ArrowRight, GitBranch, MessageSquare, BarChart } from "lucide-react";
import { fadeInUpClass } from "../shared/animations";

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
    <section className="py-16 md:py-24 bg-muted" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${fadeInUpClass}`}>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            How Sift Works
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Sift creates an intelligent layer that captures and surfaces critical information during technical workflows, eliminating the need for manual documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-accent/20 p-3 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{feature.title}</h3>
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
    </section>
  );
};
