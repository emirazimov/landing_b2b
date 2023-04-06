/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ['0.875rem', '1rem'],
      base: ['1.125rem'],
      lg: ['1.438rem'],
      xl: ['1.875rem'],
      '2xl': ['3rem'],
    }
  },
  plugins: [],
}