import { ImageSlot } from "./ImageSlot";
import { Shield, Eye, Layers } from "lucide-react";

export const ReliabilityFramework = () => {
  const layers = [
    {
      icon: Shield,
      title: "Nucleus",
      subtitle: "Zero Tolerance",
      description:
        "Connectors, permissions, citations, and freshness. Loud failure beats quiet lies—if data is stale or unauthorized, you'll know immediately.",
      badge: "Hard facts only",
      badgeType: "hard" as const,
    },
    {
      icon: Eye,
      title: "Context",
      subtitle: "Glass Box",
      description:
        "Probabilistic insights with full transparency. Every synthesis shows its work: the sources, the reasoning, the confidence level.",
      badge: "Show the work",
      badgeType: "soft" as const,
    },
    {
      icon: Layers,
      title: "Surface",
      subtitle: "Radical Transparency",
      description:
        "Hard facts and soft signals are visually distinct. You always know what's verified versus what's inferred.",
      badge: "Signals labeled",
      badgeType: "soft" as const,
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Built on reliability
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three layers that ensure you can trust what Sift tells you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Layers */}
          <div className="lg:col-span-3 space-y-6">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-foreground">
                        {layer.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {layer.subtitle}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {layer.description}
                    </p>
                    <span
                      className={`inline-block font-mono text-xs px-3 py-1 rounded-full ${
                        layer.badgeType === "hard"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Image */}
          <div className="lg:col-span-2">
            {/* IMAGE SLOT: NUCLEUS_IMAGE */}
            <ImageSlot
              src="/images/sift-nucleus-archive.jpg"
              alt="Sift reliability framework visualization"
              aspectRatio="4/3"
              slotName="NUCLEUS_IMAGE"
              className="shadow-xl shadow-gray-200/50 sticky top-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
