import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const industries = [
  { label: "Pharma Clinical Trials", href: "/industry/pharma", active: true },
  { label: "Financial Services Compliance", active: false },
  { label: "Insurance Underwriting", active: false },
  { label: "Medical Device Quality & Regulatory", active: false },
  { label: "Energy & Utilities Compliance", active: false },
  { label: "Aerospace & Defense Programs", active: false },
  { label: "Public Sector Procurement & Oversight", active: false },
];

export const SiteNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl text-foreground tracking-tight">
          Sift
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Use-cases <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {dropdownOpen &&
            <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-lg py-2">
                {industries.map((item) =>
              item.active ?
              <Link
                key={item.label}
                to={item.href!}
                onClick={() => setDropdownOpen(false)}
                className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors">
                      {item.label}
                    </Link> :
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground/50 cursor-default">
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground/40">Coming soon</span>
                    </div>
              )}
              </div>
            }
          </div>

          <Link to="/blog" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Blog</Link>
          <Link to="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">About</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground/70">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Use-cases</p>
          {industries.map((item) =>
        item.active ?
        <Link
          key={item.label}
          to={item.href!}
          onClick={() => setMobileOpen(false)}
          className="block py-2 text-sm text-foreground">
                {item.label}
              </Link> :
        <div key={item.label} className="flex justify-between py-2 text-sm text-muted-foreground/50">
                <span>{item.label}</span>
                <span className="text-xs">Coming soon</span>
              </div>
        )}
          <div className="border-t border-border my-3" />
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground">Blog</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground">About</Link>
          <Link to="/privacy" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-foreground">Privacy</Link>
        </div>
      }
    </nav>
  );
};
