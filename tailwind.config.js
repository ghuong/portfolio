module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
      boxShadow: {
        main: "0 0 20px 5px rgb(101, 41, 240, 0.5)",
        second: "0 0 20px 5px rgb(232, 219, 219)",
      },
    },
  },
  plugins: [],
};
