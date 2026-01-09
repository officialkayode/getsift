export const TrustStrip = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-center text-sm font-mono text-muted-foreground mb-8 tracking-wide">
          Built for fast-moving teams
        </p>
        
        {/* Placeholder logo row */}
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-24 h-8 bg-gray-200 rounded-md"
              aria-label={`Partner logo placeholder ${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
