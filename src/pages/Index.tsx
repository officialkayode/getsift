import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Users, Zap, Shield, Clock, Database, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                creating costly operational gaps and extended onboarding periods.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Disruption</h3>
              <p className="text-slate-300">
                Team absences and role changes create bottlenecks in critical
                processes, leading to delayed responses and customer dissatisfaction.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scattered Information</h3>
              <p className="text-slate-300">
                Valuable insights and solutions are buried across various tools and
                systems, making quick decision-making nearly impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The Intelligent Knowledge Platform
          </h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Sift combines AI-powered knowledge management with smart workforce optimization
            to keep your team operating at peak efficiency.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Knowledge Preservation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Automated knowledge capture from team interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Smart categorization and tagging of information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Contextual search and retrieval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Workflow Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Real-time team capacity monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Intelligent task allocation based on expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Predictive absence impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Transform Your Team's Efficiency
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Database className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Centralized Knowledge Hub</h3>
              <p className="text-slate-300">
                Create a single source of truth for all team knowledge, making information
                easily accessible and actionable.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Seamless Knowledge Transfer</h3>
              <p className="text-slate-300">
                Ensure smooth transitions during team changes with automated knowledge
                capture and intelligent onboarding assistance.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Accelerated Decision Making</h3>
              <p className="text-slate-300">
                Empower your team to make faster, better-informed decisions with
                AI-powered insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Team's Knowledge Management?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join forward-thinking teams already using Sift to preserve knowledge,
            optimize workflows, and maintain operational excellence.
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