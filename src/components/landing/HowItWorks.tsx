import { ImageSlot } from "./ImageSlot";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Ingest",
      description:
        "Connect your tools once. Sift continuously ingests signals from Slack, Gmail, Jira, docs, CRM, and calendar.",
    },
    {
      step: "02",
      title: "Nucleus",
      description:
        "Permissions, citations, and freshness built in. Loud failure beats quiet lies—if data is stale, you'll know.",
    },
    {
      step: "03",
      title: "Context",
      description:
        "Synthesis with evidence. Every insight is a glass box: you see the reasoning and the sources.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            How Sift works
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Steps */}
          <div className="space-y-10">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-mono text-sm text-muted-foreground">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Image */}
          <div>
            {/* IMAGE SLOT: GRAPH_IMAGE */}
            <ImageSlot
              src="/images/sift-graph-flatlay.jpg.png"
              alt="Sift context graph visualization showing connected data sources"
              aspectRatio="16/9"
              slotName="GRAPH_IMAGE"
              className="shadow-xl shadow-gray-200/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
