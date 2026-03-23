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
    { "@type": "ListItem", "position": 3, "name": "Financial Services", "item": "https://getsift.co/industry/financial-services" }
  ]
};

const FinancialServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Financial Services Audit Trail & Compliance | Sift</title>
        <meta name="description" content="Sift gives financial services teams a complete audit trail for compliance decisions — from regulatory interpretations and policy changes to risk assessments and exam responses — reducing regulatory risk and inspection friction." />
        <link rel="canonical" href="https://getsift.co/industry/financial-services" />
        <meta property="og:title" content="Financial Services Audit Trail & Compliance | Sift" />
        <meta property="og:description" content="Sift gives financial services teams a complete audit trail for compliance decisions — from regulatory interpretations and policy changes to risk assessments and exam responses." />
        <meta property="og:url" content="https://getsift.co/industry/financial-services" />
        <meta property="og:image" content="https://getsift.co/previewImage.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Services Audit Trail & Compliance | Sift" />
        <meta name="twitter:description" content="Sift gives financial services teams a complete audit trail for compliance decisions — from regulatory interpretations to exam responses." />
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
              <li className="text-foreground">Financial Services</li>
            </ol>
          </nav>

          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Use-cases</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Financial Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Decision lineage for audit trail and compliance in regulated financial institutions.
          </p>

          <p className="mt-6 text-sm text-muted-foreground/80 font-sans max-w-lg mx-auto leading-relaxed">
            Sift is a decision lineage platform for financial services compliance. It preserves why regulatory and risk decisions were made — from policy interpretations and control changes to exam responses and enforcement actions — helping teams maintain a defensible audit trail, reduce regulatory risk, and accelerate exam readiness.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Problem</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          The Hidden Cost of Compliance Gaps
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Financial institutions operate under intense regulatory scrutiny — from the SEC, OCC, FINRA, FCA, and dozens of other bodies. Every day, compliance teams make critical decisions: How do we interpret this new regulation? Should we update our AML controls? How do we respond to this examination finding?
          </p>
          <p>
            The problem isn't making these decisions — it's that the reasoning behind them disappears. The rationale lives in scattered emails, meeting notes, committee minutes, and the institutional memory of individuals who eventually move on. When a regulator asks why a particular compliance decision was made two years ago, teams are left reconstructing context from fragments.
          </p>
          <p>
            This "decision amnesia" creates real risk. Examiners question decisions that can't be explained. Consent orders cite insufficient documentation. Internal audits flag the same gaps repeatedly. And when enforcement actions come, the cost of poor decision traceability is measured in millions — in fines, remediation, and reputational damage.
          </p>
        </div>

        <p className="mt-10 text-lg font-serif text-foreground italic border-l-2 border-primary/30 pl-5">
          Every compliance decision without a clear audit trail is a liability waiting to surface during the next examination.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Solution</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          Decision Lineage for Audit Trail & Compliance
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Sift captures the complete lifecycle of every compliance and risk decision — not just the outcome, but the trigger, evidence, deliberation, approval, and downstream impact. It creates a living, searchable record of institutional reasoning that stands up to regulatory scrutiny.
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

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Whether your team needs to explain a policy change to examiners, demonstrate the rationale behind a risk assessment, or trace the decision history behind a control update, Sift gives you the complete, defensible answer — instantly. No more scrambling before exams, no more reconstructing context from fragments.
          </p>
          <p>
            Sift transforms compliance documentation from a retroactive burden into a natural byproduct of how your team already works — strengthening your audit trail, reducing examination friction, and building a culture of decision accountability.
          </p>
        </div>

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

export default FinancialServices;
