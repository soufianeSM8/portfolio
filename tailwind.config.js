/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_bg_color: "#212435",
        secondary_bg_color: "#181a26",
        CustomBlue: "#39afc9",
        CustomGray: "#7f848b",
        inActiveGray: "#7e8389",
      },
      backgroundImage: {
        patternBg:
          "  linear-gradient(1deg, #212435de 20%, transparent),url(/src/assets/images/strock.png) ",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
    screens: {
      'phone': "320px",
      'phone2x': "425px",
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',




    }
  },
  plugins: [],
  darkMode: "class",
};

