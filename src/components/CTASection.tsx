import { WaitlistForm } from "@/components/WaitlistForm";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4 text-center">
        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
          Join forward-thinking teams already on the waitlist to transform their knowledge management.
        </p>
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};