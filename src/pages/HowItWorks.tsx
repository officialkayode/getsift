import { ArrowRight, MessageSquare, Brain, Zap, Shield } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-gelasio">How Sift Works</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Sift creates a smart operational layer that keeps your team running at peak efficiency while preserving critical knowledge
        </p>
      </section>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Connects to Your Tools */}
          <div className="space-y-6 p-8 rounded-xl bg-card">
            <div className="bg-[#D3C1B6] p-3 rounded-full w-fit">
              <MessageSquare className="w-6 h-6 text-[#312F2B]" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Connects to Your Tools</h2>
            <p className="text-muted-foreground">
              Sift integrates seamlessly with your existing workplace tools, requiring no change to how your team currently works.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Chat and email systems
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Project management tools
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Documentation platforms
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Service desk systems
              </li>
            </ul>
          </div>

          {/* Learns Your Workflows */}
          <div className="space-y-6 p-8 rounded-xl bg-card">
            <div className="bg-[#D3C1B6] p-3 rounded-full w-fit">
              <Brain className="w-6 h-6 text-[#312F2B]" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Learns Your Workflows</h2>
            <p className="text-muted-foreground">
              Our AI learns from your team's interactions and success patterns to understand processes, workloads, and knowledge flows.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Maps team expertise
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Identifies critical processes
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Understands workload patterns
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Captures tribal knowledge
              </li>
            </ul>
          </div>

          {/* Optimizes Team Operations */}
          <div className="space-y-6 p-8 rounded-xl bg-card">
            <div className="bg-[#D3C1B6] p-3 rounded-full w-fit">
              <Zap className="w-6 h-6 text-[#312F2B]" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Optimizes Team Operations</h2>
            <p className="text-muted-foreground">
              Using collected insights, Sift intelligently manages workloads and surfaces relevant information at the right time.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Balances team capacity
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Suggests process improvements
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Automates knowledge capture
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Predicts resource needs
              </li>
            </ul>
          </div>

          {/* Ensures Continuous Success */}
          <div className="space-y-6 p-8 rounded-xl bg-card">
            <div className="bg-[#D3C1B6] p-3 rounded-full w-fit">
              <Shield className="w-6 h-6 text-[#312F2B]" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Ensures Continuous Success</h2>
            <p className="text-muted-foreground">
              Sift maintains operational continuity through team changes, making knowledge transfer and onboarding effortless.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Smooths personnel transitions
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Accelerates onboarding
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Preserves critical context
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Reduces operational risks
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-gelasio">Ready to transform your team's operations?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
          Join the waitlist today and be among the first to experience the future of team operations.
        </p>
        <WaitlistForm />
      </section>
    </div>
  );
};

export default HowItWorks;