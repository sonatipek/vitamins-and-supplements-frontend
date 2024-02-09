/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        brand: "#EF4444",
        darkBrand: "#991B1B",
        darkest: "#18181B",
        dark: "#3B3B43",
        mid: "#858594",
        light: "#D4D4D8",
        lightest: "#fff",
      },
    },
  },
  plugins: [],
};
