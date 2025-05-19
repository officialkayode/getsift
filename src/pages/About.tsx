
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Info, Book, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Main content */}
      <div className="pt-24">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-gray-900 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-orbitron mb-6 text-white">About Sift</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are starting with one vertical, support engineering during incident management.
                We believe information should not just be workflow aware but also role aware.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We know you've seen and solved this incident before, we can help you find what is relevant 
                that only you need to know. We also leverage both your explicit and tribal knowledge to build 
                not just your knowledge base, but your context base too.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => handleScroll("features")} className="bg-gray-600 hover:bg-gray-500 font-orbitron">
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/">
                  <Button variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron mb-4">Powerful features at your fingertips</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the tools that make Sift an essential part of your engineering workflow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <Card className="shadow-lg border-gray-200">
                <CardHeader className="flex flex-col items-center">
                  <BookOpen className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-center">Tribal Knowledge Capture</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Automatically document solutions as your team solves problems, creating a knowledge base that grows with your team.</p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="shadow-lg border-gray-200">
                <CardHeader className="flex flex-col items-center">
                  <Info className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-center">Team Communication</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Integrate with your existing communication tools to provide and extract answers where your team already works.</p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="shadow-lg border-gray-200">
                <CardHeader className="flex flex-col items-center">
                  <Book className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-center">Knowledge Retention</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Preserve institutional knowledge even as team members come and go, maintaining continuity in your operations.</p>
                </CardContent>
              </Card>
              
              {/* Feature 4 */}
              <Card className="shadow-lg border-gray-200">
                <CardHeader className="flex flex-col items-center">
                  <ExternalLink className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-center">Easy Reassignment</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Smoothly transfer tasks between team members with full context and history for seamless handoffs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Timeline section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron mb-4">Get up and running quickly</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here's what you can get done with Sift in one month, with immediate value that compounds over time.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Day 1 */}
              <div className="mb-12 relative">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent ml-8">
                  <h3 className="text-xl font-bold mb-2 font-orbitron">Day 1</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Seamless setup with your existing tools</li>
                    <li>Instant, context-rich insights where you work</li>
                    <li>First automated fix suggested from your past incidents</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              
              {/* Week 1 */}
              <div className="mb-12 relative">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent ml-8">
                  <h3 className="text-xl font-bold mb-2 font-orbitron">Week 1</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sift maps your team's patterns and expertise</li>
                    <li>Engineers turn to Sift for solutions and auto-documentation</li>
                    <li>Dashboard reveals the time saves and pain points</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              
              {/* Month 1 */}
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent ml-8">
                  <h3 className="text-xl font-bold mb-2 font-orbitron">Month 1</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Auto-updated knowledge hub across all your systems</li>
                    <li>Up to 30% less wasted effort on repeats</li>
                    <li>Data-driven insights prioritize your next optimizations</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron mb-4">Feedback from Beta Users</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Here's what our early users are saying about Sift.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">"Sift is the only knowledge management system out there today that goes an extra mile by taking account of people's role in knowledge transfer during incident management"</p>
                <p className="font-bold">- Dir of Support at Agilent</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">"Sift has been able to make engineering conversations relevant to Customer Success and Sales team. They can see the impact of the conversation to their ticket backlog or sales funnel"</p>
                <p className="font-bold">- Founder and CTO, Langtrace.AI</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">"The process of getting leadership updates from my directs has changed for good! I can now get contextual update from just looking at a ticket"</p>
                <p className="font-bold">- Dir of Support Eng, Rauken</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
