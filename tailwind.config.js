/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        primary: "#CE2829",
        yellow: "#FDC913",
        dark: "#292929",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        quattro: ["Quattrocento", "serif"],
        londrina: ["Londrina Solid", "cursive"],
      },
    },
    
  },
  plugins: [],
}

