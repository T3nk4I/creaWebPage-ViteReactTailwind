/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: {
        light: "#E43452",
        DEFAULT: "#A3263A",
        dark: "#631724",
      },

      base: {
        light: "#CCCCCC",
        DEFAULT: "#474747",
        dark: "#B0B0B0",
      },
    },
    extend: {},
  },
  plugins: [],
};
