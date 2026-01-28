import { Network, RefreshCw, LucideIcon } from "lucide-react";
import traceabilityImage from "@/assets/traceability.png";

type Feature = {
  icon?: LucideIcon;
  title: string;
  description: string;
  image?: string;
};

const features: Feature[] = [
  {
    title: "Effortless Traceability",
    description:
      "Give your team the confidence of context. We link final assets back to the conversations and decisions that shaped them, so anyone can understand the full story without needing to tap a colleague on the shoulder.",
    image: traceabilityImage,
  },
  {
    icon: Network,
    title: "Unified Intelligence",
    description:
      "Bring your tools together. Whether your team lives in Slack, JIRA, or SharePoint, we create a unified layer of intelligence that respects your existing workflows and makes collaboration seamless across departments.",
  },
  {
    icon: RefreshCw,
    title: "Self-Updating Knowledge",
    description:
      "Free your team from manual documentation. Our dynamic context engine evolves alongside your work, ensuring your 'Source of Truth' is always as current as your latest decision.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Stronger gradient overlay - mostly white with hint of image */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-mono tracking-tight">
            A Shared Brain for Your Entire Organization
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-white/50 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {feature.image ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full rounded-xl"
                  />
                </>
              ) : (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {feature.icon && <feature.icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
