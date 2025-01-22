import { Check } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 animate-fade-up">
            Transforming Team Efficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Preserve Critical Knowledge</h4>
                    <p className="text-white/70">Automated capture ensures valuable insights are never lost, even during high turnover.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Accelerate Decision-Making</h4>
                    <p className="text-white/70">Contextual information retrieval empowers teams to respond quickly and accurately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Optimize Workflows</h4>
                    <p className="text-white/70">Intelligent task allocation and capacity monitoring eliminate operational bottlenecks.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Capture Employee ROI</h4>
                    <p className="text-white/70">Help companies maximize employee ROI through visibility employee impact and effort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};