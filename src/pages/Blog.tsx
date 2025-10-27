import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "How Sift Powers Proactive Knowledge Delivery with Qdrant",
    date: "2025-01-15",
    category: "Engineering",
    excerpt: "At Sift, our mission is to eliminate the need for employees to search for information for all their information need. We believe that knowledge should find you when you need it.",
    content: `At Sift, our mission is to eliminate the need for employees to search for information for all their information need. We believe that knowledge should find you when you need it. To achieve this, we built Sift, a proactive contextual information delivery engine that surfaces relevant knowledge from across an enterprise's digital ecosystem directly within their workflow. At the heart of our retrieval system is Qdrant, providing the speed, scalability, and powerful filtering capabilities we need to deliver a seamless experience.

## The Challenge: Breaking Down Information Silos

In any modern enterprise, knowledge is fragmented across countless platforms—Slack channels, documents, wikis, and more. An employee asking a question might spend valuable time searching for an answer that a colleague has already documented elsewhere. Sift solves this by creating a unified, intelligent knowledge layer that understands the context of a conversation and delivers answers automatically.

## Our Architecture: Ingestion, Retrieval, and Synthesis

Our process is built on a robust Retrieval-Augmented Generation (RAG) pipeline, where Qdrant plays the pivotal role of the retrieval engine.

**Ingestion and Vectorization:** When we connect to a data source, every message, document, or knowledge base article is processed and converted into a dense vector embedding using models like all-mpnet-base-v2. This vector represents the semantic meaning of the content.

**Intelligent Storage in Qdrant:** Each vector is stored in Qdrant, but critically, it's stored alongside rich metadata. This metadata is the key to delivering personalized, secure, and relevant information. Payloads for each vector include crucial fields such as organization_id, source_type (e.g., Slack, Confluence), and the creator_id.

**Real-Time Retrieval:** The magic happens when an employee asks a question in a tool like Slack. The new message is instantly vectorized and used as a query vector. Sift queries Qdrant to find the most semantically similar vectors from the company's knowledge base.

**Precision Filtering:** This is where Qdrant's power truly shines for us. Before the similarity search is executed, we apply strict filters. The query is filtered to only search within the user's organization_id, ensuring data security and multi-tenancy. Furthermore, users can specify which source_types they want to include, allowing them to customize their results. This pre-filtering mechanism is incredibly fast and allows us to maintain a high-performance, real-time experience.

**Synthesis and Delivery:** The filtered, relevant results from Qdrant are passed to our synthesis system. This layer analyzes the retrieved knowledge snippets and constructs a coherent, easy-to-understand answer. The final response is delivered directly to the user, often just seconds after they ask their question.

## Why Qdrant?

We chose Qdrant as our vector database for several key reasons:

**Advanced Filtering:** The ability to filter on metadata payloads before the search is performed is a game-changer for our multi-tenant SaaS platform. It guarantees both security and relevance with minimal performance overhead.

**Scalability and Speed:** As our customers ingest millions of documents, Qdrant scales effortlessly, ensuring that retrieval times remain consistently low. This real-time performance is essential for the proactive experience Sift provides.

**Ease of Integration:** Qdrant's clear API and client libraries allowed our team to integrate it into our existing infrastructure quickly and efficiently.

Qdrant isn't just a database for us; it's the core of our intelligent retrieval engine. It empowers Sift to instantly connect employees with their organization's collective knowledge, turning a reactive search process into a proactive and contextual flow of information.`
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

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="font-mono font-medium">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-mono font-light">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-mono font-normal">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base font-mono font-light">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <article className="prose prose-lg max-w-none font-mono font-light">
                    {post.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={idx} className="text-2xl font-mono font-medium mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        const text = paragraph.slice(2, -2);
                        const [title, ...rest] = text.split(':');
                        return (
                          <p key={idx} className="mb-4">
                            <strong className="font-mono font-medium">{title}:</strong>
                            {rest.join(':')}
                          </p>
                        );
                      }
                      return (
                        <p key={idx} className="mb-4 text-foreground/90">
                          {paragraph}
                        </p>
                      );
                    })}
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
