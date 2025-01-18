import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-gelasio">
            Unlock Your Team's Knowledge
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Sift helps teams capture, preserve, and leverage knowledge across all their tools and communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate("/integrations")}
              variant="secondary"
              className="text-lg px-8"
            >
              View Integrations
            </Button>
            <Button className="text-lg px-8">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};