import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1D1F",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#2A2D2F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#22A699",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#22A699",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#2A2D2F",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#1A1D1F",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#2A2D2F",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        gelasio: ['Gelasio', 'serif'],
        lato: ['Lato', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;