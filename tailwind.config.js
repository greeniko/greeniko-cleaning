/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greeniko': {
          'cream': '#F5F1E8',        // Warm cream background
          'forest': '#2D5016',        // Deep forest green
          'sage': '#6B8E4E',          // Sage green
          'beige': '#E8DCC8',         // Soft beige
          'charcoal': '#3A3A3A',      // Charcoal text
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
