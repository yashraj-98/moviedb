/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#190482",
        primary: "#8E8FFA",
        input: "#C2D9FF",
      },
      fontFamily: {
        rye: ["Rye", "serif"],
      },
    },
  },
  plugins: [],
};
