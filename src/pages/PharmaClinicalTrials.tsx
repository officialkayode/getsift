import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getsift.co/" },
    { "@type": "ListItem", "position": 2, "name": "Use-cases", "item": "https://getsift.co/" },
    { "@type": "ListItem", "position": 3, "name": "Pharma Clinical Trials", "item": "https://getsift.co/industry/pharma" }
  ]
};

const PharmaClinicalTrials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharma Clinical Trial Decision Lineage | Sift</title>
        <meta name="description" content="Sift helps pharma teams preserve the why behind regulatory and trial-design decisions — from endpoint selection to protocol changes — reducing rework, amendments, and delayed commercialization." />
        <link rel="canonical" href="https://getsift.co/industry/pharma" />
        <meta property="og:title" content="Pharma Clinical Trial Decision Lineage | Sift" />
        <meta property="og:description" content="Sift helps pharma teams preserve the why behind regulatory and trial-design decisions — from endpoint selection to protocol changes — reducing rework, amendments, and delayed commercialization." />
        <meta property="og:url" content="https://getsift.co/industry/pharma" />
        <meta property="og:image" content="https://getsift.co/previewImage.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pharma Clinical Trial Decision Lineage | Sift" />
        <meta name="twitter:description" content="Sift helps pharma teams preserve the why behind regulatory and trial-design decisions — from endpoint selection to protocol changes." />
        <meta name="twitter:image" content="https://getsift.co/previewImage.png" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <SiteNav />

      {/* Hero */}
      <section className="pt-14">
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="text-muted-foreground/40">→</li>
              <li>Use-cases</li>
              <li className="text-muted-foreground/40">→</li>
              <li className="text-foreground">Pharma Clinical Trials</li>
            </ol>
          </nav>

          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Use-cases</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Pharma Clinical Trials
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Decision lineage for the highest-stakes regulatory strategy decisions in drug development.
          </p>

          {/* Indexable intro paragraph */}
          <p className="mt-6 text-sm text-muted-foreground/80 font-sans max-w-lg mx-auto leading-relaxed">
            Sift is a decision lineage platform for pharma clinical trials. It preserves why regulatory strategy decisions were made — from endpoint selection and pivotal trial design to protocol amendments and FDA or EMA feedback — helping teams reduce rework, avoid repeated mistakes, and prevent delayed commercialization.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Problem</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          The High Cost of Decision Amnesia
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Bringing a new therapy to market is a race against time, and the biggest hurdles aren't just in the lab—they are in regulatory strategy. The team has to make massive, high-stakes calls: What endpoints should we measure? How exactly do we design this pivotal trial? How do we pivot when the FDA or EMA gives unexpected feedback?
          </p>
          <p>
            The problem isn't making the decisions; it's how the history of those decisions is stored. Today, the actual reasoning behind these choices is scattered across a chaotic maze of briefing books, long email chains, quick chat messages, fragmented meeting notes, and CRO workflows that span multiple systems and teams.
          </p>
          <p>
            Fast forward into a trial. The original team members might have moved on, and a question comes up from a regulator about why a certain protocol was chosen. Because the original context is lost, the current team is forced to scramble. This "decision amnesia" leads to rework, protocol amendments, slower alignment with regulators, and financial cost — undermining sponsor oversight and inspection readiness.
          </p>
        </div>

        <p className="mt-10 text-lg font-serif text-foreground italic border-l-2 border-primary/30 pl-5">
          Ultimately, it causes the absolute worst-case scenario in pharma: delayed commercialization. Every month of lost context is a month of lost revenue and delayed patient care.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Solution</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          Decision Lineage for Clinical Trial Oversight
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Sift fixes this by capturing the complete story behind every major strategic choice. We don't just store the final document; Sift acts as a living, searchable map of how your team arrived at that final document — providing clinical trial decision support that keeps regulatory decision history intact and accessible.
          </p>
          <p>
            Sift tracks the entire lifecycle of a decision in a clear, connected chain:
          </p>
        </div>

        {/* Decision chain visual */}
        <div className="my-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm font-sans tracking-wide text-foreground/70">
          {["Trigger", "Evidence", "Debate", "Approval", "Outcome"].map((step, i) =>
          <span key={step} className="flex items-center gap-2">
              <span className="px-4 py-2 border border-border rounded-md bg-card text-foreground">
                {step}
              </span>
              {i < 4 && <span className="text-muted-foreground">→</span>}
            </span>
          )}
        </div>

        <p className="text-base text-foreground/80 font-sans leading-[1.8]">
          With Sift, your clinical and regulatory teams instantly have the full context at their fingertips. Whether you are looking up the history of an endpoint selection, understanding the rationale behind a protocol amendment, or reviewing past FDA or EMA feedback, Sift gives you the "why" behind the "what." It eliminates the guesswork, prevents repeated mistakes, and keeps your trial moving forward fast.
        </p>

        <div className="mt-12">
          <a
            href="https://calendar.app.google/J22JUbRhovodHYdk8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-primary-foreground bg-primary rounded-md px-6 py-3 hover:opacity-90 transition-opacity">
            Book a demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default PharmaClinicalTrials;
