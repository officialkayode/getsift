import { Link } from "react-router-dom";

export const SinglePageFooter = () => {
  const links = [
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <Link to="/" className="text-lg font-medium font-mono">
            Sift
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@getsift.co"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 Sift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
