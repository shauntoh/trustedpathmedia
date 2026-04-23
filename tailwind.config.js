/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a14',
          900: '#080f1e',
          850: '#0b1422',
          800: '#0e1c30',
          750: '#121f35',
          700: '#162440',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
