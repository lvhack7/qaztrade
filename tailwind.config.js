/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004E60",
        button: '#003B53',
        brownDarker: "#776A6A",
        dark: "#242424",
        lightGray: '#F4F4F4',
        lighterGray: '#9E9E9E',
        lightYellow: '#FFDA7A',
        lightBlue: '#DBEBFF'
      }
    },
  },
  plugins: [],
}

