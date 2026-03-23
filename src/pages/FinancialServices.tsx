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
            Financial Services: Audit &amp; Compliance
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Preserve the "why" behind your regulatory decisions to maintain an audit trail, reduce risk, and accelerate exam readiness.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Problem</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          The Cost of Compliance Amnesia
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Financial institutions operate under scrutiny from regulators like the SEC, OCC, and FINRA. Every day, your team makes decisions: How do we interpret this rule? Why did we update these AML controls? The problem isn't making these decisions; it's that the reasoning behind them vanishes into emails, meeting minutes, and the minds of former employees. When examiners ask to explain a past policy change, teams scramble to reconstruct context from fragments. This "decision amnesia" is a liability — translating directly into failed audits, regulatory friction, and enforcement actions.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto border-t border-border" />

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The Solution</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10 leading-snug">
          A Defensible Audit Trail
        </h2>

        <div className="space-y-6 text-base text-foreground/80 font-sans leading-[1.8]">
          <p>
            Sift turns compliance history into a searchable record that stands up to regulatory scrutiny. Instead of logging only the policy outcome, Sift captures the decision chain:
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
            Whether you need to justify a risk assessment or trace the history of a control update, Sift gives you a defensible answer on demand. It transforms compliance documentation from a retroactive burden into a natural byproduct of how your team works.
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
