module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      hand: ["Sriracha", "Comic Sans MS", "Helvetica"],
      roboto: ["Roboto", "Andale Mono"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
