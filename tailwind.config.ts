import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      tab: "821px",
      lg: "1051px",
      xl: "1280px",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#00225a",
          dark: "#001b49",
        },
        orange: {
          DEFAULT: "#ff5e13",
          dark: "#e6500e",
        },
        light: "#f4f7fb",
        soft: "#eaf1fa",
        muted: "#697487",
        line: "#e3eaf3",
      },
      fontFamily: {
        sans: [
          "var(--font-khand)",
          "Khand",
          "Arial Narrow",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1180px",
        quote: "980px",
      },
      boxShadow: {
        brand: "0 18px 45px rgba(0,34,90,.13)",
        card: "0 24px 58px rgba(0,34,90,.20)",
        header: "0 5px 16px rgba(0,0,0,.12)",
        "header-scrolled": "0 12px 34px rgba(0,0,0,.28)",
        dropdown: "0 18px 45px rgba(0,34,90,.13)",
      },
      keyframes: {
        ripple: {
          to: { transform: "translate(-50%,-50%) scale(18)", opacity: "0" },
        },
        quoteFade: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        mobileDrop: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        riseIn: {
          from: { opacity: "0", transform: "translateY(60px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-70px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(70px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        pageIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        ripple: "ripple .62s ease-out forwards",
        quoteFade: "quoteFade .28s ease both",
        mobileDrop: "mobileDrop .28s ease both",
        "fade-up": "fadeUp 1.1s ease both",
        "fade-in": "fadeIn 1.3s ease both",
        "float-y": "floatY 5s ease-in-out infinite",
        "rise-in": "riseIn 1.2s cubic-bezier(.22,1,.36,1) both",
        "slide-in-left": "slideInLeft 1.25s cubic-bezier(.22,1,.36,1) both",
        "slide-in-right": "slideInRight 1.25s cubic-bezier(.22,1,.36,1) both",
        "page-in": "pageIn .5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
