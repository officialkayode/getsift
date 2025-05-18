
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";

export const HeroSection = () => {
  return (
    <section className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className={`${fadeInUpClass}`}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Your Headline Here
          </h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Add your description text here. This area is for your main messaging.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <WaitlistForm />
          </div>
        </div>

        {/* Media content area */}
        <div className="border-2 border-dashed border-accent/30 rounded-lg h-[300px] md:h-[400px] flex items-center justify-center bg-accent/5">
          <p className="text-accent/50 text-lg font-medium">Add your media content here</p>
        </div>
      </div>
    </section>
  );
};
