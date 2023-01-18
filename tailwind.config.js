/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
      colors: {
        'negro': {
          100: '#1F252A',
          200: '#202020',
        },
        'verde': '#1C984D',
        'azul': '#21648A',
        'gris': {
          100: '#EAEAEA',
          200: '#708AA0',
          300: '#4C5C69',
          400: '#35404B',
        },
    }
  },
  plugins: [],
}
