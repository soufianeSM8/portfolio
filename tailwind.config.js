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
          " linear-gradient(90deg, rgb(255 255 255 / 0) 0 ,rgb(33 36 53 / 80%)), url(/src/assets/images/strock.png)  ",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

