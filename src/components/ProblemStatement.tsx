
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="container px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <AlertCircle className="w-6 h-6 text-accent" />
          <h2 className="text-xl md:text-2xl font-bold font-display text-center">The Challenge: Modern IT Complexity</h2>
        </div>
        
        <div className="space-y-6 mb-12">
          <p className="text-xl text-white/70 font-sans text-center">
            In today's fragmented IT environments, teams struggle with:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/50 border-accent/20">
              <CardContent className="p-6">
                <ul className="list-none space-y-4 text-white/70 font-sans text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Scattered data across multiple tools and platforms
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Time-consuming root cause analysis processes
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary/50 border-accent/20">
              <CardContent className="p-6">
                <ul className="list-none space-y-4 text-white/70 font-sans text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Knowledge silos and documentation gaps
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Inefficient incident response workflows
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
