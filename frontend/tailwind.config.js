const withCSS = require("@zeit/next-css");
module.exports = withCSS();
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp')],
}
