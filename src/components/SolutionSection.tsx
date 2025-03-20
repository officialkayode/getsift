
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUpClass } from "./shared/animations";
import { Bot, Zap, LineChart, Layers } from "lucide-react";

export const SolutionSection = () => {
  const solutionPoints = [
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "Contextual AI Assistant",
      description: "Sift uses advanced LLMs to understand logs, tickets, and chat data, providing instant context from your entire tech stack."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Proactive Knowledge Delivery",
      description: "Get relevant insights from past incidents precisely when you need them, before you even know to search."
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Pattern Recognition",
      description: "Automatically detect recurring issues and suggest proven resolutions based on historical data patterns."
    },
    {
      icon: <Layers className="h-6 w-6 text-white" />,
      title: "Self-Updating Documentation",
      description: "Documentation that writes itself as you work, capturing tacit knowledge and ensuring it's never lost."
    }
  ];

  return (
    <section className="container px-4 py-16 bg-accent/10 rounded-3xl my-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-xl md:text-2xl font-bold mb-8 text-center ${fadeInUpClass}`}>
          Sift: Your Context-Aware Support Partner
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {solutionPoints.map((point, index) => (
            <Card key={index} className={`bg-primary border-none ${fadeInUpClass}`} style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">{point.title}</h3>
                    <p className="text-white/80">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 rounded-xl p-6 mt-8 backdrop-blur-sm border border-white/20 text-center">
          <h3 className="text-lg font-bold mb-4 text-accent">Seamless Integration With Your Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/5 rounded-lg p-3">ServiceNow & Jira</div>
            <div className="bg-white/5 rounded-lg p-3">Slack & Teams</div>
            <div className="bg-white/5 rounded-lg p-3">Splunk & Datadog</div>
            <div className="bg-white/5 rounded-lg p-3">Confluence & Wikis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
