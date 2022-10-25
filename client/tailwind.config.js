module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        archivo: ["archivo", "sans-serif"],
        garamond: ["garamond", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        prata: ['Prata', 'serif']
        
      },
      color: {
        'primary' : '#a04e1f'
      }
    },
  },
  plugins: [],
}