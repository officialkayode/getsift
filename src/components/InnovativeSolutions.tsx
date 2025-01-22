import { Database, Users, ChartBar } from "lucide-react";

export const InnovativeSolutions = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Solution
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Database className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Proactive Information Delivery</h3>
            <p className="text-white/70">
              Through deep integration with existing tools, relevant knowledge and context automatically surfaces at critical decision points.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Intelligent Workforce Optimization</h3>
            <p className="text-white/70">
              Real-time capacity monitoring, predictive absence analysis, and smart task allocation maximize team efficiency.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <ChartBar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Measurable Impact</h3>
            <p className="text-white/70">
              Provides clear metrics on time saved, knowledge retention, and team efficiency improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};