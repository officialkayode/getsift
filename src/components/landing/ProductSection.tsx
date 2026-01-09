import { LayoutDashboard } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
    <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
    <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
    <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const surfaces = [
  {
    icon: LayoutDashboard,
    customIcon: null as React.FC | null,
    title: "Platform",
    subtitle: "Initiative + People Temperature",
    description: "Sift gives org leaders an exec-ready view of each initiative—what's true now, what changed since the last check-in, what's at risk, and who owns the next move—by unifying context across Slack, tickets, docs, CRM, and calendar into a time-aware context graph with citations, decision trails (including what was superseded), and a stakeholder map that highlights misalignment so teams can make faster decisions with fewer status meetings.",
  },
  {
    icon: null,
    customIcon: GmailLogo,
    title: "Gmail",
    subtitle: "Context Before You Hit Send",
    description: "In Gmail, Sift surfaces the most relevant, up-to-date context for the email you're drafting—recent decisions, current commitments, owners, and timeline changes—flags stale assumptions before they escape the org, and provides a short 'safe-to-send' brief with evidence links so exec updates, escalations, and cross-functional communication stay accurate and aligned.",
  },
  {
    icon: null,
    customIcon: SlackLogo,
    title: "Slack",
    subtitle: "Context When You're @Mentioned",
    description: "When you're @mentioned, Sift delivers a 30-second cross-sources catch-up—what you're being asked, the current state, the latest key updates, the decision history, the right owner/stakeholders, and what's still unresolved—so you can respond with confidence immediately, backed by source links instead of digging through threads.",
  },
];

const steps = [
  { num: "1", label: "Ingest across tools" },
  { num: "2", label: "Ground truth with citations" },
  { num: "3", label: "Synthesis as a glass box" },
];

export const ProductSection = () => {
  return (
    <section id="product" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono text-center">
          One context engine. Three surfaces.
        </h2>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {surfaces.map((surface) => (
            <div
              key={surface.title}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                surface.customIcon ? 'bg-white border border-gray-200' : 'bg-gray-900 text-white'
              }`}>
                {surface.customIcon ? (
                  <surface.customIcon />
                ) : surface.icon ? (
                  <surface.icon className="w-5 h-5" />
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {surface.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                {surface.subtitle}
              </p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {surface.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works micro-flow */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-medium text-gray-900 font-mono mb-6">
              How it works
            </h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-medium flex items-center justify-center">
                    {step.num}
                  </div>
                  <span className="text-gray-700">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ImageSlot
            src="/images/sift-graph-flatlay.jpg.png"
            alt="How Sift works"
            aspectRatio="16/9"
            slotName="GRAPH_IMAGE"
          />
        </div>
      </div>
    </section>
  );
};
