/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          backgroundColor: '#05151d',
          cardColor: '#1a2730',
          textColor: '#c1cbd0'
        }
      },
    },
    plugins: [require('daisyui')],
  }