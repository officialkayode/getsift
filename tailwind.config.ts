
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
        background: "#0A1628", // Deep Blue background
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#1E3A5F", // Darker blue for primary elements
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0EA5E9", // Bright Cyan/Teal
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0EA5E9", // Bright Cyan/Teal
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#64748B", // Cool Gray
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#0A1628",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1E3A5F",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Primary typeface
        display: ['Space Grotesk', 'sans-serif'], // Secondary typeface for headlines
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
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
