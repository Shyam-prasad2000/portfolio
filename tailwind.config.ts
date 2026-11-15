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
        canvas: "#F7F5F4",
        brand: {
          dark: "#121212",
          surface: "#1A1A1A",
          lime: "#D2F825",
          limeHover: "#BCE61B",
          text: "#121212",
          muted: "#6A6864",
          subtle: "#918E89",
          border: "#E6E3E0",
          cardBorder: "#ECEAE7",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        heading: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 14px rgba(0, 0, 0, 0.03)",
        cardHover: "0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
        modal: "0 24px 60px rgba(0, 0, 0, 0.18)",
        limeGlow: "0 0 20px rgba(210, 248, 37, 0.45)",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "22px",
      },
    },
  },
  plugins: [],
};

export default config;
