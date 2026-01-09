import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SiftNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDemo = () => {
    window.open("https://tally.so/r/3EvdLB", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left: Wordmark */}
          <Link to="/" className="text-xl font-semibold text-gray-900 tracking-tight">
            Sift
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("product")}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("security")}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Security
            </button>
            <Link
              to="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Button
              onClick={handleDemo}
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full"
            >
              Request a demo
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-3">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("product")}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors text-left py-2"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("security")}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors text-left py-2"
              >
                Security
              </button>
              <Link
                to="/blog"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Button
                onClick={handleDemo}
                className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full w-full mt-2"
              >
                Request a demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
