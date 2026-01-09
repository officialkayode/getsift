import { useParams, Link } from "react-router-dom";
import { SinglePageNavbar, SinglePageFooter } from "@/components/landing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 2,
    slug: "temporal-context-beats-search",
    title: "Why Temporal Context Beats Search",
    date: "2025-01-05",
    category: "Product",
    authors: ["Samuel Umoren"],
    readTime: "5 min read",
    excerpt: "Traditional search retrieves documents. Temporal context tells you what's true now, what changed, and who needs to know—the difference between knowledge and intelligence.",
    content: `Every enterprise has invested heavily in search. Confluence search, Slack search, Google Drive search, Notion search. Yet knowledge workers still spend 20% of their time looking for information. Why?

## The Limits of Search

Search answers the question: "Where is this document?" But that's rarely the actual question knowledge workers have. Their real questions are:

What's the current status of this initiative?

Has anything changed since my last meeting?

Who else is working on this, and what do they know?

What context do I need before this conversation?

Search retrieves documents. It doesn't synthesize understanding.

## Enter Temporal Context

Temporal context is fundamentally different. Instead of indexing documents, we model how information evolves over time:

Time-Aware State: We don't just know that a project exists—we know its state today versus last week. We track trajectory, not just snapshots.

Change Detection: When something important changes—a deadline moves, a stakeholder shifts, a blocker emerges—we surface it proactively. You don't have to search for what's new.

Relationship Mapping: We understand that a Slack thread, a Jira ticket, and a Google Doc are all about the same initiative. Search treats them as separate documents; temporal context connects them.

## From Pull to Push

The most profound shift is from pull (you search for information) to push (relevant context finds you):

Before a meeting: Sift surfaces what's changed since you last engaged with this topic.

When you're @mentioned: Instant context about the thread's history and what the asker likely needs.

While composing email: Relevant background before you hit send, so you don't ask questions that were already answered.

## The Intelligence Layer

Think of it this way:

Search = Library catalog (where things are)

Temporal Context = Analyst briefing (what you need to know)

Search is a tool. Temporal context is intelligence. The former requires you to know what to look for. The latter anticipates what you need and delivers it in the flow of work.

## Why Now?

Three things have converged to make temporal context possible:

LLMs: Modern language models can synthesize across documents and extract relationships at scale.

Real-Time Connectors: APIs for Slack, Jira, Gmail, and other tools allow continuous, not periodic, data sync.

Vector Search: Semantic similarity enables connections that keyword search misses.

The result: AI that doesn't just retrieve—it understands, contextualizes, and delivers intelligence when and where you need it.

That's what Sift builds. Not another search bar. A live context engine.`,
  },
  {
    id: 3,
    slug: "sift-launches-major-update-context-aware-ai",
    title: "Press Release — Sift Launches Major Update to Power More Context-Aware AI for Teams",
    date: "2025-10-23",
    category: "Press Release",
    authors: ["Kayode Adegbite"],
    readTime: "4 min read",
    excerpt: "San Francisco, CA – October 23, 2025 — Sift, the context layer for humans and AI agents at work, today announced a major update to its platform.",
    content: `San Francisco, CA – October 23, 2025 — Sift, the context layer for humans and AI agents at work, today announced a major update to its platform, introducing advanced temporal reasoning, improved rhetorical question detection, and continuous user-based summaries — setting a new standard for contextual intelligence inside enterprise communication tools.

With this release, Sift takes a significant step toward its vision of becoming the "operating system for organizational intelligence."

## Key Updates

Smarter Understanding of Human Intent:
Sift's models now detect rhetorical questions and nuanced phrasing more accurately, enabling more natural, contextually aware responses across conversations.

Temporal Awareness:
The system now interprets and answers time-dependent questions — such as progress over weeks or changes across quarters — with higher accuracy, giving teams a more dynamic, data-driven view of their own operations.

Persistent, Personalized Summaries:
Each user now benefits from ongoing summaries maintained per channel and per thread, allowing Sift to deliver faster, more precise answers grounded in real, evolving context.

Future-Proof Architecture:
This new foundation enables support for long-term memory and organizational summaries — addressing the long-standing challenges of knowledge drift and loss that Sift's early customers, including Paystack and Mainstack, identified in their workflows.

"Our goal has always been to eliminate the friction of recontextualization inside organizations," said Kayode Adegbite, Co-Founder and CEO of Sift. "With this update, Sift doesn't just recall context — it understands it over time, enabling humans and agents to work in true sync."

Sift continues to expand its enterprise partnerships and integrations, building toward a secure, continuously learning context graph that powers smarter reasoning for both people and AI systems across the enterprise.`,
  },
  {
    id: 4,
    slug: "how-sift-powers-proactive-knowledge-delivery",
    title: "How Sift Powers Proactive Knowledge Delivery with Qdrant",
    date: "2025-01-15",
    category: "Engineering",
    authors: ["Kayode Adegbite", "Samuel Umoren"],
    readTime: "8 min read",
    excerpt: "At Sift, our mission is to eliminate the need for employees to search for information. We believe that knowledge should find you when you need it.",
    content: `At Sift, our mission is to eliminate the need for employees to search for information for all their information need. We believe that knowledge should find you when you need it. To achieve this, we built Sift, a proactive contextual information delivery engine that surfaces relevant knowledge from across an enterprise's digital ecosystem directly within their workflow. At the heart of our retrieval system is Qdrant, providing the speed, scalability, and powerful filtering capabilities we need to deliver a seamless experience.

## The Challenge: Breaking Down Information Silos

In any modern enterprise, knowledge is fragmented across countless platforms—Slack channels, documents, wikis, and more. An employee asking a question might spend valuable time searching for an answer that a colleague has already documented elsewhere. Sift solves this by creating a unified, intelligent knowledge layer that understands the context of a conversation and delivers answers automatically.

## Our Architecture: Ingestion, Retrieval, and Synthesis

Our process is built on a robust Retrieval-Augmented Generation (RAG) pipeline, where Qdrant plays the pivotal role of the retrieval engine.

Ingestion and Vectorization:
When we connect to a data source, every message, document, or knowledge base article is processed and converted into a dense vector embedding using models like all-mpnet-base-v2. This vector represents the semantic meaning of the content.

Intelligent Storage in Qdrant:
Each vector is stored in Qdrant, but critically, it's stored alongside rich metadata. This metadata is the key to delivering personalized, secure, and relevant information. Payloads for each vector include crucial fields such as organization_id, source_type (e.g., Slack, Confluence), and the creator_id.

Real-Time Retrieval:
The magic happens when an employee asks a question in a tool like Slack. The new message is instantly vectorized and used as a query vector. Sift queries Qdrant to find the most semantically similar vectors from the company's knowledge base.

Precision Filtering:
This is where Qdrant's power truly shines for us. Before the similarity search is executed, we apply strict filters. The query is filtered to only search within the user's organization_id, ensuring data security and multi-tenancy. Furthermore, users can specify which source_types they want to include, allowing them to customize their results. This pre-filtering mechanism is incredibly fast and allows us to maintain a high-performance, real-time experience.

Synthesis and Delivery:
The filtered, relevant results from Qdrant are passed to our synthesis system. This layer analyzes the retrieved knowledge snippets and constructs a coherent, easy-to-understand answer. The final response is delivered directly to the user, often just seconds after they ask their question.

## Why Qdrant?

We chose Qdrant as our vector database for several key reasons:

Advanced Filtering:
The ability to filter on metadata payloads before the search is performed is a game-changer for our multi-tenant SaaS platform. It guarantees both security and relevance with minimal performance overhead.

Scalability and Speed:
As our customers ingest millions of documents, Qdrant scales effortlessly, ensuring that retrieval times remain consistently low. This real-time performance is essential for the proactive experience Sift provides.

Ease of Integration:
Qdrant's clear API and client libraries allowed our team to integrate it into our existing infrastructure quickly and efficiently.

Qdrant isn't just a database for us; it's the core of our intelligent retrieval engine. It empowers Sift to instantly connect employees with their organization's collective knowledge, turning a reactive search process into a proactive and contextual flow of information.`,
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <SinglePageNavbar />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline" className="hover:bg-gray-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <SinglePageFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SinglePageNavbar />

      <main className="flex-1 pt-20">
        <div className="container px-6 py-12 max-w-3xl mx-auto">
          <Link to="/blog" className="inline-block mb-6">
            <Button variant="ghost" className="hover:bg-gray-50 text-gray-600 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                  {post.category}
                </Badge>
                <span className="text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm text-gray-400">· {post.readTime}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h1>
              <p className="text-sm text-gray-500 mb-1">
                By {post.authors.join(" and ")}
              </p>
              <p className="text-base text-gray-600">{post.excerpt}</p>
            </header>

            <div className="prose prose-gray max-w-none">
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.includes(":") && !paragraph.startsWith("## ")) {
                  const colonIndex = paragraph.indexOf(":");
                  const title = paragraph.substring(0, colonIndex);
                  const description = paragraph.substring(colonIndex + 1);

                  if (title.length < 80 && description.trim().length > 0) {
                    return (
                      <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                        <strong className="font-semibold text-gray-900">{title}:</strong>
                        {description}
                      </p>
                    );
                  }
                }
                return (
                  <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </main>

      <SinglePageFooter />
    </div>
  );
};

export default BlogPost;
