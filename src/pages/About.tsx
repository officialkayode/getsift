
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
                <h1 className="text-4xl md:text-5xl font-orbitron mb-8 text-white">Sift</h1>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">We are starting with one vertical, support engineering during incident management. We believe information should not just be workflow-aware but also role-aware.</p>
              </div>
              
              {/* Feature cards overlaid on video background */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto w-full">
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
                      <TableCell className="font-medium text-gray-200">Tribal Knowledge Capture</TableCell>
                      <TableCell className="text-gray-300">Automatically document solutions as your team solves problems, creating a knowledge base that grows with your team.</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-700 hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Team Communication</TableCell>
                      <TableCell className="text-gray-300">Integrate with your existing communication and collaboration tools to provide and extract answers where your team already works.</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-700 hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Knowledge Retention</TableCell>
                      <TableCell className="text-gray-300">Preserve institutional knowledge even as team members come and go, maintaining continuity in your operations.</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-700/40">
                      <TableCell className="font-medium text-gray-200">Easy Reassignment</TableCell>
                      <TableCell className="text-gray-300">Smoothly transfer tasks between team members with full context and history for seamless handoffs.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </VideoBackground>
        </section>
        
        {/* Tabbed interface section */}
        
        
        {/* CTA Section - Updated to match footer background color */}
        <section className="py-16 bg-gray-700 text-white">
          <div className="container mx-auto px-4 text-center">
            
            
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>;
};
export default About;
