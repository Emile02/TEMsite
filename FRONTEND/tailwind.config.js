module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'tem-yellow': '#bc9b5d',
        'tem-yellow-hover': '#a88a4a',
      },
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        '3xl': '1.953rem',
      }
    }
  }
}
