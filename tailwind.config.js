/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      mainBg: '#000000',
      mainFont: '#ffffff',
      selectedText: '#000000',
      selectedTextBg: '#ffffff',
      link: '#0CA0EA',
      command: '#768BA6',
      username: '#BCC838',
      commandLineTilde: '#0CA0EA',
    },
    padding: {
      containerLg: '20px',
      containerSm: '12px',
    },
    keyframes: {
      blinkCaret: {
        '50%': { opacity: '0' },
      },
    },
    extend: {
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
};
