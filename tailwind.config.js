/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts,scss,css}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5057ea",
          dark: "#1e1a1d",
        },
      },
    },
  },
  plugins: [],
};
