import { Card, CardContent } from "@/components/ui/card";

export const ProblemStatement = () => {
  return (
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
  );
};