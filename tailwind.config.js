/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'machina': ['"Neue Machina"', 'sans-serif'],
        'jost': ['"Jost"', 'sans-serif'],
        'Lovelyn': ['"Lovelyn"', 'sans-serif'],
        'Google': ['"Product Sans"', 'sans-serif'],
      },
      colors: {
        // Add your custom colors here
        'primary': '#d9ff06',      // Example color
        'secondary': '#14171a',    // Another example color
        'accent': '#ffad1f',       // Another example color
        'background': '#f5f8fa',   // Another example color
        'text': '#657786',         // Another example color
        'textColor' : "#1a1a1a",
      },
    },
  },
  plugins: [],
}
