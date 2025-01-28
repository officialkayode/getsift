import { WaitlistForm } from "@/components/WaitlistForm";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Tired of knowledge management issues and underoptimized workforce of your team?
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
          Join forward-thinking teams already on the waitlist to preserve knowledge,
          optimize workflows, and maintain operational excellence.
        </p>
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};