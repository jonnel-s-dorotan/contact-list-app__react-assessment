/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fmPrimaryDesaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        fmNeutralLightGrayishCyanBG: 'hsl(180, 52%, 96%)',
        fmNeutralLightGrayishCyanFilter: 'hsl(180, 31%, 95%)',
        fmNeutralDarkGrayishCyan: 'hsl(180, 8%, 52%)',
        fmNeutralVeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        chPeach: 'rgb(252, 186, 186)',
        chYellow: 'rgb(251, 242, 207)',
        chGreen: 'rgb(198, 235, 197)',
        chSage: 'rgb(161, 194, 152)'
      }
    },
  },
  plugins: [],
}



