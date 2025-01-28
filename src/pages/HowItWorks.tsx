import { ArrowRight, MessageSquare, Brain, Zap, Shield } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { NavigationBar } from "@/components/NavigationBar";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <NavigationBar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-gelasio">How Sift Works</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Sift creates an intelligent layer that captures and surfaces critical information during technical workflows, eliminating the need for manual documentation
        </p>
      </section>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Connects to Your Tools */}
          <div className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Connects to Your Tools</h2>
            <p className="text-muted-foreground">
              Sift integrates with your existing technical stack to capture context without workflow disruption.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Monitoring systems
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Incident management platforms
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> System logs and metrics
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Documentation systems
              </li>
            </ul>
          </div>

          {/* Learns Your Workflows */}
          <div className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Captures Critical Context</h2>
            <p className="text-muted-foreground">
              Our AI automatically captures and indexes important technical context during incident response and troubleshooting.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> System state changes
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Investigation steps
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Resolution patterns
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Technical decisions
              </li>
            </ul>
          </div>

          {/* Surfaces Information */}
          <div className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Surfaces Information Automatically</h2>
            <p className="text-muted-foreground">
              Relevant information is proactively surfaced at critical decision points during technical workflows.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Similar past incidents
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Related system changes
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Previous solutions
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Expert insights
              </li>
            </ul>
          </div>

          {/* Ensures Knowledge Preservation */}
          <div className="space-y-6 p-8 rounded-xl bg-card hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-accent/20 p-3 rounded-full w-fit">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-gelasio">Preserves Technical Knowledge</h2>
            <p className="text-muted-foreground">
              Critical technical knowledge is preserved without requiring manual documentation efforts.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Implicit knowledge capture
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Automated context preservation
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Decision trail recording
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Technical pattern recognition
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-gelasio">Ready to transform your technical operations?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
          Join the waitlist today and be among the first to experience the future of technical knowledge management.
        </p>
        <WaitlistForm />
      </section>
    </div>
  );
};

export default HowItWorks;