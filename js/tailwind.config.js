/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#172554',
        primary: '#2563EB',
        background: '#F8FAFC',
        textDark: '#0F172A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(37,99,235,0.08)',
        'card-hover': '0 8px 32px 0 rgba(37,99,235,0.16)',
      },
    },
  },
  plugins: [],
}
