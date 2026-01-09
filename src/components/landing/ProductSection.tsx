import { LayoutDashboard, Mail, MessageSquare, ChevronDown } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const surfaces = [
  {
    id: "platform",
    icon: LayoutDashboard,
    title: "Platform: Initiative + People Temperature",
    subhead: "An exec-ready view of what's happening across your most important initiatives—without stitching context across Slack, email, tickets, and docs.",
    image: "/images/sift-initiative-room.jpg.png",
    slotName: "PLATFORM_IMAGE",
    capabilities: [
      "Current state (time-aware): what changed since the last check-in, what's stable, what's now stale.",
      "Decision trail: the latest decisions, what they superseded, and the evidence behind them.",
      "Blockers + dependencies: what's blocked, what's blocking, and cross-team coupling you're likely to miss.",
      "Stakeholder map: owners, contributors, informed parties—plus who's out of sync.",
      "Evidence by default: every claim links back to sources (citations + timestamps).",
    ],
    capabilitiesLabel: "What it gives you",
    audience: ["CEO / COO", "Chief of Staff", "Ops / BizOps / Program leads", "Product & Engineering leadership"],
    audienceLabel: "Who it's for",
    outputs: [
      "Pre-meeting brief (10 minutes before)",
      "Weekly exec update (initiative rollup)",
      '"Story of this initiative" (timeline + decisions + current truth)',
      "Risk & misalignment alerts",
    ],
    accordionTitle: "Example (30 seconds)",
    accordionContent: "Before your weekly exec review, Sift produces a one-page brief for the top initiatives: what changed this week, the newest decision and what it replaced, the current blockers, and who needs to be pulled in—each point backed by direct links to the underlying Slack threads, tickets, docs, or emails.",
  },
  {
    id: "gmail",
    icon: Mail,
    title: "Gmail: Context Before You Hit Send",
    subhead: "Sift pulls the relevant, up-to-date context for an email draft so you don't send misaligned or outdated information.",
    image: "/images/sift-gmail-cafe.jpg.png",
    slotName: "GMAIL_IMAGE",
    capabilities: [
      "Thread + topic grounding: detects what initiative/customer/workstream the email relates to.",
      "Latest truth check: flags assumptions that are stale or superseded ('this changed last week').",
      "Commitments + owners: surfaces the latest promises, timelines, and responsible parties.",
      "Safe-to-send checklist: highlights what you should confirm before sending, with citations.",
      "Evidence attached: links to the exact sources behind each point.",
    ],
    capabilitiesLabel: "What it does",
    audience: [
      "Exec updates and cross-functional alignment",
      "Customer escalations and sensitive threads",
      "Hand-offs between teams (Product ↔ Eng ↔ GTM)",
    ],
    audienceLabel: "Best for",
    accordionTitle: "Why this matters",
    accordionContent: "Email is where misalignment escapes the building. Sift reduces the verification tax by giving you the relevant decision history and current state at the moment you're about to communicate it.",
  },
  {
    id: "slack",
    icon: MessageSquare,
    title: "Slack: Context When You're @Mentioned",
    subhead: "When someone pulls you into a thread, Sift gives you the background—so you can respond with confidence in seconds.",
    image: "/images/sift-slack-mention.jpg.png",
    slotName: "SLACK_IMAGE",
    capabilities: [
      "What you're being asked: a short, grounded summary of the request and the open question.",
      "What's true now: the current state plus the last key updates across tools.",
      "Decision history: prior decisions and what's been superseded (with timestamps).",
      "Who's involved: owner + key stakeholders + the best person to answer.",
      "What's unresolved: the remaining blockers, risks, or missing context.",
    ],
    capabilitiesLabel: "What it does",
    speedNote: "30 seconds to catch up, not 30 minutes.",
    accordionTitle: "Example",
    accordionContent: "You're tagged on an initiative. Sift replies with a brief: last 3 relevant updates, the latest decision, what's currently blocked, and links to the exact messages/tickets/docs that matter—so you can reply immediately or route it to the right owner.",
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono">
            One context engine. Three surfaces.
          </h2>
        </div>

        {/* Surface Sections */}
        <div className="space-y-20">
          {surfaces.map((surface, idx) => (
            <div
              key={surface.id}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Icon + Title */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                    <surface.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 font-mono leading-tight">
                      {surface.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {surface.subhead}
                    </p>
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                    {surface.capabilitiesLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {surface.capabilities.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2.5">
                        <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audience / Best For */}
                {surface.audience && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                      {surface.audienceLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {surface.audience.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outputs (Platform only) */}
                {surface.outputs && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                      Outputs you can generate
                    </p>
                    <ul className="space-y-2">
                      {surface.outputs.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2.5">
                          <span className="text-gray-400 mt-1 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Speed Note (Slack only) */}
                {surface.speedNote && (
                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Designed for speed
                    </p>
                    <p className="text-gray-700 font-medium">{surface.speedNote}</p>
                  </div>
                )}

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={surface.id} className="border border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="text-sm font-medium text-gray-900 hover:no-underline py-4">
                      {surface.accordionTitle}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                      {surface.accordionContent}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Image */}
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <ImageSlot
                  src={surface.image}
                  alt={surface.title}
                  aspectRatio="4/3"
                  slotName={surface.slotName}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* How it works micro-flow */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
