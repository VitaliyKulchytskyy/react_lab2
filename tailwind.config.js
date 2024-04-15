/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3f4f6',
        secondary: '#808080',
        hoverGray: '#e6e6e6',
        label: '#8e5b5b',
        empty: '#000',
        incorrect: '#b30953',
        corner: '#ccc',
        button_hover: '#3c4043',
        label: '#757575',
        borderline: '#767676',
        lightRed: '#e85e5b',
        hoverRed: '#fb7175',
        disabled: '#fdb9bb'
      }
    },
  },
  plugins: [],
}

