
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { linkHoverClass } from "./shared/animations";

export const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-lg fixed top-0 z-50 border-b border-accent/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/favicon.ico" 
                alt="Sift Logo" 
                className="w-8 h-8 hover:opacity-80 transition-opacity"
              />
              <span className="font-display font-bold text-xl">Sift</span>
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium ${linkHoverClass} ${
                location.pathname === "/how-it-works" ? "text-accent" : "text-white/70"
              }`}
            >
              How It Works
            </Link>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg md:hidden border-b border-accent/10">
              <div className="container mx-auto px-4 py-4">
                <Link 
                  to="/how-it-works" 
                  className={`block py-2 text-sm font-medium ${linkHoverClass} ${
                    location.pathname === "/how-it-works" ? "text-accent" : "text-white/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
