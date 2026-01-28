import { Button } from "@/components/ui/button";

export const HeroWithBackground = () => {
  const handleBookDemo = () => {
    window.open("https://calendar.app.google/J22JUbRhovodHYdk8", "_blank");
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] md:min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/sift-hero-coast.jpg.png')`,
      }}
    >
      {/* Fallback gradient if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 -z-10" />
      
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight font-mono">
            Scale Your Team Without Losing Your Context.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            Growth shouldn't mean disconnected teams. We bridge the gaps between your business units so everyone—from Engineering to Ops—can build on each other's work, not rebuild it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleBookDemo}
              className="bg-white text-gray-900 hover:bg-gray-100 text-sm px-6 py-3 rounded-full font-medium"
            >
              Book a demo
            </Button>
            <Button
              onClick={handleWaitlist}
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 text-sm px-6 py-3 rounded-full font-medium"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
