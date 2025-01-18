import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#312F2B]">
          Smart Knowledge Flow for Technical Teams
        </h1>
        <p className="text-xl md:text-2xl text-[#272525] mb-12 max-w-3xl mx-auto">
          Sift helps teams preserve critical knowledge and optimize workforce efficiency—ensuring operational excellence at all times.
        </p>
        <WaitlistForm />
      </div>
    </div>
  );
};