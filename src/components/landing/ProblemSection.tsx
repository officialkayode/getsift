export const ProblemSection = () => {
  const problems = [
    {
      title: "Context is fragmented",
      description:
        "Critical information lives scattered across Slack threads, email chains, Jira tickets, and docs—never in one place when you need it.",
    },
    {
      title: "Verification takes hours",
      description:
        "Teams waste countless hours cross-referencing sources just to confirm what's actually true right now.",
    },
    {
      title: "The verification tax",
      description:
        "Every decision carries overhead: hunting down the latest update, confirming who said what, checking if information is still valid.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            The problem with context today
          </h2>
        </div>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-200 pl-6 py-2"
            >
              <h3 className="text-xl font-medium text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
