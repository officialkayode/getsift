export const SinglePageFooter = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Demo", id: "demo" },
    { label: "Blog", id: "blog" },
    { label: "Privacy", id: "privacy" },
  ];

  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <span className="text-lg font-medium font-mono">Sift</span>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
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
