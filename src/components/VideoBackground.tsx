
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoBackgroundProps {
  videoSrc: string;
  loopDuration?: number;
  overlayOpacity?: string;
  children?: React.ReactNode;
}

export const VideoBackground = ({
  videoSrc,
  loopDuration = 4.79,
  overlayOpacity = "bg-black/50",
  children
}: VideoBackgroundProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setIsLoading(false);
      };

      const handleError = (e: Event) => {
        console.error("Video error:", e);
        setIsLoading(false);
      };
      
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.addEventListener("error", handleError);

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
    <div className="relative w-full h-full overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && (
          <div className="w-full h-full border-2 border-dashed border-accent/30 bg-accent/5 flex items-center justify-center">
            <p className="text-accent/50 text-lg font-medium">Loading video content...</p>
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
        
        {/* Overlay with responsive opacity */}
        <div className={`absolute inset-0 ${isMobile ? overlayOpacity.replace('/50', '/60') : overlayOpacity}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
