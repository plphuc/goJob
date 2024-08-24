/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
              },
        },
        extend: {
            colors: {
                backgroundColor: '#05151d',
                cardColor: '#1a2730',
                textColor: '#c1cbd0',
                descriptionColor: '#a1a6a9',
                btnColor: '#28353e',
                textLinkColor: '#71b7fb',
                btnLinkColor: '#6eb8ff',
            },
        },
    },
    plugins: [require('daisyui')],
}
