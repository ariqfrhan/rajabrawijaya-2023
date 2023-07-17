/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4178",
        secondary: "#329D9C",
        support: "#F7F7F7",
        accent: "#C6A477",
        blue: "#2F80ED",
        green: "#14B823",
        grey: "#3E4A4A",
        yellow: "F4C517",
        orange: "#FE6722",
        red: "#DB2323",
        white: "#FCFCFC",
        trans: "#ffffff00",
        grey: "#333333",
      },
      fontFamily: {
        estethique: ["esthetique", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        greenPatern: 'url("/assets/images/greenpatern.png")',
      },
    },
  },
  plugins: [],
};
