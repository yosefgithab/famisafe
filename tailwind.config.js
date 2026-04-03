
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6E4DD8',/* purple primary  like “Try It Free”, highlighted sections*/
        secondary: '#7B5BE0',
        /* ACCENTS */
        accent: '#FFC107',/* yellow accent like secondary buttons, badges, important alerts.*/
        success: '#34D399', /* green accent */
        alert: '#F87171',   /* red alert */

        /* NEUTRALS */
        bg: '#FFFFFF',
        Gray: '#1F1F1F',
        muted: '#6B7280',
      },
      Container: {
        center: true,
        padding: {
          DEFAULT: '1rem', 
          sm: '3rem', 
          lg: '4rem', 
           },
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Replace 'Inter' with your font
      },
    },
  },
  plugins: [],
};

