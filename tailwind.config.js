module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'dark': {
          '50': '#eaa647',
          '100': '#b38a58',
          '200': '#0d1f22',
          '300': '#6f732f',
          '400': '#0d1f22',
          '500': '#3c5233',
          '600': '#0d1f22',
          '700': '#264027',
          '800': '#0d1f22',
          '900': '#0d1f22'
        }
      },
      keyframes: {
        moveL1: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveL2: {
          '0%': { transform: 'translateX(200%) scale(-1, 1)' },
          '100%': { transform: 'translateX(0%) scale(-1, 1)' },
        },
        moveR1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveR2: {
          '0%': { transform: 'translateX(0%) scale(-1, 1)' },
          '100%': { transform: 'translateX(200%) scale(-1, 1)' },
        },
      },
      animation: {
        movingL50_1: 'moveL1 50s linear infinite',
        movingL50_2: 'moveL2 50s linear infinite',
        movingL70_1: 'moveL1 70s linear infinite',
        movingL70_2: 'moveL2 70s linear infinite',
        movingR50_1: 'moveR1 50s linear infinite',
        movingR50_2: 'moveR2 50s linear infinite',
        movingR70_1: 'moveR1 70s linear infinite',
        movingR70_2: 'moveR2 70s linear infinite',
      },
    }
  },
  plugins: [],
}
