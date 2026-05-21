/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1220', // deep navy
        surface: '#111A2E', // slightly lighter dark surface for cards
        surfaceHover: '#1A243A', // hover state for surface
        primary: '#2563EB', // Royal Blue
        primaryHover: '#3B82F6', // lighter blue
        accent: '#60A5FA', // even lighter highlight
        'text-main': '#FFFFFF', // white
        'text-muted': '#9CA3AF', // soft gray (gray-400)
        'border-main': '#1E293B', // dark border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

