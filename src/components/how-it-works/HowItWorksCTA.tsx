import { WaitlistForm } from "@/components/WaitlistForm";

export const HowItWorksCTA = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-gelasio">Ready to transform your technical operations?</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
        Join the waitlist today and be among the first to experience the future of technical knowledge management.
      </p>
      <WaitlistForm />
    </section>
  );
};