/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qualitydark: "#d3768d",
        quality: "#bc9c21",
      },
      fontFamily: {
        quality: ["Libre Baskerville", "sans-serif"]
      },
      keyframes: {
        'slide': {
          '0%': {
            transform: 'translateX(-500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'slide': 'slide 0.15s ease-in',
      }
    },
  },
  plugins: [],
}

