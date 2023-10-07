/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  darkMode: 'class',
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      colors: {
        valko: '#F5F5F5',
        musta: '#272635',
        viher: '#19C819',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


