const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: ["#5C66CE"],
        themeSecondry: ["#272A5C"],
        themeYellow: ["#DAFF17"],
      },
    },
  },
  plugins: [nextui()],
};
