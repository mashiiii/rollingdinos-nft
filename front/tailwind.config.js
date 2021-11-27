module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bangers: ["Bangers", "Sans"],
      spaceMono: ["Space Mono", "monospace"],
      roboto: ["Roboto", "Halvetica", "Arial"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
