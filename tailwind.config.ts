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
        highlightBlue: "var(--highlightBlue)",
        textHighlight: "var(--textHighlight)",
        textLowlight: "var(--textLowlight)",
      },
      screens: {
        xs: "480px",
      }
    },
  },
  plugins: [],
};
export default config;
