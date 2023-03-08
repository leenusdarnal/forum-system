/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonPurple: '#997FAF',
        navbarPurple: '#624384',
        navbarButton: '#EB993C',
        superWhite: 'fcfcfc',
        IconsColor: '#434242',
      },
    },
  },
  plugins: [],
}
