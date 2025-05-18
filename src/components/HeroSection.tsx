
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { fadeInUpClass } from "./shared/animations";

export const HeroSection = () => {
  const [mediaUrl, setMediaUrl] = useState<string>("https://sora.chatgpt.com/g/gen_01jvjt2eefecvswfy3wc2mc3sm");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src = mediaUrl;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.error("Error loading image");
      setIsLoading(false);
    };
  }, [mediaUrl]);

  return (
    <section className="relative container px-4 pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden min-h-[600px] md:min-h-[800px]">
      {/* Full-width media container */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading ? (
          <div className="w-full h-full border-2 border-dashed border-accent/30 bg-accent/5 flex items-center justify-center">
            <p className="text-accent/50 text-lg font-medium">Loading media content...</p>
          </div>
        ) : (
          <img 
            src={mediaUrl} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* Text overlay */}
      <div className="relative z-10 max-w-xl">
        <div className={`bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg ${fadeInUpClass}`}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Your Headline Here
          </h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Add your description text here. This area is for your main messaging.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};
