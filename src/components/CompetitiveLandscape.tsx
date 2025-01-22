import { Card, CardContent } from "@/components/ui/card";

export const CompetitiveLandscape = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-up">
          Beyond Traditional Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Knowledge Management Tools</h3>
              <p className="text-white/70">
                Sift goes beyond static documentation with AI-driven, context-aware information retrieval.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Project Management Platforms</h3>
              <p className="text-white/70">
                Sift uniquely combines task allocation with intelligent knowledge preservation and utilization.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Workforce Management Software</h3>
              <p className="text-white/70">
                Sift integrates capacity monitoring with knowledge-based task optimization for superior efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};