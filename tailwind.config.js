// tailwind.config.js
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e1028',
        accent: '#dd53df',
        secondary: '#ff6347',
        customBlue: '#4a90e2',
        customGreen: '#28a745',
        cashless: '#fdfaf6',
        header: '#fafafa',
        experience: '#a865d2',
      },
      fontFamily: {
        sans: ['__Poppins_2dbf9b', '__Poppins_Fallback_2dbf9b', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
