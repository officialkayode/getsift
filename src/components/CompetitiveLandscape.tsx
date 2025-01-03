import { Card, CardContent } from "@/components/ui/card";

export const CompetitiveLandscape = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Beyond Traditional Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Knowledge Management Tools</h3>
              <p className="text-slate-300">
                Sift goes beyond static documentation with AI-driven, context-aware information retrieval.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Project Management Platforms</h3>
              <p className="text-slate-300">
                Sift uniquely combines task allocation with intelligent knowledge preservation and utilization.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Workforce Management Software</h3>
              <p className="text-slate-300">
                Sift integrates capacity monitoring with knowledge-based task optimization for superior efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};