/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
    ".src/components/*.{js,ts,jsx,tsx}",
    ".src/pages/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A1018',
        'blue': '#1A212B',
        'light-blue': '#161c23',
        'lighter-blue': '#1A1F26',
        'rich-blue': '#4848F6',
        'light-orange': '#E2C19D',
        'orange': '#E19A4C',
        'medium-orange': '#785B3C',
        'dark-orange': '#C78D4E',
        'lightest-orange': '#F5CEA3',
        'dark-grey': '#13161A',
        'grey': '#616161',
        'light-grey': '#D1D0D0',
        'lightest-grey': '#e7e7e7',
        'purple': '#8484F1',
        'dark-purple': '#4a4a75',
        'slate': '#403D3A'
        
      }
    },
  },
  plugins: [],
}

