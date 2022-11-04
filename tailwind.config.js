/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#F5F5F5",
      grayDark: "#989898",
      aqua: "#C1F6ED",
      aquaDark: "#02353C",
      green: "#449342",
      greenLight: "#2EAF7D",
      oceanBlue: "#3FD0C9"
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        'heroWaves': "url('/src/assets/images/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}
