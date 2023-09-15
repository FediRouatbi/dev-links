/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          800: "#7950f2",
          200: "#b197fc",
        },
      },
    },
  },
  plugins: [],
};
