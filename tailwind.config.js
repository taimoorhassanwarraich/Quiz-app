module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          200: '#FF0000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
