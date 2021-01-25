module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["hover", "last"],
    },
  },
  plugins: [],
};
