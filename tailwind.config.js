const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { blue: "#172153", white: "#ffffff", orange: "#dc5e3c" },
        pinkish: "#FFF0E9",
      },
      fontFamily: {
        sansationB: [
          "SansationB",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        sansationR: [
          "SansationR",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],

        ptSerifR: ["PTSerifR", ...defaultTheme.fontFamily.serif],
        ptSerifCapR: ["PTSerifCapR", ...defaultTheme.fontFamily.serif],
        ptSerifBK: ["PTSerifBK", ...defaultTheme.fontFamily.serif],

        mons: ["Montserrat", ...defaultTheme.fontFamily.sans],

        futuraBk: ["FuturaBk", ...defaultTheme.fontFamily.serif],
        futuraL: ["FuturaL", ...defaultTheme.fontFamily.serif],
        futuraMd: ["FuturaMd", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("daisyui")],
};
