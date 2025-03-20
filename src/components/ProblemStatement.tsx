
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Search, Database, Brain } from "lucide-react";
import { fadeInUpClass } from "./shared/animations";

export const ProblemStatement = () => {
  const painPoints = [
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Time Waste",
      description: "Engineers spend 30% of their time solving problems that have already been solved before"
    },
    {
      icon: <Search className="h-6 w-6 text-accent" />,
      title: "Context Fragmentation",
      description: "Critical information scattered across ServiceNow, Confluence, Slack, Splunk, and logs"
    },
    {
      icon: <Database className="h-6 w-6 text-accent" />,
      title: "Knowledge Silos",
      description: "Expertise locked in people's heads disappears when employees leave or take PTO"
    },
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "Manual Documentation",
      description: "Post-incident documentation is often incomplete, outdated, or never created"
    }
  ];

  return (
    <section className="container px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-xl md:text-2xl font-bold mb-8 text-center ${fadeInUpClass}`}>
          Why support engineers lose precious time
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className={`border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${fadeInUpClass}`} style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                    <p className="text-foreground/70">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
