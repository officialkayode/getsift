import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Never Lose Critical Team Knowledge Again
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sift helps technical teams preserve knowledge, optimize workflows, and maintain
            operational excellence—even during personnel changes.
          </p>
          <WaitlistForm />
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Hidden Cost of Knowledge Silos
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Turnover Impact</h3>
              <p className="text-slate-300">
                Critical knowledge walks out the door with departing team members,
                creating costly operational gaps.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Disruption</h3>
              <p className="text-slate-300">
                Team absences and role changes create bottlenecks in critical
                processes and decision-making.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scattered Information</h3>
              <p className="text-slate-300">
                Valuable insights and solutions are buried across various tools and
                systems, slowing down response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Intelligent Knowledge Platform for Technical Teams
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sift combines AI-powered knowledge management with smart workforce
            optimization to keep your team operating at peak efficiency.
          </p>
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8">
        <div className="container px-4">
          <p className="text-center text-slate-400">
            © 2024 Sift. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;