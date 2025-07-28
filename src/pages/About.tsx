import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { VideoBackground } from "@/components/VideoBackground";
import { FeatureCard } from "@/components/FeatureCard";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Info, Book, ExternalLink, ArrowRight, ChevronRight } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
const About = () => {
  const [activeTab, setActiveTab] = useState("features");
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <div>
        {/* Hero section with video background - now with increased height and responsive */}
        <section className="relative h-[120vh] md:h-[100vh] lg:h-[120vh]">
          <VideoBackground videoSrc="/learnmore.mov" loopDuration={4.79} overlayOpacity="bg-black/50">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Link to="/">
                  <h1 className="text-4xl md:text-5xl font-orbitron mb-8 text-white hover:text-gray-300 transition-colors cursor-pointer">Sift</h1>
                </Link>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">We believe information should not just be workflow-aware but also role-aware.</p>
              </div>
              
              {/* Feature cards overlaid on video background */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto w-full text-gray-300">
                <h2 className="text-2xl font-orbitron mb-6 text-white text-center">What Sift Offers</h2>
                <Separator className="w-24 h-1 bg-gray-400 mx-auto mb-6" />
                
                <Table className="w-full">
                  <TableHeader>
                    <TableRow className="border-b border-gray-600">
                      <TableCell className="text-lg font-medium text-gray-300">Feature</TableCell>
                      <TableCell className="text-lg font-medium text-gray-300">Description</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-700 hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Instant Context Engine</TableCell>
                      <TableCell className="text-gray-300">Sift automatically links every task to its origin; the initial Slack brainstorm, the relevant planning document, and the key decisions made along the way. It delivers a complete decision history, empowering your team to act with confidence and full autonomy</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-700 hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Constant notifications and endless message threads</TableCell>
                      <TableCell className="text-gray-300">Our intelligent filter analyzes conversations to differentiate urgent signals from low-priority noise. Sift summarizes long threads, flags unanswered questions, and prioritizes what truly needs your attention, allowing your team to focus on deep, meaningful work.</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-700 hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Proactive Information Retrieval</TableCell>
                      <TableCell className="text-gray-300">Sift anticipates your needs. By understanding the context of your current work, it surfaces relevant information and conversations before you even think to search for them. It transforms search from a reactive chore into a proactive advantage</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Team Alignment</TableCell>
                      <TableCell className="text-gray-300">Smoothly transfer tasks or responsibilities between team members or cross-functional partners with full context and history for seamless handoffs. Sift creates a "shared reality" by providing a brief of any project's status, key assets, and history. It ensures everyone (from a new hire to a stakeholder) is operating from the same up-to-date source of truth.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              {/* WaitlistForm positioned at the bottom of the hero section */}
              <div className="absolute bottom-10 left-0 right-0 mx-auto">
                <WaitlistForm />
              </div>
            </div>
          </VideoBackground>
        </section>
        
        {/* Tabbed interface section */}
        
        
        {/* CTA Section - Updated to match footer background color */}
        
      </div>

      <Footer />
    </div>;
};
export default About;