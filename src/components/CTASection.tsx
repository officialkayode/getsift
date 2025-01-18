import { WaitlistForm } from "@/components/WaitlistForm";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#312F2B]">
          Tired of knowledge management issues and underoptimized workforce of your team?
        </h2>
        <p className="text-xl text-[#272525] mb-12 max-w-3xl mx-auto">
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