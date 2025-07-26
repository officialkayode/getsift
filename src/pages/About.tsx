import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Users, ArrowRight, Zap, Shield, Brain } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass, cardHoverClass } from "@/components/shared/animations";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with gradient background */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Link to="/">
            <h1 className="text-4xl md:text-5xl font-orbitron mb-8 text-foreground hover:text-primary transition-colors cursor-pointer">
              Sift
            </h1>
          </Link>
          <h2 className="text-4xl md:text-6xl font-garamond font-bold mb-8 text-foreground leading-tight">
            From Reactive Searching to{" "}
            <span className="text-primary">Proactive Knowing</span>
          </h2>
          <div className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground space-y-8 leading-relaxed">
            <p className={fadeInUpClass}>
              In today's workplace, the most valuable commodity is clarity. Yet, we spend our days hunting for it—digging through chat logs, searching for documents, and piecing together context.
            </p>
            <p className={`${fadeInUpClass} text-foreground font-medium`}>
              Sift changes this paradigm. We believe information should find you.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section with cards */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-6 text-foreground">
              The Problem: The High Cost of{" "}
              <span className="text-destructive">Information Chaos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The modern enterprise runs on dozens of specialized tools. While powerful, they create information silos that force your team into a constant state of reactive work.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className={`${cardHoverClass} border-l-4 border-l-destructive/60`}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-destructive mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Constant Context Switching</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The average employee switches between apps over{" "}
                  <span className="font-semibold text-destructive">1,200 times a day</span>, 
                  losing focus and momentum with every switch.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} border-l-4 border-l-destructive/60`}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Brain className="h-12 w-12 text-destructive mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Lost Knowledge</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Critical decisions are buried in endless chat threads and forgotten documents, leading to redundant work and repeated mistakes.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} border-l-4 border-l-destructive/60`}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-destructive mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Unplanned Workload</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Up to <span className="font-semibold text-destructive">50% of an engineer's time</span> is spent on unplanned work, often just trying to get the right context to move forward.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-destructive/5 border-destructive/20">
              <CardContent className="p-8">
                <p className="text-xl text-foreground font-medium">
                  This isn't just inefficient—it's a barrier to innovation. When your brightest minds are tasked with being digital detectives, their true potential is capped.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section with enhanced design */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-8 text-foreground">
              The Solution: Your{" "}
              <span className="text-primary">Intelligent Information Layer</span>
            </h2>
          </div>
          
          <Card className={`${cardHoverClass} bg-card/80 backdrop-blur-sm`}>
            <CardContent className="p-12">
              <div className="text-xl text-muted-foreground space-y-8 leading-relaxed">
                <p>
                  Sift seamlessly integrates with your existing tools{" "}
                  <span className="font-semibold text-foreground">(Slack, Jira, Confluence, Notion, and more)</span>{" "}
                  to act as an intelligent layer over your entire knowledge ecosystem.
                </p>
                <p>
                  It doesn't replace your tools; it makes them work in concert. Sift's AI understands the relationships between conversations, documents, and tasks to build a real-time map of your organization's collective intelligence. Then, it uses this map to deliver exactly what you need.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Sift Works Section with enhanced cards */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-6 text-foreground">
              How Sift Works: Three Pillars of{" "}
              <span className="text-primary">Clarity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sift is built on a foundation designed to enhance the most critical human skills required for modern work.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className={`${cardHoverClass} group border-t-4 border-t-primary`}>
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">1. Enable True Agency</h3>
                <p className="text-lg text-primary font-medium mb-6">Your team moves faster when they have the full story.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Instead of just assigning a task, Sift delivers the task with its complete history. We automatically link a Jira ticket back to the Slack conversation where the idea was born, the Notion doc where it was scoped, and the key decisions made along the way.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} group border-t-4 border-t-primary`}>
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">2. Direct Collective Attention</h3>
                <p className="text-lg text-primary font-medium mb-6">Focus is your most valuable resource. Sift protects it.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Sift analyzes the flow of information to identify what is truly urgent and important. It can summarize a 200-message thread into three key bullet points, flag critical questions, and silence low-priority noise.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} group border-t-4 border-t-primary`}>
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">3. Build Seamless Collaboration</h3>
                <p className="text-lg text-primary font-medium mb-6">A shared reality is the foundation of high-performing teams.</p>
                <p className="text-muted-foreground leading-relaxed">
                  When a new person joins a project, they get an instant, AI-generated brief of the project's history, key assets, and current status. Everyone operates from the same source of truth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is Sift For Section with enhanced layout */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-8 text-foreground">
              Who Is Sift For?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sift is designed for any team overwhelmed by complexity but driven by a need for results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`${cardHoverClass} bg-gradient-to-br from-card to-muted/20`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Product & Engineering Teams</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ship faster by connecting development tasks directly to product strategy and customer feedback.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} bg-gradient-to-br from-card to-muted/20`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Go-to-Market Teams</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Align sales, marketing, and success by providing a unified view of customer communications and strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${cardHoverClass} bg-gradient-to-br from-card to-muted/20`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Executive Leadership</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Gain a real-time, high-level overview of key initiatives and potential roadblocks without manual report-chasing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future of Work Section with dramatic styling */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-garamond font-bold mb-12 text-foreground leading-tight">
            The Future of Work is Not More Tools,{" "}
            <span className="text-primary">But More Intelligence</span>
          </h2>
          <Card className={`${cardHoverClass} bg-card/90 backdrop-blur-sm`}>
            <CardContent className="p-12">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Imagine a workplace where every employee has a perfect photographic memory of every conversation, document, and decision ever made in the company.{" "}
                <span className="text-foreground font-semibold">That is the future Sift is building.</span>{" "}
                A future where human ingenuity is amplified, not exhausted.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section with enhanced design */}
      <section className="py-32 px-4 bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-garamond font-bold mb-8 text-foreground">
            Become a{" "}
            <span className="text-primary">Foundational Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We are currently inviting innovative teams to join our early access program. Help us shape the future of work.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;