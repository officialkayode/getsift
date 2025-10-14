
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { hoverScaleClass } from "./shared/animations";

export const WaitlistForm = () => {
  const handleClick = () => {
    // Open the waitlist form
    window.open("https://tally.so/r/3EvdLB", "_blank");
    toast.success("Thank you for your interest!");
  };
  
  return (
    <div className="flex w-full max-w-md mx-auto justify-center">
      <Button 
        onClick={handleClick} 
        className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-6 h-14 rounded-full shadow-lg font-mono"
      >
        Request Beta Invitation
      </Button>
    </div>
  );
};
