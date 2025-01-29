import { Check } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 animate-fade-up text-center">
            Transforming Knowledge Management
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Automated Knowledge Capture</h4>
                    <p className="text-white/70">Seamlessly preserve critical insights during daily workflows without disrupting team productivity.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Smart Information Organization</h4>
                    <p className="text-white/70">Intelligently aggregate and structure information from multiple sources for easy access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Contextual Delivery</h4>
                    <p className="text-white/70">Receive relevant information exactly when needed, enhancing decision-making processes.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold">Knowledge Preservation</h4>
                    <p className="text-white/70">Ensure valuable team knowledge is retained and accessible, regardless of team changes.</p>
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