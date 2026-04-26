/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#EAE8E3',   // The signature muted grayish-beige
        dark: '#111111',   // Deep black
        primary: '#E9FA47', // The lime-yellow accent from the image
        secondary: '#FFFFFF', // Pure white
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'], 
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(17,17,17,1)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}