
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="Sift Logo" className="w-8 h-8" />
            <span className="font-display text-lg text-white">Sift</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/how-it-works" 
                  ? "text-accent" 
                  : "text-white/70"
              }`}
            >
              How Sift Works
            </Link>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 md:hidden">
              <div className="container mx-auto px-4 py-4">
                <Link 
                  to="/how-it-works"
                  className={`block py-2 text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === "/how-it-works" 
                      ? "text-accent" 
                      : "text-white/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How Sift Works
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
