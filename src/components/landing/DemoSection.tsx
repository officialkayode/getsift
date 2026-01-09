import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const DemoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Tally form as fallback
    window.open("https://tally.so/r/waxNop", "_blank");
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono text-center">
          See Sift in 90 seconds.
        </h2>

        {/* Video Placeholder */}
        <div className="mt-12 relative aspect-video rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
              <Play className="w-6 h-6 ml-1" />
            </div>
            <p className="text-gray-600 font-medium">Demo video coming here</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-6 py-3 rounded-full"
          >
            Request a live demo
          </Button>
        </div>
      </div>

      {/* Demo Request Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-mono">Request a demo</DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-8 text-center">
              <p className="text-lg text-gray-900 font-medium">Thanks — we'll reach out.</p>
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                  setIsSubmitted(false);
                }}
                className="mt-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full"
              >
                Send
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
