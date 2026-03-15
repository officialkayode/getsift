import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onReady = () => setVideoReady(true);
    el.addEventListener("canplay", onReady);
    el.play().catch(() => {});
    return () => el.removeEventListener("canplay", onReady);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Sift — Decision Lineage for Regulated Industries</title>
        <meta name="description" content="Sift preserves the why behind critical enterprise decisions. Decision lineage for highly regulated industries, starting with Pharma Clinical Trials." />
        <link rel="canonical" href="https://getsift.co/" />
        <meta property="og:title" content="Sift — Decision Lineage for Regulated Industries" />
        <meta property="og:description" content="Sift preserves the why behind critical enterprise decisions. Decision lineage for highly regulated industries." />
        <meta property="og:url" content="https://getsift.co/" />
        <meta property="og:image" content="https://getsift.co/previewImage.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sift — Decision Lineage for Regulated Industries" />
        <meta name="twitter:description" content="Sift preserves the why behind critical enterprise decisions." />
        <meta name="twitter:image" content="https://getsift.co/previewImage.png" />
      </Helmet>

      <SiteNav />

      {/* Hero */}
      <section className="pt-14">
        <div className="px-4 sm:px-6 pt-6">
          <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden" style={{ minHeight: "calc(100vh - 5rem)" }}>
            {/* Video */}
            <div className="absolute inset-0 bg-foreground">
              <video
                ref={videoRef}
                src="/backgroud-loop.mov"
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-60" : "opacity-0"}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full px-8 sm:px-12 lg:px-16 pb-16 sm:pb-20" style={{ minHeight: "calc(100vh - 5rem)" }}>
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-tight">
                  Decision Lineage for Highly Regulated Industries
                </h1>

                <p className="mt-6 text-sm sm:text-base text-white/50 font-sans max-w-lg leading-relaxed">
                  Sift preserves the why behind your decisions.
                </p>
                <p className="mt-4 text-xs sm:text-sm text-white/30 font-sans tracking-widest uppercase">
                  Trigger → Evidence → Debate → Approval → Outcome
                </p>

                <p className="mt-8 text-sm text-white/60 font-sans">
                  Starting with{" "}
                  <Link to="/industry/pharma" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
                    pharma clinical trials
                  </Link>.
                </p>

                <div className="mt-8">
                  <a
                    href="https://calendar.app.google/J22JUbRhovodHYdk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-foreground hover:bg-white/90 text-sm px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Index;
