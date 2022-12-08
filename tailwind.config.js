module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px'
    },
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
      backgroundImage: {
        'nodejs': "url('/src/assets/logos/nodejs.png')",
        'docker': "url('/src/assets/logos/docker.png')",
        'mysql': "url('/src/assets/logos/mysql.png')",
        'mqtt': "url('/src/assets/logos/mqtt.png')",
        'python': "url('/src/assets/logos/python.png')",
        'vue': "url('/src/assets/logos/vue.png')",
        'tailwind': "url('/src/assets/logos/tailwind.png')",
        'java': "url('/src/assets/logos/java.png')",
        'kotlin': "url('/src/assets/logos/kotlin.png')",
        'spring': "url('/src/assets/logos/spring.png')",
        'arduino': "url('/src/assets/logos/arduino.png')",
        'express': "url('/src/assets/logos/express.png')",

      }
    }
  },
  plugins: [],
}
