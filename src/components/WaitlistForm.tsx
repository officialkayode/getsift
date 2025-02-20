
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { hoverScaleClass } from "./shared/animations";

export const WaitlistForm = () => {
  const handleClick = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
    toast.success("Opening waitlist form in a new tab!");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button 
        onClick={handleClick}
        size="lg"
        className={`w-full max-w-sm md:w-auto bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg ${hoverScaleClass}`}
      >
        Join Waitlist
      </Button>
    </div>
  );
};
