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
  
  return (
    <div className="min-h-screen bg-background">
      <div>
        {/* Hero section with video background - responsive height and content spacing */}
        <section className="relative min-h-screen">
          <VideoBackground videoSrc="/backgroud-loop.mov" loopDuration={9.99} overlayOpacity="bg-black/50">
            <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center py-20">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                <Link to="/">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-6 md:mb-8 text-white hover:text-gray-300 transition-colors cursor-pointer">Sift</h1>
                </Link>
                <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed px-4">We believe information should not just be workflow-aware but also role-aware.</p>
              </div>
              
              {/* Feature cards overlaid on video background - responsive */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-5xl mx-auto w-full mb-8 md:mb-16">
                <h2 className="text-xl md:text-2xl font-orbitron mb-4 md:mb-6 text-white text-center">What Sift Offers</h2>
                <Separator className="w-24 h-1 bg-gray-400 mx-auto mb-4 md:mb-6" />
                
                {/* Mobile-responsive table */}
                <div className="overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow className="border-b border-gray-600">
                        <TableCell className="text-lg font-medium text-gray-300">Feature</TableCell>
                        <TableCell className="text-lg font-medium text-gray-300">Description</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-b border-gray-700 hover:bg-gray-700/40 block md:table-row">
                        <TableCell className="font-medium text-gray-200 block md:table-cell md:w-1/3 pb-2 md:pb-4">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Feature:</div>
                          Tribal Knowledge Capture
                        </TableCell>
                        <TableCell className="text-gray-300 text-sm md:text-base block md:table-cell">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Description:</div>
                          Automatically capture and document implicit knowledge as your team solves problems, creating a dynamic knowledge base that grows with your team.
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-700 hover:bg-gray-700/40 block md:table-row">
                        <TableCell className="font-medium text-gray-200 block md:table-cell md:w-1/3 pb-2 md:pb-4">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Feature:</div>
                          Communication and Collaboration
                        </TableCell>
                        <TableCell className="text-gray-300 text-sm md:text-base block md:table-cell">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Description:</div>
                          Integrate with your communication and collaboration tools to provide and extract answers where your team already works.
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-b border-gray-700 hover:bg-gray-700/40 block md:table-row">
                        <TableCell className="font-medium text-gray-200 block md:table-cell md:w-1/3 pb-2 md:pb-4">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Feature:</div>
                          Knowledge Retention
                        </TableCell>
                        <TableCell className="text-gray-300 text-sm md:text-base block md:table-cell">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Description:</div>
                          Preserve institutional knowledge even as team members come and go, maintaining continuity in your operations.
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-700/40 block md:table-row">
                        <TableCell className="font-medium text-gray-200 block md:table-cell md:w-1/3 pb-2 md:pb-4">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Feature:</div>
                          Easy Reassignment
                        </TableCell>
                        <TableCell className="text-gray-300 text-sm md:text-base block md:table-cell">
                          <div className="md:hidden text-sm text-gray-400 mb-1">Description:</div>
                          Smoothly transfer tasks or responsibilities between team members or cross-functional partners with full context and history for seamless handoffs.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              {/* WaitlistForm positioned with proper spacing - no longer absolute */}
              <div className="flex justify-center">
                <WaitlistForm />
              </div>
            </div>
          </VideoBackground>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
