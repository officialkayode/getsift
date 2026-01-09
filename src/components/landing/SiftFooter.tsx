import { Link } from "react-router-dom";

export const SiftFooter = () => {
  const links = [
    { label: "Product", href: "/" },
    { label: "Security", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contact", href: "/" },
  ];

  return (
    <footer className="py-16 bg-gray-900">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo & tagline */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Sift</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Sift provides citations and confidence to reduce verification overhead.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
