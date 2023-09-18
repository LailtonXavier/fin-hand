/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'WorkSans_600SemiBold',
        body: 'WorkSans_400Regular',
        alt: 'WorkSans_500Medium',
      },
      spacing: {
        photoSize: '50px',
      },
      colors: {
        gree: {
          50: '#3BADBC',
        },
        greenText: '#3E767E',
        grayTitle: '#D8D9DA',
        whiteText: '#FBFFF7',
        greenMed: '#00BF63',
        darkLight: '#23383B',
        redMed: '#A82C2C',
        greenItemCard: 'rgba(59, 173, 188, 0.06)',
      },
    },
  },
  plugins: [],
}
