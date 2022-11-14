/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "primary-color": "#47B5FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
