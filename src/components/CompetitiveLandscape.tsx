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
              <h3 className="text-xl font-semibold mb-4">Documentation Tools</h3>
              <p className="text-white/70">
                Unlike static documentation, Sift captures knowledge during the RCA process and surfaces it automatically at relevant decision points.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Incident Management Platforms</h3>
              <p className="text-white/70">
                Sift enhances existing platforms by capturing and surfacing tribal knowledge during active incident response.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary border-white/10 hover:border-accent/50 transition-colors hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Knowledge Base Systems</h3>
              <p className="text-white/70">
                Instead of manual documentation, Sift automatically captures troubleshooting workflows and surfaces them when needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};