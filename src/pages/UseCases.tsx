import { NavigationBar } from "@/components/NavigationBar";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Clock, Link, ChartLine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="container px-4 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-gelasio">
            Resolve Issues Faster. Work Smarter.
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Sift captures your team's implicit knowledge, aggregates essential information, and delivers it at critical decision points—so you never waste time searching.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-gelasio">The Challenge: Delayed Resolution & Lost Knowledge</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-white/70">Technical Support Engineers struggle with:</p>
            <ul className="list-disc pl-6 space-y-3 text-white/70">
              <li>Siloed knowledge – critical information is scattered across tools.</li>
              <li>Slow root cause analysis (RCA) – finding relevant historical insights takes too long.</li>
              <li>Time wasted searching – jumping between ServiceNow, Confluence, Slack, and logs.</li>
              <li>Expertise locked in people's heads – knowledge disappears when employees leave or take PTO.</li>
            </ul>
          </div>

          <Card className="bg-primary/50 border-accent/20 mb-12">
            <CardContent className="p-6">
              <p className="italic text-white/70">
                "I was on a high-stakes customer call and needed troubleshooting details fast, but our documentation was outdated, and our best engineer was out on PTO."
              </p>
              <p className="mt-4 text-sm text-white/50">— TSE Leader, Tech Company</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container px-4 py-16 bg-primary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-gelasio">Sift's Solution: Contextual Knowledge, Delivered Proactively</h2>
          
          <div className="space-y-6 mb-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-primary border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">What Sift Does:</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>✓ Integrates with your existing tools (ServiceNow, Splunk, Slack, Confluence)</li>
                    <li>✓ Automatically captures and organizes insights from RCA workflows</li>
                    <li>✓ Surfaces relevant knowledge at the right moment</li>
                    <li>✓ Uses AI-powered recommendations for similar incidents</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">How It Works:</h3>
                  <div className="space-y-4 text-white/70">
                    <p>1️⃣ <strong>Automate Data Collection & Analysis</strong><br/>
                    Integrates with your tools for a single view of critical data.</p>
                    <p>2️⃣ <strong>Proactively Deliver Root Cause Insights</strong><br/>
                    Suggests resolutions based on historical patterns.</p>
                    <p>3️⃣ <strong>Streamline Documentation Updates</strong><br/>
                    Auto-generates reports and enriches knowledge bases.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-gelasio">Why Sift?</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="flex items-start gap-4">
              <ChartLine className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-bold mb-2">Faster RCA</h3>
                <p className="text-white/70">Reduce time spent searching across tools.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-white/70">Context-aware recommendations for quicker resolution.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-bold mb-2">Knowledge That Evolves</h3>
                <p className="text-white/70">Documentation updates itself as your team works.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-bold mb-2">Seamless Integrations</h3>
                <p className="text-white/70">Works where you work (ServiceNow, Slack, Splunk, Confluence).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 bg-primary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-gelasio">Get Started with Sift</h2>
          <p className="text-xl text-white/70 mb-8">
            Save time. Reduce ticket resolution delays. Improve team efficiency.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
};

export default UseCases;