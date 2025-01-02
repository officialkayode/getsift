import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const handleClick = () => {
    // Using a temporary TypeForm URL - replace this with your actual form URL
    window.location.href = "https://form.typeform.com/to/example";
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