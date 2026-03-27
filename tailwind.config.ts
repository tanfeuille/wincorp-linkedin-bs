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
        linkedin: {
          blue: "#0A66C2",
          "blue-dark": "#004182",
          "blue-light": "#70B5F9",
          green: "#057642",
          gray: "#F3F2EF",
          "gray-dark": "#E8E6E1",
          text: "#191919",
          "text-secondary": "#666666",
        },
      },
      keyframes: {
        "float-up": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-120px) scale(1.5)", opacity: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" },
          "75%": { transform: "translateX(3px)" },
        },
        "gauge-fill": {
          "0%": { strokeDashoffset: "283" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float-up": "float-up 2s ease-out forwards",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out",
        "gauge-fill": "gauge-fill 1.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
