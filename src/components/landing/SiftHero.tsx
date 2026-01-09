import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";

export const SiftHero = () => {
  const handleDemo = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Live context for decisions.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Sift unifies what's happening across your tools into a time-aware 
                context graph—so leaders and teams act with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDemo}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base font-medium rounded-full"
              >
                Request a demo
              </Button>
              <Button
                onClick={handleWaitlist}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 text-gray-900 px-8 py-6 text-base font-medium rounded-full"
              >
                Join waitlist
              </Button>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="lg:pl-8">
            {/* IMAGE SLOT: HERO_IMAGE */}
            <ImageSlot
              src="/images/sift-hero-coast.jpg"
              alt="Sift platform visualization showing unified context across tools"
              aspectRatio="16/9"
              slotName="HERO_IMAGE"
              className="shadow-2xl shadow-gray-200/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
