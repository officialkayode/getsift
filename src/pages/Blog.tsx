import { SinglePageNavbar, SinglePageFooter } from "@/components/landing";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

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
    date: "2025-01-15",
    category: "Engineering",
    authors: ["Kayode Adegbite", "Samuel Umoren"],
    readTime: "8 min read",
    excerpt: "At Sift, our mission is to eliminate the need for employees to search for information. We believe that knowledge should find you when you need it.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SinglePageNavbar />

      <main className="flex-1 pt-20">
        <div className="container px-6 py-12 max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">Blog</h1>
            <p className="text-base text-gray-500">
              Insights, updates, and technical deep-dives from the Sift team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <div className="h-full rounded-xl border border-gray-100 bg-white p-5 transition-all duration-200 hover:border-gray-200 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {post.authors.join(" & ")} · {post.readTime}
                    </span>
                    <span className="text-sm text-gray-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SinglePageFooter />
    </div>
  );
};

export default Blog;
