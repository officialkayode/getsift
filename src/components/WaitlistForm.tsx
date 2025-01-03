import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const handleClick = () => {
    // tally link to form
    window.open("https://tally.so/r/3EvdLB", "_blank");
    toast.success("Opening waitlist form in a new tab!");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button 
        onClick={handleClick}
        size="lg"
        className="w-full max-w-sm md:w-auto"
      >
        Join Waitlist
      </Button>
    </div>
  );
};