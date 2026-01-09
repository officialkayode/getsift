import { Shield, Eye, Layers } from "lucide-react";

export const CompactTrust = () => {
  const layers = [
    {
      icon: Shield,
      title: "Nucleus",
      subtitle: "Zero tolerance",
      points: ["Connectors, permissions, citations, freshness", "Loud failure > quiet lie"],
    },
    {
      icon: Eye,
      title: "Context",
      subtitle: "Glass box",
      points: ["Probabilistic insights", "Always show evidence"],
    },
    {
      icon: Layers,
      title: "Surface",
      subtitle: "Radical transparency",
      points: ["Hard facts vs soft signals", "Visually distinct outputs"],
    },
  ];

  return (
    <section id="security" className="py-12 lg:py-16">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Reliable by design.
          </h2>
        </div>

        {/* Three mini-blocks */}
        <div className="grid md:grid-cols-3 gap-4">
          {layers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                  <layer.icon className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{layer.title}</h3>
                  <p className="text-xs text-gray-500">{layer.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {layer.points.map((point, pidx) => (
                  <li key={pidx} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
