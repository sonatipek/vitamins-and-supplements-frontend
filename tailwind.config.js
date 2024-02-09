/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
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
