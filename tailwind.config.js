/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030804',
          card: 'rgba(5, 15, 8, 0.8)',
          border: 'rgba(0, 180, 60, 0.25)',
          muted: '#9ca3af',
        },
        matrix: {
          light: '#00e64d',
          DEFAULT: '#00cc44',
          dark: '#009933',
          border: 'rgba(0, 204, 68, 0.3)',
          bg: 'rgba(0, 180, 60, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        calibri: ['Calibri', 'Carlito', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
    },
  },
  plugins: [],
}
