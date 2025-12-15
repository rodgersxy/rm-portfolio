import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The RM Brand Colors
        navy: {
          900: "#020c1b", // Deepest background
          800: "#0a192f", // Standard background
          700: "#112240", // Card background
          600: "#233554", // Border/Hover
        },
        gold: {
          DEFAULT: "#D4AF37", // Metallic Gold
          400: "#E5C365",     // Lighter Gold (Hover)
          500: "#D4AF37",     // Base
          600: "#AA8C2C",     // Darker Gold
        },
        slate: {
          // Professional text colors
          100: "#ccd6f6", // Lightest text
          300: "#8892b0", // Muted text
        }
      },
      fontFamily: {
        // We will configure fonts next, but setting the variable here
        sans: ["var(--font-inter)"], 
      },
    },
  },
  plugins: [],
};
export default config;