/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
