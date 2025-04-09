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
        "navbar-color": "rgba(250, 250, 249, 0.99)",
        "darkmode-color-second": "#555",
        "darkmode-background-color": "#222",
        "darkmode-navbar-color": "rgba(26, 26, 26, 0.99)",
        "darkmode-menu-color": "rgba(26, 26, 26, 0.8)",
      },
      boxShadow: {
        main: "0 0 20px 5px rgb(101, 41, 240, 0.5)",
        second: "0 0 20px 5px rgb(232, 219, 219)",
        darkModeSecond: "0 0 20px 5px rgb(232, 219, 219, 0.3)",
      },
      keyframes: {
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(-50px)" }, // Adjust translateX as needed
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(var(--icon-count))" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-right": "fade-right 2s forwards",
        "fade-down": "fade-down 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
