/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      colors:{
        primary: {
          light: '#774DC5',
          main: '#6324C6',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#fff',
          dark: '#f44336',
          contrastText: '#6324C6'
        },
      }
    },
  },
  plugins: [],
};
