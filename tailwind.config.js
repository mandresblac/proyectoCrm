/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "gris-claro": "#F4F4F6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
