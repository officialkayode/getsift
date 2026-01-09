import { Button } from "@/components/ui/button";

export const CompactCTA = () => {
  const handleDemo = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-900">
      <div className="container px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
          Stop stitching context.
          <br />
          Start operating with it.
        </h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
          Join teams who make decisions with confidence, not guesswork.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleDemo}
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-5 text-sm font-medium rounded-full"
          >
            Request a demo
          </Button>
          <Button
            onClick={handleWaitlist}
            variant="outline"
            className="border-gray-600 hover:bg-gray-800 text-white px-6 py-5 text-sm font-medium rounded-full"
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
