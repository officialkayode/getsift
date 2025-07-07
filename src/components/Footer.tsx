
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300/10 py-8 bg-gray-700">
      <div className="container px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-gray-300">
            © 2025 Sift. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
