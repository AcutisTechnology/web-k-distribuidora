import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        background_primary: "#FAF9F6",
        background_secondary: "#141414",

        primary: "#C2B8A6",

        border_primary: "#D6D6D6",
        border_secondary: "#A89778",

        title: "#2F2F2F",
        description: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
