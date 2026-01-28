export const LogoStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-wide uppercase">
          BUILT BY EXPERTS FROM
        </p>

        <div className="flex items-center justify-between">
          {/* Meta */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-24">
            <img
              src="/meta-logo.png"
              alt="Meta"
              className="h-6 md:h-8 w-auto object-contain"
            />
          </div>

          {/* Microsoft */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-24">
            <svg
              className="h-6 md:h-8 w-auto"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H11V11H0V0Z" fill="#F25022" />
              <path d="M12 0H23V11H12V0Z" fill="#7FBA00" />
              <path d="M0 12H11V23H0V12Z" fill="#00A4EF" />
              <path d="M12 12H23V23H12V12Z" fill="#FFB900" />
            </svg>
          </div>

          {/* LinkedIn */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-24">
            <svg
              className="h-6 md:h-8 w-auto"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="72" height="72" rx="8" fill="#0A66C2" />
              <path
                d="M20.5 28H27V51.5H20.5V28ZM23.75 16C26.0972 16 28 17.9028 28 20.25C28 22.5972 26.0972 24.5 23.75 24.5C21.4028 24.5 19.5 22.5972 19.5 20.25C19.5 17.9028 21.4028 16 23.75 16ZM32 28H38.25V30.9375H38.3438C39.2188 29.2188 41.4688 27.4062 44.8125 27.4062C51.4375 27.4062 52.625 31.7812 52.625 37.4688V51.5H46.125V38.75C46.125 35.6875 46.0625 31.7188 41.8125 31.7188C37.5 31.7188 36.8438 35.0938 36.8438 38.5312V51.5H32V28Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Lululemon - Omega/Arch Logo */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-24">
            <svg
              className="h-6 md:h-8 w-auto"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0C8.954 0 0 8.954 0 20c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4C40 8.954 31.046 0 20 0zm0 4c8.837 0 16 7.163 16 16H4c0-8.837 7.163-16 16-16z"
                fill="#D31334"
              />
            </svg>
          </div>

          {/* PayPal - Overlapping PP Logo */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-24">
            <svg
              className="h-6 md:h-8 w-auto"
              viewBox="0 0 100 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Back P - Light Blue */}
              <path
                d="M30.5 2H19.2c-.8 0-1.5.6-1.6 1.4L13 27.7c-.1.6.4 1.1 1 1.1h5.4c.8 0 1.5-.6 1.6-1.4l1.2-7.8c.1-.8.8-1.4 1.6-1.4h3.7c7.8 0 12.3-3.8 13.5-11.3.5-3.3 0-5.9-1.5-7.7C37.5 3 34.5 2 30.5 2z"
                fill="#0070E0"
              />
              {/* Front P - Dark Blue */}
              <path
                d="M23.5 0H12.2c-.8 0-1.5.6-1.6 1.4L6 25.7c-.1.6.4 1.1 1 1.1h5.8c.6 0 1-.4 1.1-1l1.4-8.6c.1-.8.8-1.4 1.6-1.4h3.7c7.8 0 12.3-3.8 13.5-11.3.5-3.3 0-5.9-1.5-7.7C30.5 1 27.5 0 23.5 0z"
                fill="#003087"
              />
              {/* PayPal text */}
              <path
                d="M52.3 10.5h-4.1c-.3 0-.5.2-.6.4l-1.7 10.5c0 .2.1.4.4.4h2c.3 0 .5-.2.6-.4l.5-2.9c0-.3.3-.4.6-.4h1.3c2.7 0 4.3-1.3 4.7-3.9.2-1.1 0-2-.5-2.6-.6-.7-1.6-1.1-3.2-1.1zm.5 3.8c-.2 1.5-1.3 1.5-2.4 1.5h-.6l.4-2.7c0-.2.2-.3.4-.3h.3c.7 0 1.4 0 1.8.4.2.3.3.6.1 1.1zM66.3 14.2h-2c-.2 0-.4.1-.4.3l-.1.5-.1-.2c-.4-.6-1.3-.8-2.2-.8-2.1 0-3.8 1.6-4.2 3.8-.2 1.1.1 2.2.7 2.9.6.7 1.4 1 2.4 1 1.7 0 2.6-1.1 2.6-1.1l-.1.5c0 .2.1.4.4.4h1.8c.3 0 .5-.2.6-.4l1.1-6.6c0-.1-.2-.3-.5-.3zm-2.6 3.7c-.2 1.1-1.1 1.8-2.2 1.8-.6 0-1-.2-1.3-.5-.3-.3-.4-.8-.3-1.3.2-1.1 1.1-1.8 2.2-1.8.5 0 1 .2 1.3.5.3.4.4.8.3 1.3zM76.8 14.2h-2c-.2 0-.4.1-.5.3l-3 4.4-1.3-4.2c-.1-.3-.3-.5-.6-.5h-2c-.2 0-.4.2-.3.5l2.4 7-2.2 3.2c-.2.2 0 .5.3.5h2c.2 0 .4-.1.5-.3l7.1-10.3c.1-.3-.1-.6-.4-.6z"
                fill="#003087"
              />
              <path
                d="M85.3 10.5h-4.1c-.3 0-.5.2-.6.4l-1.7 10.5c0 .2.1.4.4.4h2.1c.3 0 .5-.2.6-.4l.5-2.9c0-.3.3-.4.6-.4h1.3c2.7 0 4.3-1.3 4.7-3.9.2-1.1 0-2-.5-2.6-.6-.7-1.7-1.1-3.3-1.1zm.5 3.8c-.2 1.5-1.3 1.5-2.4 1.5h-.6l.4-2.7c0-.2.2-.3.4-.3h.3c.7 0 1.4 0 1.8.4.2.3.2.6.1 1.1zM99.2 14.2h-2c-.2 0-.4.1-.4.3l-.1.5-.1-.2c-.4-.6-1.3-.8-2.2-.8-2.1 0-3.8 1.6-4.2 3.8-.2 1.1.1 2.2.7 2.9.6.7 1.4 1 2.4 1 1.7 0 2.6-1.1 2.6-1.1l-.1.5c0 .2.1.4.4.4h1.8c.3 0 .5-.2.6-.4l1.1-6.6c-.1-.1-.3-.3-.5-.3zm-2.6 3.7c-.2 1.1-1.1 1.8-2.2 1.8-.6 0-1-.2-1.3-.5-.3-.3-.4-.8-.3-1.3.2-1.1 1.1-1.8 2.2-1.8.5 0 1 .2 1.3.5.3.4.4.8.3 1.3z"
                fill="#0070E0"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
