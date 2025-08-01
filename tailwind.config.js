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
        brand: {
          red: '#c4161c',
          gold: '#ffc20f',
        }
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      }
    },
  },
  plugins: [],
}