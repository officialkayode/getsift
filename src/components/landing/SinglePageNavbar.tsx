import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const SinglePageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="text-xl font-medium tracking-tight text-gray-900 font-mono"
          >
            Sift
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Spacer for desktop layout balance */}
          <div className="hidden md:block w-20" />

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
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-sm text-gray-600 hover:text-gray-900 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
