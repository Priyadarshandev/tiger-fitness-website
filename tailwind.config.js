/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        dark: "#0a0a0a",
        charcoal: "#1a1a1a",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
