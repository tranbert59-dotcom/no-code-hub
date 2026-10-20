import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Échelle fluide : les titres grandissent avec la fenêtre sans palier.
      //  · display — titre de page (h1)      : 40 → 60 px
      //  · title   — titre de section (h2)   : 28 → 40 px
      fontFamily: {
        hand: ['Caveat', 'cursive'],   // accent manuscrit, graisse 600 seulement
      },
      fontSize: {
        display: ["clamp(2.5rem, 1.6rem + 4.2vw, 3.75rem)",
                  { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        title: ["clamp(1.75rem, 1.3rem + 2.1vw, 2.5rem)",
                { lineHeight: "1.12", letterSpacing: "-0.022em" }],
      },
      colors: {
        // Tokens sémantiques — voir globals.css
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
          3: "rgb(var(--surface-3) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          2: "rgb(var(--card-2) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
          fg: "rgb(var(--accent-fg) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
