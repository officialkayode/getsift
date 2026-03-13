import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

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
                <p className="mt-4 text-lg sm:text-xl text-white/70 font-sans font-light">
                  Starting with Pharma Clinical Trials
                </p>
                <p className="mt-6 text-sm sm:text-base text-white/50 font-sans max-w-lg leading-relaxed">
                  Sift preserves the <em>why</em> behind critical decisions.
                </p>
                <p className="mt-4 text-xs sm:text-sm text-white/30 font-sans tracking-widest uppercase">
                  Trigger → Evidence → Debate → Approval → Outcome
                </p>
                





                
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>);

};

export default Index;