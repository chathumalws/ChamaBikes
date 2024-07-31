/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange" : "#FF3300",
        "black": "#0D0300",
        "secondary": "#0D0300",
        "primaryBG" : "#0D0300"

      }
      
    },
  },
  plugins: [require("daisyui")],
}

