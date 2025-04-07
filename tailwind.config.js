module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        abrilFatface: ["Abril Fatface", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "color-main": "#6429EF",
        "color-second": "#E7DBDB",
        "dark-blue": "#372461",
        "darkmode-color-second": "#555",
      },
      boxShadow: {
        main: "0 0 20px 5px rgb(101, 41, 240, 0.5)",
        second: "0 0 20px 5px rgb(232, 219, 219)",
        darkModeSecond: "0 0 20px 5px rgb(232, 219, 219, 0.3)",
      },
    },
  },
  plugins: [],
};
