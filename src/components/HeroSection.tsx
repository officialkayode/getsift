
import { useState, useEffect, useRef } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { cn } from "@/lib/utils";
import { fadeInUpClass } from "./shared/animations";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loopDuration = 9.99; // video loop duration in seconds
  const isMobile = useIsMobile();
  
  // Use a local video file path from the public directory
  const videoSrc = "/background-loop.mp4";

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

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20 md:pt-24 lg:pt-32 lg:pb-16 overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
      {/* Full-width media container with responsive sizing */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && (
          <div className="w-full h-full border-2 border-dashed border-accent/30 bg-accent/5 flex items-center justify-center">
            <p className="text-accent/50 text-lg font-medium">Loading media content...</p>
          </div>
        )}
        
        <video 
          ref={videoRef}
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline
          className={`w-full h-full object-cover ${isLoading ? 'hidden' : 'block'}`}
          style={{ animationDuration: `${loopDuration}s` }}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay with responsive opacity */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-black/70' : 'bg-gradient-to-b from-black/50 to-black/30'}`}></div>
      </div>
      
      {/* Text overlay with responsive styling */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full mx-auto">
        <div className={`bg-background/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-lg w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto`}>
          <h2 className={`animate-bounce-slow text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 text-white`}>
            Context where you need it, when you need it
          </h2>
          <h2 className={`animate-bounce-slower text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/90 mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12`}>
            Tribal knowledge makes the context complete
          </h2>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
