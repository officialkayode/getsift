
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center space-x-2"
          >
            <img src="/favicon.ico" alt="Sift Logo" className="w-8 h-8" />
            <span className="font-display text-lg font-bold text-foreground">Sift</span>
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              How It Works
            </button>
            <div className="border-l border-accent/10 h-6"></div>
            <button
              onClick={() => window.open("https://tally.so/r/3EvdLB", "_blank")}
              className="flex items-center space-x-1 text-sm font-medium bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent/20 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              <span>Join Waitlist</span>
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-accent/10 md:hidden">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors text-left"
                >
                  How It Works
                </button>
                <button
                  onClick={() => window.open("https://tally.so/r/3EvdLB", "_blank")}
                  className="flex items-center space-x-1 text-sm font-medium bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent/20 transition-colors w-full justify-center"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Join Waitlist</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
