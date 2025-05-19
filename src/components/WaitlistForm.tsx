
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { hoverScaleClass } from "./shared/animations";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Open the waitlist form and pass the email
    window.open(`https://tally.so/r/3EvdLB?email=${encodeURIComponent(email)}`, "_blank");
    toast.success("Thank you for joining the waitlist!");
    setEmail("");
  };
  return <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto rounded-full overflow-hidden bg-white shadow-lg">
      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="What's your work email?" className="flex-1 border-none rounded-l-full px-6 py-3 h-14 text-base focus-visible:ring-0 focus-visible:ring-offset-0" required />
      <Button type="submit" className="rounded-r-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 h-14 whitespace-nowrap">Request Beta Invitation</Button>
    </form>;
};
