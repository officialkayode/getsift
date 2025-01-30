import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="container px-4 py-16 bg-primary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 font-orbitron text-center">Sift's Solution: Contextual Knowledge, Delivered Proactively</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="bg-primary border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 font-chakra">What Sift Does:</h3>
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
              <h3 className="text-lg font-bold mb-4 font-chakra">How It Works:</h3>
              <div className="space-y-4 text-white/70">
                <p>✓ <strong>Automate Data Collection & Analysis</strong><br/>
                Integrates with your tools for a single view of critical data.</p>
                <p>✓ <strong>Proactively Deliver Root Cause Insights</strong><br/>
                Suggests resolutions based on historical patterns.</p>
                <p>✓ <strong>Streamline Documentation Updates</strong><br/>
                Auto-generates reports and enriches knowledge bases.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};