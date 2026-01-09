import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SinglePageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDemo = () => {
    window.open("https://tally.so/r/waxNop", "_blank");
  };

  const navLinks = [
    { label: "Demo", id: "demo" },
    { label: "Blog", id: "blog" },
    { label: "Privacy", id: "privacy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-medium tracking-tight text-gray-900 font-mono"
          >
            Sift
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleDemo}
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full"
            >
              Request a demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm text-gray-600 hover:text-gray-900 py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={handleDemo}
                className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full mt-2 w-full"
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
