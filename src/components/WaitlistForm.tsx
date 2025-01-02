import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const handleClick = () => {
    window.location.href = "https://forms.gle/yourFormLink"; // Replace with actual form link
    toast.success("Redirecting you to our waitlist form!");
  };

  return (
    <div className="flex justify-center w-full">
      <Button 
        size="lg"
        onClick={handleClick}
        className="text-lg px-8"
      >
        Join Waitlist
      </Button>
    </div>
  );
};