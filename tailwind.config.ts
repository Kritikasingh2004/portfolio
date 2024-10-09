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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.4" },
          "80%": { opacity: "0.7" },
          "90%": { opacity: "0.5" },
        },
      },
      animation: {
        flicker: "flicker 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
