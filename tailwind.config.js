module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-dray': '#969ea7',
      'theme-color': '#6e62e5',
      'light-white': '#edeef7',
      'green': '#10d48d'
    },
    extend: {
      zIndex: {
        'n1': '-1',
      },
    },
    fontFamily: {
      'roboto': [ 'Roboto'],
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  mode: 'jit',
}
