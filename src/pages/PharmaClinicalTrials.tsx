import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

const PharmaClinicalTrials = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-14">
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Industry</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Pharma Clinical Trials
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Decision lineage for the highest-stakes regulatory strategy decisions in drug development.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">The Problem</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-snug">
          The highest-value decisions in pharma are regulatory strategy decisions.
        </h2>
        <ul className="space-y-3 text-base text-foreground/80 font-sans leading-relaxed mb-8">
          <li>Which endpoints to pursue</li>
          <li>How to design the pivotal trial</li>
          <li>How to respond to FDA / EMA feedback</li>
          <li>Why a protocol amendment was approved</li>
        </ul>
        <p className="text-base text-foreground/80 font-sans leading-relaxed mb-6">
          Today, that context is fragmented across briefing books, emails, slide decks, chats, meeting notes, and CRO workflows. When teams lose the reasoning behind those decisions, they create:
        </p>
        <ul className="space-y-2 text-base text-foreground/80 font-sans leading-relaxed mb-8 pl-4 border-l-2 border-primary/20">
          <li>Protocol amendments from lost rationale</li>
          <li>Repeated rework across study teams</li>
          <li>Slower regulatory alignment</li>
          <li>Delayed commercialization</li>
        </ul>
        <p className="text-lg font-serif text-foreground italic">
          Delayed commercialization is often a decision-memory problem.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">How Sift Solves It</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-snug">
          Sift captures the full decision chain.
        </h2>
        <p className="text-sm tracking-widest text-muted-foreground uppercase mb-8">
          Trigger → Evidence → Debate → Approval → Outcome
        </p>
        <p className="text-base text-foreground/80 font-sans leading-relaxed mb-8">
          For pharma teams, Sift becomes the living decision graph for:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            "Endpoint selection",
            "Regulatory feedback",
            "Protocol changes",
            "Approval rationale",
            "Downstream study impact",
          ].map((item) => (
            <div
              key={item}
              className="px-5 py-4 border border-border rounded-md bg-card text-sm text-foreground font-sans"
            >
              {item}
            </div>
          ))}
        </div>
        <a
          href="https://calendar.app.google/J22JUbRhovodHYdk8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-sans text-primary-foreground bg-primary rounded-md px-6 py-3 hover:opacity-90 transition-opacity"
        >
          Book a demo
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <SiteFooter />
    </div>
  );
};

export default PharmaClinicalTrials;
