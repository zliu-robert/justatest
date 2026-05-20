/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'inox-green': '#8ac53f',
        'inox-dark': '#000000',
        'inox-sidebar': '#5a5a5a',
        'inox-sidebar-hover': '#8ac53f',
        'inox-bg': '#f5f5f5',
        'inox-card': '#ffffff',
        'inox-card-header': '#f3fae8',
      }
    },
  },
  plugins: [],
}
