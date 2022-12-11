/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './node_modules/tw-elements/dist/js/**/*.js', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FF6347',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'splash-photo-1': "url('./src/assets/splashPhoto-1.jpg')"
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
