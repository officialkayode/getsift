import { Check } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white">
            Transforming Team Efficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-slate-300 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Preserve Critical Knowledge</h4>
                    <p className="text-slate-300">Automated capture ensures valuable insights are never lost, even during high turnover.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-slate-300 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Accelerate Decision-Making</h4>
                    <p className="text-slate-300">Contextual information retrieval empowers teams to respond quickly and accurately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-slate-300 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Optimize Workflows</h4>
                    <p className="text-slate-300">Intelligent task allocation and capacity monitoring eliminate operational bottlenecks.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-slate-300 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Capture Employee ROI</h4>
                    <p className="text-slate-300">Help companies maximize employee ROI through visibility employee impact and effort.</p>
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
