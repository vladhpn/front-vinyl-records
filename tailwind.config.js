/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {
      colors: {
        lightBlue: '#3498DB',
        darkBlue: '#24478F',
        red: '#E74C3C',
        green: '#2ECC71',
        lightGray: '#EDEDED',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
