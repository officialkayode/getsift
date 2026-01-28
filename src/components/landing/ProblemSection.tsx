import { Layers, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "The Silo Effect",
    subtitle: "Natural Disconnects",
    description:
      "When teams grow fast, silos happen naturally. Engineering, Product, and Facilities often end up running in parallel lanes without visibility into each other's work.",
  },
  {
    icon: Clock,
    title: "Fading Context",
    subtitle: "Fading Context",
    description:
      "As new hires flood in and experts move on, the 'why' behind decisions often gets lost, leaving teams without the history they need to move forward.",
  },
  {
    icon: HelpCircle,
    title: "Hidden Dependencies",
    subtitle: "Hidden Dependencies",
    description:
      "It's hard to ask the right questions when you don't know what you don't know. Critical risks often hide in plain sight simply because they live in a different tool.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-mono tracking-tight">
            Growth Creates Complexity.
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-medium text-gray-900 font-mono tracking-tight">
            We Help You Manage It.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">
                {problem.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
