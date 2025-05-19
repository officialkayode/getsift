
import { useState, useEffect, useRef } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loopDuration = 9.99; // video loop duration in seconds
  const isMobile = useIsMobile();

  // Use a local video file path from the public directory
  const videoSrc = "/backgroud-loop.mov";
  useEffect(() => {
    // Add event listeners to handle video loading state
    const videoElement = videoRef.current;
    if (videoElement) {
      // Set loading to false when video can play
      const handleCanPlay = () => {
        setIsLoading(false);
      };

      // Handle possible errors
      const handleError = (e: Event) => {
        console.error("Video error:", e);
        setIsLoading(false); // Still hide loading state even if there's an error
      };
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.addEventListener("error", handleError);

      // Ensure video plays automatically
      videoElement.play().catch(err => {
        console.error("Autoplay failed:", err);
      });
      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
        videoElement.removeEventListener("error", handleError);
      };
    }
  }, []);
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Full-width video container positioning it as backdrop */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && <div className="w-full h-full border-2 border-dashed border-accent/30 bg-accent/5 flex items-center justify-center">
            <p className="text-accent/50 text-lg font-medium">Loading media content...</p>
          </div>}
        
        <video ref={videoRef} src={videoSrc} autoPlay loop muted playsInline className={`w-full h-full object-cover ${isLoading ? 'hidden' : 'block'}`} style={{
        animationDuration: `${loopDuration}s`
      }}>
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay with responsive opacity */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-black/70' : 'bg-black/50'}`}></div>
      </div>
      
      {/* Hero content positioned above the video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8">
        <TooltipProvider>
          <div className="text-center max-w-3xl mx-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide mb-4 sm:mb-6 text-white font-orbitron font-extralight lg:text-6xl">Let relevant context find you</h1>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-sm">Sift delivers context proactively</p>
              </TooltipContent>
            </Tooltip>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-white/90 mb-8 sm:mb-10 font-chakra lg:text-lg">70% of your time is used to piece together the context you already have somewhere</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <div className="w-full sm:w-auto">
                <WaitlistForm />
              </div>
              <Link to="/learn-more" className={`${isMobile ? 'w-1/2' : 'w-full sm:w-auto'}`}>
                <Button variant="outline" className="w-full bg-transparent border-gray-500 text-white hover:bg-gray-800 font-orbitron text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-4 h-auto sm:h-10">
                  Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>;
};
