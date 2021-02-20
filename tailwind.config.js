module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E3E3E3',
          300: '#D4D4D4',
          400: '#C4C4C4',
          500: '#B5B5B5',
          600: '#969696',
          700: '#6B6B6B',
          800: '#3D3D3D',
          900: '#222222',
          default: '#B5B5B5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
