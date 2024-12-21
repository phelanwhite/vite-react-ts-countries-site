/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "home-font-size": "var(--home-font-size)",
        "single-font-size": "var(--single-font-size)",
      },
    },
  },
  important: true,
  plugins: [],
};
