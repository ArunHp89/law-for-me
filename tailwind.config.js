/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        13: "0.813rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        21: "1.313rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
      },

      colors: {
        "law-green": {
          100: "#509e2f85",
          200: "#509e2f85",
          300: "#509e2f85",
          400: "#509e2fa6",
          500: "#509e2fa6",
          600: "#509e2fa6",
          700: "#509E2F",
          800: "#509E2F",
          900: "#509E2F",
        },
        "law-gray": {
          100: "#F5F5F5;",
          200: "#f68d1f",
          300: "#f68d1f",
          400: "#e98012",
          500: "#e98012",
          600: "#e98012",
          700: "#CB741A",
          800: "#CB741A",
          900: "#CB741A",
        },
        "law-blue": {
          100: "rgba(87, 152, 192, 0.1)",
          200: "#E4F5FF",
          300: "#ffff",
          400: "#E4F5FF",
          500: "#E4F5FF",
          600: "#2D2347",
          700: "#1FAAFF",
          800: "#1FAAFF",
          900: "#1FAAFF",
        },
        "law-pink": {
          100: "#FF17B3",
          200: "#FF17B3",
          300: "#FF17B3",
          400: "#FF17B3",
          500: "#FF17B3",
          600: "#FF17B3",
          700: "#FF17B3",
          800: "#FF17B3",
          900: "#FF17B3",
        },
        "law-black": {
          100: "#949496",
          200: "#949496",
          300: "#949496",
          400: "#2D2347",
          500: "#1B1B1B",
          600: "#2D2347",
          700: "#23242A",
          800: "#23242A",
          900: "#23242A",
        },
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
