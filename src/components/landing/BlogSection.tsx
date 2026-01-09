import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const blogPosts = [
  {
    id: "temporal-context",
    title: "Why temporal context beats search",
    date: "January 2025",
    excerpt: "Search tells you what exists. Context tells you what matters right now.",
    content: `
Traditional enterprise search answers a simple question: "Where is this thing?" But modern teams don't struggle to find documents—they struggle to understand what's current, what's changed, and what still applies.

**The Search Problem**

When you search for "Q4 roadmap," you might get 47 results. The real questions remain: Which one is current? What changed since the last version? Who made those changes and why? Does everyone still agree?

Search engines index content. They don't index time, relationships, or organizational context.

**Temporal Context Is Different**

Temporal context doesn't just find information—it situates it in time. It answers:
- What's true *now* vs. what was true last month
- What changed and who changed it
- What's stale and needs updating
- Who needs to know about recent shifts

**Why This Matters for Fast-Moving Teams**

In organizations of 50-500 people, context degrades fast. Decisions made on Monday are outdated by Thursday. The "source of truth" fractures across Slack threads, email chains, and forgotten docs.

Temporal context engines like Sift don't replace search—they layer time-awareness on top of it. So when you ask about an initiative, you don't just get documents. You get the current state of play.
    `,
  },
  {
    id: "nucleus-framework",
    title: "The Nucleus / Context / Surface framework",
    date: "December 2024",
    excerpt: "How we built a reliability architecture that prefers loud failure over quiet lies.",
    content: `
When we started building Sift, we faced a fundamental question: How do you build an AI system that teams can actually trust for real decisions?

Our answer is a three-layer reliability framework we call Nucleus / Context / Surface.

**Layer 1: Nucleus (Zero Tolerance)**

The Nucleus layer handles everything that must be absolutely correct: data ingestion, permissions, citations, and freshness timestamps.

Our principle here is simple: *Loud failure is better than quiet lies.* If we can't verify a permission, we don't surface the data. If we can't cite a source, we don't make the claim. If freshness is uncertain, we say so explicitly.

**Layer 2: Context (Glass Box)**

The Context layer is where synthesis happens—connecting dots across tools, identifying patterns, surfacing insights. But unlike black-box AI, we treat this as a "glass box."

Every insight shows its evidence. Every connection can be traced. When Sift says an initiative is "heating up," you can see exactly which signals led to that conclusion.

**Layer 3: Surface (Radical Transparency)**

The Surface layer is what users see—in Slack, Gmail, or the platform. Here, we enforce radical transparency about confidence levels.

Hard facts (verified, cited, fresh) look different from soft signals (probabilistic, inferred, older). Users always know what they're looking at.

**Why This Architecture?**

Because trust is the product. A context engine that occasionally hallucinates isn't just wrong—it's dangerous. Teams that can't trust their tools fall back to manual verification, killing the productivity gains AI promises.
    `,
  },
  {
    id: "verification-tax",
    title: "The verification tax in fast-growing teams",
    date: "November 2024",
    excerpt: "Why growing teams spend more time verifying information than acting on it.",
    content: `
There's a hidden tax that scales with every new hire: the verification tax.

**What Is the Verification Tax?**

It's the time your team spends answering variations of the same question:
- "Is this the latest version?"
- "Did anyone update this since Tuesday?"
- "Who's the right person to ask about X?"
- "Wait, I thought we decided Y last week?"

In a 10-person startup, this tax is low. Context lives in people's heads, and a quick Slack message resolves ambiguity.

At 50 people, the tax grows. At 200, it becomes a significant drag on velocity.

**The Math Doesn't Scale**

Each new employee increases the surface area for context fragmentation. Information that was "obvious" becomes tribal knowledge. Decisions that were "understood" get lost in growing communication volume.

Teams compensate by over-documenting, over-meeting, or—most commonly—over-verifying. Before acting on any information, people check multiple sources, ping multiple people, re-read multiple threads.

**What If Verification Were Automatic?**

The promise of temporal context isn't just faster access to information. It's automatic verification: knowing that what you're seeing is current, complete, and consistent with what everyone else knows.

When verification happens automatically, teams reclaim the time they were spending on manual reconciliation. They can act faster because they trust the information layer.

That's what Sift is building: a context engine that pays the verification tax for you.
    `,
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-mono text-center mb-12">
          Blog
        </h2>

        {/* Blog Posts Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {blogPosts.map((post) => (
            <AccordionItem
              key={post.id}
              value={post.id}
              className="bg-white rounded-2xl border border-gray-100 px-6 overflow-hidden"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pt-4 border-t border-gray-100 prose prose-gray prose-sm max-w-none">
                  {post.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h4 key={i} className="text-base font-medium text-gray-900 mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, "")}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <ul key={i} className="list-disc list-inside space-y-1 text-gray-600">
                          {paragraph.split("\n").map((item, j) => (
                            <li key={j}>{item.replace("- ", "")}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.trim()) {
                      return (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {paragraph.split("*").map((part, j) =>
                            j % 2 === 1 ? (
                              <em key={j}>{part}</em>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
