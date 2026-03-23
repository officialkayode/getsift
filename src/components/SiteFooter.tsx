import { Link } from "react-router-dom";

export const SiteFooter = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-serif text-lg text-foreground">
          Sift
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Sift</p>
      </div>
    </footer>
  );
};
