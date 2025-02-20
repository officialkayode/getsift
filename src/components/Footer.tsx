
export const Footer = () => {
  return (
    <footer className="border-t border-accent/10 py-8 bg-background">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/favicon.ico" 
            alt="Sift Logo" 
            className="w-8 h-8"
          />
          <p className="text-center text-white/60 font-sans">
            © 2024 Sift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
