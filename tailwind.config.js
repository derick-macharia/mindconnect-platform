/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#408F87',           // Teal
        'teal-dark': '#143f36ff',    // Even darker for hover states
        accent: '#F9A826',
        'nugget-yellow': '#F9A826',
        foreground: '#1F2937',
        'muted-foreground': '#6B7280',
        secondary: '#F3F4F6',
        background: '#F9FAFB',
      },

      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};