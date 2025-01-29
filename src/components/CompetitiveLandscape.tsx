import { Card, CardContent } from "@/components/ui/card";

export const CompetitiveLandscape = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-16 animate-fade-up">
          Beyond Traditional Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Knowledge Management Tools</h3>
              <p className="text-white/70">
                Unlike static documentation, Sift actively captures and delivers knowledge in real-time during workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Information Repositories</h3>
              <p className="text-white/70">
                Sift goes beyond storage by intelligently aggregating and contextually delivering information when needed.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Traditional Documentation</h3>
              <p className="text-white/70">
                Instead of manual documentation, Sift automatically preserves knowledge during natural work processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};