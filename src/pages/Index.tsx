import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Users, Zap, Shield, Clock, Database, ArrowRight, Check, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Workforce Management
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sift combines AI-powered knowledge management with intelligent workforce optimization
            to maximize team efficiency and operational excellence.
          </p>
          <WaitlistForm />
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Common Workforce Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resource Allocation</h3>
              <p className="text-slate-300">
                Difficulty in matching the right talent with the right projects,
                leading to inefficient resource utilization and project delays.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <BarChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-slate-300">
                Lack of real-time visibility into team performance and productivity
                metrics, making it hard to identify improvement areas.
              </p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-3 rounded-full w-fit mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skills Management</h3>
              <p className="text-slate-300">
                Challenges in tracking and developing employee skills, leading to
                missed opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Intelligent Workforce Optimization
          </h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Our AI-powered platform helps you make data-driven decisions about your workforce,
            ensuring optimal performance and growth.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Smart Resource Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>AI-driven resource allocation and scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Real-time capacity monitoring and forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Automated workload balancing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-6">
                <Database className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Comprehensive performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Predictive analytics for team optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                    <span>Custom KPI tracking and reporting</span>
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
            Ready to Optimize Your Workforce?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join forward-thinking teams already using Sift to transform their workforce
            management and achieve operational excellence.
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