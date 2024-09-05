/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-color':'#20191A'
      },
      fontFamily:{
        suse: ['SUSE', 'sans-serif'],
      }
    },
  },
  plugins: [],
}