/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    'node_modules/preline/dist/*.js',
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

