import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 2,
    slug: "sift-launches-major-update-context-aware-ai",
    title: "Press Release — Sift Launches Major Update to Power More Context-Aware AI for Teams",
    date: "2025-10-23",
    category: "Press Release",
    authors: ["Kayode Adegbite"],
    readTime: "4 min read",
    excerpt: "San Francisco, CA – October 23, 2025 — Sift, the context layer for humans and AI agents at work, today announced a major update to its platform, introducing advanced temporal reasoning, improved rhetorical question detection, and continuous user-based summaries.",
  },
  {
    id: 1,
    slug: "how-sift-powers-proactive-knowledge-delivery",
    title: "How Sift Powers Proactive Knowledge Delivery with Qdrant",
    date: "2025-01-15",
    category: "Engineering",
    authors: ["Kayode Adegbite", "Samuel Umoren"],
    readTime: "8 min read",
    excerpt: "At Sift, our mission is to eliminate the need for employees to search for information for all their information need. We believe that knowledge should find you when you need it.",
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavigationBar />
      
      <main className="flex-1">
        <div className="container px-4 py-16 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono font-normal mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground font-mono font-light">
              Insights, updates, and technical deep-dives from the Sift team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group"
              >
                <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="font-mono font-medium">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono font-light">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-mono font-medium mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground font-mono font-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-mono font-light">
                      By {post.authors.join(" and ")}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono font-light">
                      {post.readTime}
                    </span>
                    <span className="text-sm font-mono font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
