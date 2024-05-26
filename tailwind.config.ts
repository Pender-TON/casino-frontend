import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Galano Grotesque"],
      },
      colors: {
        pender: {
          primary: "var(--pender-primary)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
