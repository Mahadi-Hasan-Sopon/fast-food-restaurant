/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#EEEFF0",
        primaryOrange: "#F99F1C",
        secondaryOrange: "#FD6011",
        buttonIconOrange: "#FC6011",
      },
      fontFamily: {
        ubuntu: "Ubuntu",
        poppins: ["Poppins", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
