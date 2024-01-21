/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
         colors: {
         'champagne': '#D4D4CC',
         'medium': '#DCDCD6',
         'light': '#EBEBE2',
         'grey': '#3F3F3C',
         'grey_dark_dark': '#232323',
         'black': '#000000',
         'white': '#FFFFFF',
         'orange': '#FF7223',
         'purple': '#CF80FF',
         'yellow_dark': '#CD3A62',
      },
       fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
   },
   screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1800px',
   },
   animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                 
    },
  },
  plugins: [],
}