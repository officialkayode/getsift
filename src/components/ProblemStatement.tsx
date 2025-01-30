import { Card, CardContent } from "@/components/ui/card";

export const ProblemStatement = () => {
  return (
    <section className="container px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 font-orbitron text-center">The Challenge: Delayed Resolution & Lost Knowledge</h2>
        
        <div className="space-y-6 mb-12">
          <p className="text-white/70 font-cormorant">Reliability and Support Engineers struggle with:</p>
          <ul className="list-disc pl-6 space-y-3 text-white/70 font-cormorant">
            <li>Siloed knowledge – critical information is scattered across tools.</li>
            <li>Slow root cause analysis (RCA) – finding relevant historical insights takes too long.</li>
            <li>Time wasted searching – jumping between ServiceNow, Confluence, Slack, and logs.</li>
            <li>Expertise locked in people's heads – knowledge disappears when employees leave or take PTO.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};