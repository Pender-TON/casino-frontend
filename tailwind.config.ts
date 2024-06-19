import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Galano Grotesque'],
      },
      colors: {
        pender: {
          primary: 'var(--pender-primary)',
        },
        table: {
          desk: {
            dark: 'var(--table-desk-dark)',
            bg: 'var(--table-desk-bg)',
            accent: 'var(--table-desk-accent)',
          },
          top: {
            line: 'var(--table-top-line)',
            surface: {
              light: 'var(--table-top-surface-light)',
              dark: 'var(--table-top-surface-dark)',
            },
          },
        },
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to right, #0F642D 0%, #138740 15%, #138740 85%, #0F642D 100%)',
        texture: 'url("/src/assets/green-texture.svg")',
      },
    },
  },
} satisfies Config;
