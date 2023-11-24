/** @type {import('tailwindcss').Config} */
import palette from "./src/utils/palette";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: palette,
    },
  },
  plugins: [],
};
