const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/styles/**/*.scss",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      gelica: ['gelica', 'sans-serif'],
      degular: ['degular', 'sans-serif'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#020F11',
      "corn-flower": "#7971F5",
      turmeric: "#CBD14F",
      mindaro: "#D9F777",
      "jagged-ice": "#C7E9E6",
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '1920px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'title-xxl': ['44px', '55px'],
        'title-xl': ['36px', '45px'],
        'title-xl2': ['33px', '45px'],
        'title-lg': ['28px', '35px'],
        'title-md': ['24px', '30px'],
        'title-md2': ['26px', '30px'],
        'title-sm': ['20px', '26px'],
        'title-xsm': ['18px', '24px'],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
      },
      maxWidth: {
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
      },
      maxHeight: {
        35: '8.75rem',
        70: '17.5rem',
        90: '22.5rem',
        550: '34.375rem',
        300: '18.75rem',
      },
      minWidth: {
        22.5: '5.625rem',
        42.5: '10.625rem',
        47.5: '11.875rem',
        75: '18.75rem',
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1',
      },
      opacity: {
        65: '.65',
      },
      backgroundImage: {
        'formations-mobile' : "url('/src/images/formations-mobile-bg.svg')",
        'formations-academy-mobile' : "url('/src/images/formations-mobile-bg-academy.svg')",
        'dates' : "url('/src/images/forme-dates-prochaines-formations.png')",
        'programme' : "url('/src/images/forme-programme-mesure.svg')",
        'services' : "url('/src/images/forme-service-accompagnement.png')",
        'interrogations' : "url('/src/images/forme-interrogations.svg')",
        'interrogations-blue' : "url('/src/images/forme-interrogations-blue.svg')",
      },
      content: {},
      transitionProperty: { width: 'width', stroke: 'stroke' },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',

      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
      },
      keyframes: {
        linspin: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        linspin: 'linspin 1568.2353ms linear infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}
