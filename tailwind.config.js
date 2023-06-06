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
      colors: {
        'black': '#212B36',
        'silver': '#919EAB',
        'orange41c': '#FA541C',
        'descrColor': '#637381',
        'blue': '#22B8CF',
      },
      fontSize: {
        '64px': '64px',
        '16px': '16px',
        '18px': '18px',
        '36px': '36px',
        '40px': '40px',
        '24px': '24px',
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold':700
      },
      backgroundColor:{
        'blackc24': '#161C24',
        'orange41c': '#FA541C'
      },
      boxShadow: {
        'playShadow': '0px 8px 16px rgba(34, 184, 207, 0.24)',
        'sliderShadow': '-16px 16px 56px -8px rgba(145, 158, 171, 0.16)',
        'category': '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)',
        'list': '-16px 16px 56px -8px rgba(145, 158, 171, 0.16)'
      }
    },
  },
  plugins: [],
  darkMode: 'class',

  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
}

