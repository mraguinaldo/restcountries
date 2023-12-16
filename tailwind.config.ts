import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade_up': 'fadeUp 0.3s linear',
        'arrowUp': 'arrowUp 0.3s forwards',
        'arrowDown': 'arrowDown 0.3s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(32px)' },
          '100%': { transform: 'translateY(0)' },
        },
        arrowDown: {
          '0%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(180deg)',
          }
        },
        arrowUp: {
          '100%': {
            transform: 'rotate(0)',
          },
          '0%': {
            transform: 'rotate(180deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
