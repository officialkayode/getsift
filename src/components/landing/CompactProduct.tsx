import { ImageSlot } from "./ImageSlot";
import { MonitorSmartphone, Mail, MessageSquare, ArrowRight } from "lucide-react";

export const CompactProduct = () => {
  const surfaces = [
    {
      icon: MonitorSmartphone,
      title: "Platform",
      subtitle: "Initiative + People Temperature",
      bullets: ["Real-time health of every initiative", "Who's blocked, who needs context"],
    },
    {
      icon: Mail,
      title: "Gmail",
      subtitle: "Context before you hit send",
      bullets: ["Relevant context before you reply", "Confidence scores + citations"],
    },
    {
      icon: MessageSquare,
      title: "Slack",
      subtitle: "Context when you're @mentioned",
      bullets: ["Instant context when mentioned", "No tab-switching required"],
    },
  ];

  const steps = [
    { num: "1", label: "Ingest across tools" },
    { num: "2", label: "Ground truth with citations" },
    { num: "3", label: "Synthesis as a glass box" },
  ];

  return (
    <section id="product" className="py-12 lg:py-16 bg-gray-50/50">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Three surfaces. One context engine.
          </h2>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {surfaces.map((surface, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <surface.icon className="w-4 h-4 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{surface.title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">{surface.subtitle}</p>
              <ul className="space-y-1.5">
                {surface.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Micro-flow + image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4 font-medium">How it works</p>
            <div className="flex flex-col gap-3">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-medium flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="text-sm text-gray-700">{step.label}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-300 ml-auto hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* IMAGE SLOT: GRAPH_IMAGE */}
            <ImageSlot
              src="/images/sift-graph-flatlay.jpg.png"
              alt="Sift context graph visualization"
              aspectRatio="16/9"
              slotName="GRAPH_IMAGE"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
