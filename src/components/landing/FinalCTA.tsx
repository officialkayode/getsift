import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const handleDemo = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* IMAGE SLOT: CTA_BACKGROUND_IMAGE - /images/sift-cta-road.jpg */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
        style={{
          backgroundImage: "url('/images/sift-cta-road.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      <div className="relative container px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
          Stop stitching context.
          <br />
          Start operating with it.
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          Join teams who make decisions with confidence, not guesswork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleDemo}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-full"
          >
            Request a demo
          </Button>
          <Button
            onClick={handleWaitlist}
            variant="outline"
            className="border-white/30 hover:bg-white/10 text-white px-8 py-6 text-base font-medium rounded-full"
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
