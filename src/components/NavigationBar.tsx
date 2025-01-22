import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm fixed top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section with logo and navigation */}
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-xl font-medium hover:text-accent transition-colors ${
                location.pathname === "/" ? "text-accent" : "text-white"
              }`}
            >
              Sift
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/how-it-works" 
                className={`text-sm font-medium hover:text-accent transition-colors ${
                  location.pathname === "/how-it-works" ? "text-accent" : "text-white/70"
                }`}
              >
                How Sift works
              </Link>
            </div>
          </div>

          {/* Right section with CTA buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-white/70 hover:text-white"
            >
              Log in
            </Button>
            <Button 
              variant="secondary"
              className="bg-accent hover:bg-accent/90"
            >
              Request access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};