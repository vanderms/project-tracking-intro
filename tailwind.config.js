/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5E5E",
        stress: "#242942",
        text: "#242942BF",
        shade: "#EDF2F6",
      },
      fontSize: {
        mhxl: [ '2.5rem', '1' ],
        lhxl: [ '4rem', '1' ],
        mtxl: [ '1,125rem', '1.44' ],
      },
      spacing: {
        container: "0.5rem",
        smcontainer: "8.5333333%",
        lgcontainer: "calc(50% - 34.6875rem)"
      },
      screens: {
        sm: "23rem",
        md: "42.5rem",
        lg: "74rem"
      }
    },
  },
  plugins: [],
}
