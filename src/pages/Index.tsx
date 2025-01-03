import { WaitlistForm } from "@/components/WaitlistForm";
import { Brain, Users, Zap, Shield, Clock, Database, ArrowRight, Check, ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
    return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section - Split Focus */}
      <div className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Knowledge Management & Workforce Optimization
              </h1>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sift helps technical teams preserve critical knowledge and optimize workforce efficiency—ensuring operational excellence at all times.
            Sift helps teams preserve critical knowledge and optimize workforce efficiency—ensuring operational excellence at all times.
          </p>
          <WaitlistForm />
        </div>
      </div>

      {/* Innovative Solutions Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="bg-slate-700 p-3 rounded-full w-fit">
                <Database className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Proactive Information Delivery</h3>
              <p className="text-slate-300">
                Through deep integration with existing tools, relevant knowledge and context automatically surfaces at critical decision points.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-700 p-3 rounded-full w-fit">
                <Users className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Intelligent Workforce Optimization</h3>
              <p className="text-slate-300">
                Real-time capacity monitoring, predictive absence analysis, and smart task allocation maximize team efficiency.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-700 p-3 rounded-full w-fit">
                <ChartBar className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Measurable Impact</h3>
              <p className="text-slate-300">
                Provides clear metrics on time saved, knowledge retention, and team efficiency improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
              {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Value Proposition:
            </h2> */}
            <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white">
              Transforming Team Efficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-slate-300 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white">Preserve Critical Knowledge</h4>
                      <p className="text-slate-300">Automated capture ensures valuable insights are never lost, even during high turnover.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-slate-300 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white">Accelerate Decision-Making</h4>
                      <p className="text-slate-300">Contextual information retrieval empowers teams to respond quickly and accurately.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-slate-300 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white">Optimize Workflows</h4>
                      <p className="text-slate-300">Intelligent task allocation and capacity monitoring eliminate operational bottlenecks.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-slate-300 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white">Capture Employee ROI</h4>
                      <p className="text-slate-300">Help companies maximize employee ROI through visibility employee impact and effort.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Beyond Traditional Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Knowledge Management Tools</h3>
                <p className="text-slate-300">
                  Sift goes beyond static documentation with AI-driven, context-aware information retrieval.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Project Management Platforms</h3>
                <p className="text-slate-300">
                  Sift uniquely combines task allocation with intelligent knowledge preservation and utilization.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Workforce Management Software</h3>
                <p className="text-slate-300">
                  Sift integrates capacity monitoring with knowledge-based task optimization for superior efficiency.
                </p>
              </CardContent>
            </Card>
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
