import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        sans: ["Galano Grotesque"],
      },
      colors: {
        pender: {
          primary: "var(--pender-primary)",
        },
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #0F642D 0%, #138740 15%, #138740 85%, #0F642D 100%)',
        'texture': 'url("/src/assets/green-texture.svg")',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.mix-burn': {
        'mix-blend-mode': 'color-burn',
      },
    }
    addUtilities(newUtilities)
  }],
} satisfies Config;
