import { ImageSlot } from "./ImageSlot";

export const ProductSurfaces = () => {
  const surfaces = [
    {
      title: 'Platform "Temperature"',
      image: "/images/sift-initiative-room.jpg.png",
      slotName: "CARD_PLATFORM_IMAGE",
      bullets: [
        "Real-time health of every initiative",
        "Visual indicators for blockers and risks",
        "One-click drill-down to source data",
      ],
    },
    {
      title: 'Gmail "Context-before-send"',
      image: "/images/sift-gmail-cafe.jpg.png",
      slotName: "CARD_GMAIL_IMAGE",
      bullets: [
        "See relevant context before you reply",
        "Surface related decisions and threads",
        "Never miss critical background",
      ],
    },
    {
      title: 'Slack "@mention context"',
      image: "/images/sift-slack-mention.jpg.png",
      slotName: "CARD_SLACK_IMAGE",
      bullets: [
        "Instant context when mentioned",
        "See what changed since you last checked",
        "Citations to original sources",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Context where you work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sift delivers context through the surfaces your team already uses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surfaces.map((surface, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* IMAGE SLOT: {surface.slotName} */}
              <ImageSlot
                src={surface.image}
                alt={`${surface.title} feature visualization`}
                aspectRatio="4/3"
                slotName={surface.slotName}
                className="rounded-none"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  {surface.title}
                </h3>
                <ul className="space-y-2">
                  {surface.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-gray-400 mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
