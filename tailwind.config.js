module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#f7f7f7',
          DEFAULT: '#d3d3d3',
          dark: '#a9a9a9',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
      },
      backgroundImage: {
        'marble-texture': "url('../public/images/marble-texture.jpg')",
        'dark-marble-texture': "url('../public/images/dark-marble-texture.jpg')",
      },
    },
  },
  plugins: [],
}
