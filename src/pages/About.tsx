import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { User, Target, Users } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link to="/">
            <h1 className="text-4xl md:text-5xl font-orbitron mb-8 text-foreground hover:text-muted-foreground transition-colors cursor-pointer">Sift</h1>
          </Link>
          <h2 className="text-3xl md:text-4xl font-garamond font-bold mb-8 text-foreground">
            From Reactive Searching to Proactive Knowing.
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed">
            <p>
              In today's workplace, the most valuable commodity is clarity. Yet, we spend our days hunting for it—digging through chat logs, searching for documents, and piecing together context.
            </p>
            <p>
              Sift changes this paradigm. We believe information should find you.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-garamond font-bold mb-8 text-center text-foreground">
            The Problem: The High Cost of Information Chaos
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            The modern enterprise runs on dozens of specialized tools. While powerful, they create information silos that force your team into a constant state of reactive work.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Constant Context Switching</h3>
              <p className="text-muted-foreground">
                The average employee switches between apps over 1,200 times a day, losing focus and momentum with every switch.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Lost Knowledge</h3>
              <p className="text-muted-foreground">
                Critical decisions are buried in endless chat threads and forgotten documents, leading to redundant work and repeated mistakes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">The Unplanned Workload</h3>
              <p className="text-muted-foreground">
                Up to 50% of an engineer's time is spent on unplanned work, often just trying to get the right context to move forward.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-center text-muted-foreground">
            This isn't just inefficient—it's a barrier to innovation. When your brightest minds are tasked with being digital detectives, their true potential is capped.
          </p>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-garamond font-bold mb-8 text-center text-foreground">
            The Solution: Your Intelligent Information Layer
          </h2>
          <div className="text-lg text-muted-foreground space-y-6">
            <p>
              Sift seamlessly integrates with your existing tools (Slack, Jira, Confluence, Notion, and more) to act as an intelligent layer over your entire knowledge ecosystem.
            </p>
            <p>
              It doesn't replace your tools; it makes them work in concert. Sift's AI understands the relationships between conversations, documents, and tasks to build a real-time map of your organization's collective intelligence. Then, it uses this map to deliver exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* How Sift Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-garamond font-bold mb-4 text-center text-foreground">
            How Sift Works: Three Pillars of Clarity
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Sift is built on a foundation designed to enhance the most critical human skills required for modern work.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">1. Enable True Agency</h3>
              <p className="text-muted-foreground mb-4">Your team moves faster when they have the full story.</p>
              <p className="text-sm text-muted-foreground">
                Instead of just assigning a task, Sift delivers the task with its complete history. We automatically link a Jira ticket back to the Slack conversation where the idea was born, the Notion doc where it was scoped, and the key decisions made along the way. This empowers your team to act with confidence and autonomy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2. Direct Collective Attention</h3>
              <p className="text-muted-foreground mb-4">Focus is your most valuable resource. Sift protects it.</p>
              <p className="text-sm text-muted-foreground">
                Sift analyzes the flow of information to identify what is truly urgent and important. It can summarize a 200-message thread into three key bullet points, flag a critical question that has gone unanswered, and silence low-priority noise. We help your team focus on the signal, not the static.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">3. Build Seamless Collaboration</h3>
              <p className="text-muted-foreground mb-4">A shared reality is the foundation of high-performing teams.</p>
              <p className="text-sm text-muted-foreground">
                When a new person joins a project, how do they get up to speed? With Sift, they get an instant, AI-generated brief of the project's history, key assets, and current status. Everyone operates from the same source of truth, making alignment effortless and collaboration meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Sift For Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-garamond font-bold mb-8 text-center text-foreground">
            Who Is Sift For?
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Sift is designed for any team overwhelmed by complexity but driven by a need for results.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Product & Engineering Teams</h3>
              <p className="text-muted-foreground">Ship faster by connecting development tasks directly to product strategy and customer feedback.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Go-to-Market Teams</h3>
              <p className="text-muted-foreground">Align sales, marketing, and success by providing a unified view of customer communications and strategy.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Executive Leadership</h3>
              <p className="text-muted-foreground">Gain a real-time, high-level overview of key initiatives and potential roadblocks without manual report-chasing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Work Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-garamond font-bold mb-8 text-foreground">
            The Future of Work is Not More Tools, But More Intelligence
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Imagine a workplace where every employee has a perfect photographic memory of every conversation, document, and decision ever made in the company. That is the future Sift is building. A future where human ingenuity is amplified, not exhausted.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-garamond font-bold mb-6 text-foreground">
            Become a Foundational Partner.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are currently inviting innovative teams to join our early access program. Help us shape the future of work.
          </p>
          <WaitlistForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;