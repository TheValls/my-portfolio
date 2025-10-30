/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // LEARNING POINT: We are extending the default theme.
      // We're adding a new font family called 'valorant'.
      // Now we can use the class `font-valorant` in our HTML.
      fontFamily: {
        'valorant': ['Anton', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'valorant-red': '#FF4655',
      }
    },
  },
  plugins: [],
}