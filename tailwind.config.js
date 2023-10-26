/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#072AC8',
        secondary: '#1E96FC',
      },
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
