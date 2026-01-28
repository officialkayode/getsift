import { Shield, Key, Building2 } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Your Data, Your Control",
    description:
      "Built with Confidential Computing to ensure your data remains secure at rest and in transit.",
  },
  {
    icon: Key,
    title: "Seamless Integration",
    description:
      "We respect the permissions structure you've already built. If a user has access in your source tool, they have access here.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    description:
      "Designed to handle the volume of a modern, data-rich organization from day one.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white font-mono tracking-tight">
            Security at the Speed of Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
