import { Helmet } from "react-helmet-async";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sift",
  "url": "https://getsift.co",
  "description": "Sift is a decision lineage platform that preserves the why behind critical enterprise decisions for highly regulated industries.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@getsift.co",
    "contactType": "General Inquiry"
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About | Sift</title>
        <meta name="description" content="Sift exists to make institutional decisions traceable and reusable across people, systems, and intelligent agents. The system of record for why." />
        <link rel="canonical" href="https://getsift.co/about" />
        <meta property="og:title" content="About | Sift" />
        <meta property="og:description" content="Sift exists to make institutional decisions traceable and reusable across people, systems, and intelligent agents." />
        <meta property="og:url" content="https://getsift.co/about" />
        <meta property="og:image" content="https://getsift.co/previewImage.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Sift" />
        <meta name="twitter:description" content="Sift exists to make institutional decisions traceable and reusable across people, systems, and intelligent agents." />
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>

      <SiteNav />

      <main className="pt-14">
        {/* Manifesto */}
        <section className="max-w-2xl mx-auto px-6 py-32 sm:py-40 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">About Sift</p>

          <div className="space-y-10 text-lg sm:text-xl font-serif text-foreground leading-relaxed">
            <p>
              In enterprise environments, traceability is not optional—it is essential. Decisions outlive meetings, teams, and tools. The reasoning behind a critical choice often matters more than the choice itself, yet that reasoning is the first thing to disappear.
            </p>
            <p>
              The future of work belongs to lean teams, increasingly supported by AI agents. Those teams need more than documents and dashboards; they need access to the decision lineage behind every action they take. Without it, institutions repeat mistakes, lose speed, and erode trust.
            </p>
            <p>
              Sift exists to make institutional decisions traceable and reusable across people, systems, and intelligent agents. The system of record for <em>why</em>.
            </p>
          </div>
        </section>

        {/* Company basics */}
        <div className="max-w-xl mx-auto border-t border-border" />
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Sift is built by a small team focused on decision intelligence for regulated industries. <br className="hidden sm:block" />
            For inquiries, reach us at{" "}
            <a href="mailto:hello@getsift.co" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
              hello@getsift.co
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default About;
