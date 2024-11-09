module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Existing gray colors
        gray: {
          light: '#f7f7f7',
          DEFAULT: '#d3d3d3',
          dark: '#a9a9a9',
        },
        // New primary and secondary colors for branding consistency
        primary: '#1E3A8A', // Deep blue for primary elements
        secondary: '#4B5563', // Dark gray for secondary elements
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        sans: ['Inter', 'sans-serif'], // Adding a sans-serif option for body text
      },
      backgroundImage: {
        'marble-texture': "url('../public/images/marble-texture.jpg')", // Updated path for Tailwind to work correctly
        'dark-marble-texture': "url('../public/images/dark-marble-texture.jpg')",
      },
      spacing: {
        // Custom spacing for padding and margin options
        18: '4.5rem',
        22: '5.5rem',
      },
      fontSize: {
        // Custom font sizes for a more cohesive design
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '1'],
      },
      boxShadow: {
        // Enhanced shadow options for cards and modals
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
