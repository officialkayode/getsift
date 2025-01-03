import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Users, Zap, Shield, Clock, Database, ArrowRight, Check, ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section - Split Focus */}
      <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Knowledge Management & Workforce Optimization
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sift helps teams preserve critical knowledge and optimize workforce efficiency—ensuring operational excellence at all times.
          </p>
          <WaitlistForm />
        </div>
      </div>

      {/* Dual Focus Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Knowledge Management */}
            <div className="space-y-6">
              <div className="bg-slate-700 p-3 rounded-full w-fit">
                <Database className="w-8 h-8 text-slate-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Knowledge Management</h2>
              <p className="text-slate-300 text-lg">
                Never lose critical team knowledge again. Our automated capture system ensures valuable insights are preserved and accessible, even during personnel changes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Automated knowledge capture from team interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Smart categorization and contextual retrieval</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Seamless knowledge transfer during transitions</span>
                </li>
              </ul>
            </div>

            {/* Workforce Optimization */}
            <div className="space-y-6">
              <div className="bg-slate-700 p-3 rounded-full w-fit">
                <Users className="w-8 h-8 text-slate-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Workforce Optimization</h2>
              <p className="text-slate-300 text-lg">
                Maximize team efficiency through intelligent capacity monitoring and predictive workforce analytics.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Real-time capacity monitoring and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Predictive absence impact analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-300 mt-1" />
                  <span className="text-slate-300">Intelligent task allocation based on expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            The Intelligent Knowledge Platform
          </h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Sift combines AI-powered knowledge management with smart workforce optimization
            to keep your team operating at peak efficiency.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Knowledge Preservation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Automated knowledge capture from team interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Smart categorization and tagging of information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Contextual search and retrieval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Workflow Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Real-time team capacity monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Intelligent task allocation based on expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-slate-300 mt-1 shrink-0" />
                    <span className="text-slate-300">Predictive absence impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Transform Your Team's Efficiency
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Database className="w-8 h-8 text-slate-300" />
              <h3 className="text-xl font-semibold text-white">Centralized Knowledge Hub</h3>
              <p className="text-slate-300">
                Create a single source of truth for all team knowledge, making information
                easily accessible and actionable.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="w-8 h-8 text-slate-300" />
              <h3 className="text-xl font-semibold text-white">Seamless Knowledge Transfer</h3>
              <p className="text-slate-300">
                Ensure smooth transitions during team changes with automated knowledge
                capture and intelligent onboarding assistance.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="w-8 h-8 text-slate-300" />
              <h3 className="text-xl font-semibold text-white">Accelerated Decision Making</h3>
              <p className="text-slate-300">
                Empower your team to make faster, better-informed decisions with
                AI-powered insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tired of knowledge management issues and underoptimized workforce of your team?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join forward-thinking teams already on the waitlist to preserve knowledge,
            optimize workflows, and maintain operational excellence.
          </p>
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 bg-slate-900">
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
