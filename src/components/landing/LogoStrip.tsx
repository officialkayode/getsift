export const LogoStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-wide uppercase">
          Built by leaders from
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Meta */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <img 
              src="/meta-logo.png" 
              alt="Meta" 
              className="h-6 md:h-8 w-auto object-contain"
            />
          </div>
          
          {/* Microsoft */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-6 md:h-8 w-auto" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H11V11H0V0Z" fill="#F25022"/>
              <path d="M12 0H23V11H12V0Z" fill="#7FBA00"/>
              <path d="M0 12H11V23H0V12Z" fill="#00A4EF"/>
              <path d="M12 12H23V23H12V12Z" fill="#FFB900"/>
            </svg>
          </div>
          
          {/* LinkedIn */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-6 md:h-8 w-auto" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="8" fill="#0A66C2"/>
              <path d="M20.5 28H27V51.5H20.5V28ZM23.75 16C26.0972 16 28 17.9028 28 20.25C28 22.5972 26.0972 24.5 23.75 24.5C21.4028 24.5 19.5 22.5972 19.5 20.25C19.5 17.9028 21.4028 16 23.75 16ZM32 28H38.25V30.9375H38.3438C39.2188 29.2188 41.4688 27.4062 44.8125 27.4062C51.4375 27.4062 52.625 31.7812 52.625 37.4688V51.5H46.125V38.75C46.125 35.6875 46.0625 31.7188 41.8125 31.7188C37.5 31.7188 36.8438 35.0938 36.8438 38.5312V51.5H32V28Z" fill="white"/>
            </svg>
          </div>
          
          {/* Lululemon */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-6 md:h-8 w-auto" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C42.5 0 36.5 6 36.5 13.5C36.5 21 42.5 27 50 27C57.5 27 63.5 21 63.5 13.5C63.5 6 57.5 0 50 0ZM50 22C45.3 22 41.5 18.2 41.5 13.5C41.5 8.8 45.3 5 50 5C54.7 5 58.5 8.8 58.5 13.5C58.5 18.2 54.7 22 50 22Z" fill="#D31334"/>
              <text x="70" y="20" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#D31334">lululemon</text>
            </svg>
          </div>
          
          {/* PayPal */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-6 md:h-8 w-auto" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.73 3.27H30.62C30.14 3.27 29.73 3.62 29.66 4.09L26.36 24.51C26.31 24.86 26.58 25.17 26.93 25.17H30.75C31.23 25.17 31.64 24.82 31.71 24.35L32.56 18.92C32.63 18.45 33.04 18.1 33.52 18.1H35.95C41.07 18.1 44.05 15.59 44.83 10.66C45.18 8.47 44.85 6.71 43.85 5.47C42.75 4.1 40.98 3.27 38.73 3.27Z" fill="#003087"/>
              <path d="M56.93 10.52C56.56 13.02 54.6 13.02 52.72 13.02H51.66L52.37 8.48C52.41 8.22 52.64 8.03 52.9 8.03H53.38C54.66 8.03 55.87 8.03 56.49 8.75C56.87 9.19 56.99 9.83 56.93 10.52ZM56.37 18.12H52.54C52.28 18.12 52.05 17.93 52.01 17.67L50.18 5.71C50.13 5.36 50.4 5.05 50.75 5.05H52.84C53.32 5.05 53.73 5.4 53.8 5.87L54.29 9.02C54.36 9.49 54.77 9.84 55.25 9.84H56.83C61.23 9.84 63.81 11.95 64.47 16.17C64.76 18.06 64.47 19.56 63.6 20.6C62.64 21.74 61.03 22.38 58.97 22.38C57.51 22.38 56.28 22.06 55.28 21.43" fill="#003087"/>
              <path d="M78.61 10.52C78.24 13.02 76.28 13.02 74.4 13.02H73.34L74.05 8.48C74.09 8.22 74.32 8.03 74.58 8.03H75.06C76.34 8.03 77.55 8.03 78.17 8.75C78.55 9.19 78.67 9.83 78.61 10.52ZM78.05 18.12H74.22C73.96 18.12 73.73 17.93 73.69 17.67L71.86 5.71C71.81 5.36 72.08 5.05 72.43 5.05H74.34C74.82 5.05 75.23 5.4 75.3 5.87L75.79 9.02C75.86 9.49 76.27 9.84 76.75 9.84H78.33C82.73 9.84 85.31 11.95 85.97 16.17C86.26 18.06 85.97 19.56 85.1 20.6C84.14 21.74 82.53 22.38 80.47 22.38C79.01 22.38 77.78 22.06 76.78 21.43" fill="#0070E0"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
