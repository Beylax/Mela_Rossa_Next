/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#c31a2f",
        green: "#1eb514",
        dark_green: "#0c4408",
        dark: "#121212"
      },
      boxShadow: {
        "user": "0 0 5rem .1rem rgba(0, 0, 0, .5)"
      }
    },
  },
  plugins: [],
}