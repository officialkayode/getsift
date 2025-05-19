import { useState } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { VideoBackground } from "@/components/VideoBackground";
import { FeatureCard } from "@/components/FeatureCard";
import { BookOpen, Info, Book, ExternalLink, ArrowRight, ChevronRight } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("features");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <div className="pt-16">
        {/* Hero section with video background */}
        <section className="relative h-[60vh]">
          <VideoBackground 
            videoSrc="/learnmore.mov" 
            loopDuration={4.79}
            overlayOpacity="bg-gradient-to-r from-purple-900/80 to-blue-900/80"
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-orbitron mb-8 text-white">About Sift</h1>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  We are starting with one vertical, support engineering during incident management.
                  We believe information should not just be workflow aware but also role aware.
                </p>
                <Button 
                  onClick={() => handleScroll("feature-cards")} 
                  className="bg-purple-600 hover:bg-purple-700 font-orbitron"
                >
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </VideoBackground>
        </section>

        {/* Feature card section with animations */}
        <section id="feature-cards" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-orbitron mb-4">What Sift Offers</h2>
              <Separator className="w-24 h-1 bg-purple-500 mx-auto mb-6" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn more about how Sift can transform your engineering workflow
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <FeatureCard
                title="Tribal Knowledge Capture"
                icon={<BookOpen className="h-12 w-12 text-purple-500" />}
                description="Automatically document solutions as your team solves problems, creating a knowledge base that grows with your team."
                delay={100}
                accentColor="border-t-purple-500"
              />
              
              <FeatureCard
                title="Team Communication"
                icon={<Info className="h-12 w-12 text-blue-500" />}
                description="Integrate with your existing communication tools to provide and extract answers where your team already works."
                delay={200}
                accentColor="border-t-blue-500"
              />
              
              <FeatureCard
                title="Knowledge Retention"
                icon={<Book className="h-12 w-12 text-indigo-500" />}
                description="Preserve institutional knowledge even as team members come and go, maintaining continuity in your operations."
                delay={300}
                accentColor="border-t-indigo-500"
              />
              
              <FeatureCard
                title="Easy Reassignment"
                icon={<ExternalLink className="h-12 w-12 text-cyan-500" />}
                description="Smoothly transfer tasks between team members with full context and history for seamless handoffs."
                delay={400}
                accentColor="border-t-cyan-500"
              />
            </div>
          </div>
        </section>
        
        {/* Tabbed interface section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="features" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="features" className="text-sm md:text-base">Features</TabsTrigger>
                  <TabsTrigger value="timeline" className="text-sm md:text-base">Implementation</TabsTrigger>
                  <TabsTrigger value="testimonials" className="text-sm md:text-base">Testimonials</TabsTrigger>
                </TabsList>
                
                {/* Features Tab */}
                <TabsContent value="features" className="focus:outline-none">
                  <VideoBackground 
                    videoSrc="/backgroud-loop.mov"
                    loopDuration={4.79}
                    overlayOpacity="bg-black/70"
                  >
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-orbitron text-center mb-8">Core Capabilities</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <h4 className="font-bold text-xl mb-2">Contextual Intelligence</h4>
                          <p>Sift automatically identifies and delivers the right information to the right person at the right time, based on their role and the current workflow.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <h4 className="font-bold text-xl mb-2">Knowledge Extraction</h4>
                          <p>Our system automatically extracts valuable information from your team's communications and organizes it for future reference.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <h4 className="font-bold text-xl mb-2">Seamless Integration</h4>
                          <p>Sift integrates with your existing tools and workflows, making adoption easy and value delivery immediate.</p>
                        </div>
                      </div>
                    </div>
                  </VideoBackground>
                </TabsContent>
                
                {/* Timeline Tab - Keeping existing content */}
                <TabsContent value="timeline" className="focus:outline-none">
                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-2xl font-orbitron text-center mb-8">Get up and running quickly</h3>
                    
                    <div className="max-w-3xl mx-auto space-y-12">
                      {/* Day 1 */}
                      <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
                        <div className="md:col-span-2 md:text-right">
                          <h4 className="text-xl font-bold text-purple-700">Day 1</h4>
                        </div>
                        <div className="absolute top-0 md:relative md:col-span-1 flex justify-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">1</div>
                          <div className="hidden md:block absolute top-12 bottom-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple-600 to-white"></div>
                        </div>
                        <div className="md:col-span-2">
                          <ul className="list-disc text-gray-700 space-y-2 ml-5">
                            <li>Seamless setup with your existing tools</li>
                            <li>Instant, context-rich insights where you work</li>
                            <li>First automated fix suggested from your past incidents</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Week 1 */}
                      <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
                        <div className="md:col-span-2 md:text-right">
                          <h4 className="text-xl font-bold text-blue-700">Week 1</h4>
                        </div>
                        <div className="absolute top-0 md:relative md:col-span-1 flex justify-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">2</div>
                          <div className="hidden md:block absolute top-12 bottom-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-blue-600 to-white"></div>
                        </div>
                        <div className="md:col-span-2">
                          <ul className="list-disc text-gray-700 space-y-2 ml-5">
                            <li>Sift maps your team's patterns and expertise</li>
                            <li>Engineers turn to Sift for solutions and auto-documentation</li>
                            <li>Dashboard reveals the time saves and pain points</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Month 1 */}
                      <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
                        <div className="md:col-span-2 md:text-right">
                          <h4 className="text-xl font-bold text-indigo-700">Month 1</h4>
                        </div>
                        <div className="absolute top-0 md:relative md:col-span-1 flex justify-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 flex items-center justify-center text-white font-bold">3</div>
                        </div>
                        <div className="md:col-span-2">
                          <ul className="list-disc text-gray-700 space-y-2 ml-5">
                            <li>Auto-updated knowledge hub across all your systems</li>
                            <li>Up to 30% less wasted effort on repeats</li>
                            <li>Data-driven insights prioritize your next optimizations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Testimonials Tab */}
                <TabsContent value="testimonials" className="focus:outline-none">
                  <VideoBackground 
                    videoSrc="/background-loop.mp4.mp4"
                    loopDuration={4.79}
                    overlayOpacity="bg-gradient-to-br from-gray-900 to-blue-900"
                  >
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-orbitron text-center mb-8">Feedback from Beta Users</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <p className="italic mb-4 text-gray-200">"Sift is the only knowledge management system out there today that goes an extra mile by taking account of people's role in knowledge transfer during incident management"</p>
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-sm font-bold mr-3">A</div>
                            <p className="font-bold">Dir of Support at Agilent</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <p className="italic mb-4 text-gray-200">"Sift has been able to make engineering conversations relevant to Customer Success and Sales team. They can see the impact of the conversation to their ticket backlog or sales funnel"</p>
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-sm font-bold mr-3">L</div>
                            <p className="font-bold">Founder and CTO, Langtrace.AI</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                          <p className="italic mb-4 text-gray-200">"The process of getting leadership updates from my directs has changed for good! I can now get contextual update from just looking at a ticket"</p>
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-sm font-bold mr-3">R</div>
                            <p className="font-bold">Dir of Support Eng, Rauken</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </VideoBackground>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-orbitron mb-6">Ready to transform your engineering workflow?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the teams that are already using Sift to capture knowledge, improve communication, and save time.
            </p>
            <Button 
              onClick={() => window.open("https://tally.so/r/3EvdLB", "_blank")}
              className="bg-white text-indigo-900 hover:bg-gray-100 font-orbitron text-lg px-8 py-6"
            >
              Join the Waitlist <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
