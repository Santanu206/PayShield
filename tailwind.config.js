/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#080d18', panel: '#0e1625', line: '#1d2a3d', muted: '#8996aa' }, fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] } } },
  plugins: [],
}
