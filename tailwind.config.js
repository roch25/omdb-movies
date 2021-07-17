module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: "#faf4e3",
        secondary: "#6a3a94",
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
