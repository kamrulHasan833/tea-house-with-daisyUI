/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: "#F00",
          primary2: "#FF8938 ",
          "title-color": "#1C1C1C",
          "desc-color": "#777",
          "desc-color2": "#F4F4F4",
        },
        fontFamily: {
          manrope: ["Manrope", "sans-serif"],
        },
        maxWidth: {
          standard: "1140px",
          secondary: "1250px",
        },
      },
    },
    plugins: [],
  }