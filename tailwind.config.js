/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f39c12",
        secondary: "#444",
      },
      fontSize: {
        sm: "14px",
        base: "18px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "50px",
      },
      container: {
        DEFAULT: "576px",
        sm: "576",
        md: "768",
        lg: "992",
        xl: "1200",
        "2xl": "1400",
      },
    },
  },
  plugins: [],
};
