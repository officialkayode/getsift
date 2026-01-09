import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";

export const CompactHero = () => {
  const handleDemo = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.15]">
              Live context for decisions.
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Sift unifies what's happening across your tools into a time-aware
              context graph—so leaders and teams act with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={handleDemo}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-5 text-sm font-medium rounded-full"
              >
                Request a demo
              </Button>
              <Button
                onClick={handleWaitlist}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 text-gray-900 px-6 py-5 text-sm font-medium rounded-full"
              >
                Join waitlist
              </Button>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div>
            {/* IMAGE SLOT: HERO_IMAGE */}
            <ImageSlot
              src="/images/sift-hero-coast.jpg.png"
              alt="Sift platform visualization showing unified context across tools"
              aspectRatio="16/9"
              slotName="HERO_IMAGE"
              className="shadow-xl shadow-gray-200/50 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
