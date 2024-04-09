/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
        lato: "'Lato', sans-serif",
      },
      colors: {
        primaryColor: '#6B3CC9',
        secondaryColor: '#F28D35',
        analogousColor1: '#6A44F2',
        analogousColor2: '#1CBDDD',
        triadicColor1: '#52378C',
        darkColor: '#78BF91#4DCA79',
        textColor: '#2F2F2F',
        textColorLight: '#545A75',
        textColorSubtle: '#9C9991',
        accentColor1: '#E2F2FE',
        accentColor2: '#FFF8E0',
        errorColor: '#FF0335',
        successColor: '#5EB30B',
        color: '#FAF8FF',
        textColor2: '#6F6C90'
      },
    },
    plugins: [],
  },
}
