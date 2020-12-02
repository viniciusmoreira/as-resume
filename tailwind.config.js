module.exports = {
  purge: {
    preserveHtmlElements: true,
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: ['html', 'body']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#F05E7B'
      }
    },
    fontFamily: {
      sans: ['"Titillium Web"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
