/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sansPro: ["sans-pro", "sans-serif"],
      firaSans: ["fira-sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
