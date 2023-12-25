/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '24px',
        xl: '40px',
        '2xl': '80px',
      },
    },
    extend: {
      colors: {
        lightBlue: '#3498DB',
        darkBlue: '#24478F',
        red: '#E74C3C',
        green: '#2ECC71',
        lightGray: '#EDEDED',
        textColor: '#333333',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
