/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E',      // Color primario
        secondary: '#E8EAF6',    // Color secundario
        accent: '#DE1C7D',       // Color de acento
        info: '#4caf50',       // Color de informacion
        error: '#e3342f',        // Color de error
        warning: '#f6993f',      // Color de advertencia
        success: '#8BC34A',      // Color de éxito
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}