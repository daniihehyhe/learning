/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway']
      },
    },
  },
  plugins: [],
}

