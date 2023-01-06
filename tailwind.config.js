/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
        '2xl': {'max': '1223px'},
      // => @media (max-width: 1223px) { ... }
      
        'xl': {'max': '1123px'},
      // => @media (max-width: 1123px) { ... }

        'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      's': {'max': '420px'},
      // => @media (max-width: 420px) { ... }
    }
  },
  plugins: [],
}
