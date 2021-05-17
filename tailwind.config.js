module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: { xxl: '0 35px 60px -15px rgba(0, 0, 0, 0.3)' },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
