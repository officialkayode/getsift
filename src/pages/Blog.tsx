import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 2,
    slug: "temporal-context-beats-search",
    title: "Why Temporal Context Beats Search",
    date: "2026-01-05",
    category: "Product",
    authors: ["Samuel Umoren"],
    readTime: "5 min read",
    excerpt: "Traditional search retrieves documents. Temporal context tells you what's true now, what changed, and who needs to know—the difference between knowledge and intelligence.",
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
  },
  {
    id: 4,
    slug: "how-sift-powers-proactive-knowledge-delivery",
    title: "How Sift Powers Proactive Knowledge Delivery with Qdrant",
    date: "2025-11-15",
    category: "Engineering",
    authors: ["Kayode Adegbite", "Samuel Umoren"],
    readTime: "8 min read",
    excerpt: "At Sift, our mission is to eliminate the need for employees to search for information. We believe that knowledge should find you when you need it.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />

      <main className="flex-1 pt-14">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-serif text-3xl text-foreground mb-2">Blog</h1>
          <p className="text-sm text-muted-foreground mb-12">
            Insights and updates from the Sift team
          </p>

          <div className="divide-y divide-border">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group block py-8 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-muted-foreground/50">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                <h2 className="font-serif text-xl text-foreground group-hover:opacity-70 transition-opacity mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 max-w-xl">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  {post.authors.join(" & ")} · {post.readTime}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Blog;
