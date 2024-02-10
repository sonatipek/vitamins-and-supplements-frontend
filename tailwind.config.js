/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.75rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "4rem",
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
