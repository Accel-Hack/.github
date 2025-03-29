/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        white: 'var(--white)',
      },
      height: {
        header: 'var(--header-height)',
        footer: 'var(--footer-height)',
      },
      borderColor: {
        border: 'var(--gray)',
      },
    },
  },
  plugins: [],
};
