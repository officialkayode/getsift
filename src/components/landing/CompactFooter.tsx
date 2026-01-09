import { Link } from "react-router-dom";

export const CompactFooter = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <a
              href="mailto:hello@getsift.co"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
