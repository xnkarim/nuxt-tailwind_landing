const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  mode: 'jit',
  //   purge: {
  //     enabled: process.env.NODE_ENV === 'production',

  // },
  // content: [
  //   "./components/**/*.{js,vue,ts}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./nuxt.config.{js,ts}",
  // ],
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        stolzl: "'Stolzl'"
      },
      colors: {
        'black-main': '#101010',
        'black-btn': '#222',
        'black-secondary': '#424242',
        'blue-main': '#1F83F8',
        'blue-dark': '#2484F3',
        'gray-main': '#878787',
        'gray-light': '#e5e5e5'
      },
      dropShadow: {
        'lg': '0px 10px 30px rgba(0, 0, 0, 0.15)'
      },
      lineHeight: {
        'main': '1.125rem'
      },
      fontSize: {
        'xs': ['0.75rem', '1.125rem'],
        'sm': ['13px', '1.125rem'],
        'base': ['15px', '1.125rem'],
        'base-none': ['15px', '15px'],
        'lg': ['1.125rem', '1.5rem'],
        '4xl': ['2rem', '37px'],
      },
      gridTemplateColumns: {
        'gc-[96px_282px_1fr]': '96px 282px 1fr',
        'grid-cols-[60px_1fr]': '60px 1fr',
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
    screens: {
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px'
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
  },
}