import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const handleClick = () => {
    // You can replace this with your actual waitlist URL
    window.open("https://forms.gle/yourFormLink", "_blank");
    toast.success("Opening waitlist form in a new tab!");
  };

  return (
    <div className="flex justify-center w-full max-w-sm">
      <Button 
        onClick={handleClick}
        size="lg"
        className="w-full md:w-auto"
      >
        Join Waitlist
      </Button>
    </div>
  );
};