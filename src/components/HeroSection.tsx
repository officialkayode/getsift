
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { cn } from "@/lib/utils";
import { fadeInUpClass } from "./shared/animations";

export const HeroSection = () => {
  const [mediaUrl, setMediaUrl] = useState<string>("https://sora.chatgpt.com/g/gen_01jvjt2eefecvswfy3wc2mc3sm");
  const [isLoading, setIsLoading] = useState(true);
  const [isVideo, setIsVideo] = useState(true);
  const loopDuration = 9.99; // video loop duration in seconds

  useEffect(() => {
    // Check if the URL is a video
    const isVideoURL = mediaUrl.includes("sora.chatgpt.com") || 
                      mediaUrl.endsWith(".mp4") || 
                      mediaUrl.endsWith(".webm") || 
                      mediaUrl.endsWith(".ogg");
    
    setIsVideo(isVideoURL);

    if (isVideoURL) {
      // For videos, we'll set loading to false after a short timeout
      // since we can't easily preload videos like images
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // For images, we'll use the image preloading approach
      const img = new Image();
      img.src = mediaUrl;
      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        console.error("Error loading image");
        setIsLoading(false);
      };
    }
  }, [mediaUrl]);

  return (
    <section className="relative container px-4 pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden min-h-[600px] md:min-h-[800px]">
      {/* Full-width media container */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading ? (
          <div className="w-full h-full border-2 border-dashed border-accent/30 bg-accent/5 flex items-center justify-center">
            <p className="text-accent/50 text-lg font-medium">Loading media content...</p>
          </div>
        ) : isVideo ? (
          <video 
            src={mediaUrl} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            style={{ animationDuration: `${loopDuration}s` }}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={mediaUrl} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Text overlay with animation */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <div className="bg-background/30 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl">
          <h2 className="animate-bounce-slow text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Context where you need it, where you need it
          </h2>
          <h2 className="animate-bounce-slower text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-12">
            Tribal knowledge makes the context complete
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};
