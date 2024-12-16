/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nerko: ["Nerko One", "cursive"],
        protest: ["Protest Guerrilla", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#77632E",
          200: "#332A12",
        },
        border: "#E2E2D5",
      },
    },
  },
  plugins: [],
};
