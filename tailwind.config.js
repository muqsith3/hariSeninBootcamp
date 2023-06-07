/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        hero: "url(./public/images/hero.jpeg)",
      },
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        darkLighter: "#64748b",
        instagram: "#3f729b",
        blue: "#2563eb",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
