import { ImageSlot } from "./ImageSlot";
import { Check } from "lucide-react";

export const InitiativeSection = () => {
  const benefits = [
    "Fewer surprises in leadership reviews",
    "Faster decisions with confidence",
    "Less status-meeting overhead",
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Image (alternated layout) */}
          <div className="order-2 lg:order-1">
            {/* IMAGE SLOT: INITIATIVE_IMAGE */}
            <ImageSlot
              src="/images/sift-initiative-room.jpg.png"
              alt="Team reviewing initiative temperature dashboard"
              aspectRatio="16/9"
              slotName="INITIATIVE_IMAGE"
              className="shadow-xl shadow-gray-200/50"
            />
          </div>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="font-mono text-sm text-muted-foreground tracking-wide uppercase">
                Primary Use Case
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-3 mb-4">
                Initiative Temperature
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Exec-ready view of each initiative: current state, recent decisions, 
                blockers, and who's out of sync—all in one place.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
