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
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(36px, 6vw, 72px)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        lead: ["clamp(20px, 2.4vw, 30px)", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        statement: ["clamp(22px, 3vw, 38px)", { lineHeight: "1.25", letterSpacing: "-0.025em" }],
        about: ["clamp(18px, 2vw, 22px)", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        contact: ["clamp(26px, 3.6vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        title: ["24px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "960px",
      },
      borderRadius: {
        card: "4px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
