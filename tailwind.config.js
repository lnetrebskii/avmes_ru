/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './**/*.{html,md,markdown,liquid}',
    './assets/js/**/*.{js,ts}',
    '!./node_modules/**',
    '!./_site/**'
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway'],
      'mulish': ["Mulish"]
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


