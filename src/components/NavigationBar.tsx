import { Link, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white/5 backdrop-blur-sm fixed top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section with logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img 
                src="/favicon.ico" 
                alt="Sift Logo" 
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Right section with navigation */}
          <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};