/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#1D6859",
      "secondary": "#F9D264",
      "ternary": "#D9D9D9",
      "mainfont": "#1E1E1E",
      "backgbround": "#ffffff",
    },
    extend: {
      spacing: {
        "100" : "38rem"
      },

      backgroundImage: {
        "banner-image": "url('/assets/banner-image.png')",
      },

      boxShadow: {
        "card": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }
    },
  },
  plugins: [],
}

