import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      tab: "700px",
      md: "768px",
      lg: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ink: "var(--ink)",
      paper: "var(--paper)",
      grey: "var(--grey)",
      "grey-soft": "var(--grey-soft)",
      line: "var(--line)",
      wash: "var(--wash)",
      ascii: "var(--ascii)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(36px, 6vw, 72px)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        display: ["clamp(48px, 8.5vw, 100px)", { lineHeight: "0.94", letterSpacing: "-0.04em" }],
        lead: ["clamp(17px, 1.6vw, 20px)", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        statement: ["clamp(19px, 2vw, 24px)", { lineHeight: "1.45", letterSpacing: "-0.015em" }],
        about: ["clamp(18px, 2vw, 22px)", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        contact: ["clamp(26px, 3.6vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        title: ["24px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "960px",
      },
      borderRadius: {
        card: "4px",
        frame: "12px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
