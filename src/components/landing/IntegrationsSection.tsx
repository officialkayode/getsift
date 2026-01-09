export const IntegrationsSection = () => {
  const integrations = [
    "Slack",
    "Gmail",
    "Jira",
    "Confluence",
    "Notion",
    "CRM",
    "Calendar",
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Connect once. Context stays current.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Sift integrates with the tools your team already uses.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((integration, index) => (
            <span
              key={index}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-foreground shadow-sm"
            >
              {integration}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
