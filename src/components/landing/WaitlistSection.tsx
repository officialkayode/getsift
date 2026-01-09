import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Open Tally form as fallback
    window.open("https://tally.so/r/mDlLGW", "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono">
          Join the waitlist.
        </h2>

        {isSubmitted ? (
          <div className="mt-8">
            <p className="text-lg text-gray-900 font-medium">You're on the list.</p>
            <p className="mt-2 text-sm text-gray-500">We'll reach out when it's your turn.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full px-5 py-3 border-gray-200"
                />
                <Input
                  type="text"
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="flex-1 rounded-full px-5 py-3 border-gray-200"
                />
                <Button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
                >
                  Join
                </Button>
              </div>
            </form>

            <p className="mt-4 text-sm text-gray-500">
              We onboard in batches.
            </p>
          </>
        )}
      </div>
    </section>
  );
};
