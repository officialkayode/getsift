import { LayoutDashboard, Mail, MessageSquare } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

const surfaces = [
  {
    icon: LayoutDashboard,
    title: "Platform",
    subtitle: "Initiative + People Temperature",
    bullets: [
      "See which initiatives are heating up or cooling down",
      "Know who's overloaded before they burn out",
    ],
  },
  {
    icon: Mail,
    title: "Gmail",
    subtitle: "Context before you hit send",
    bullets: [
      "Surface relevant context before outbound decisions",
      "Never miss critical background on recipients",
    ],
  },
  {
    icon: MessageSquare,
    title: "Slack",
    subtitle: "@mention context",
    bullets: [
      "Get full context when you're tagged",
      "Reply with confidence, not guesswork",
    ],
  },
];

const steps = [
  { num: "1", label: "Ingest across tools" },
  { num: "2", label: "Ground truth with citations" },
  { num: "3", label: "Synthesis as a glass box" },
];

export const ProductSection = () => {
  return (
    <section id="product" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono text-center">
          One context engine. Three surfaces.
        </h2>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {surfaces.map((surface) => (
            <div
              key={surface.title}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                <surface.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {surface.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                {surface.subtitle}
              </p>
              <ul className="mt-4 space-y-2">
                {surface.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How it works micro-flow */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-medium text-gray-900 font-mono mb-6">
              How it works
            </h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-medium flex items-center justify-center">
                    {step.num}
                  </div>
                  <span className="text-gray-700">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ImageSlot
            src="/images/sift-graph-flatlay.jpg.png"
            alt="How Sift works"
            aspectRatio="16/9"
            slotName="GRAPH_IMAGE"
          />
        </div>
      </div>
    </section>
  );
};
