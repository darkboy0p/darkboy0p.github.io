/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#070707',
        'background-secondary': '#0D0D0F',
        card: '#111114',
        'card-hover': '#16161A',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        border: 'rgba(255,255,255,0.08)',
        accent: '#8B5CF6',
        'accent-secondary': '#6366F1',
      },
    },
  },
  plugins: [],
}
