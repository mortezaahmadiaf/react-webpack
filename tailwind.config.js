const plugin = require("tailwindcss/plugin");
const colors = require("./src/styles/colors");
module.exports = {
  content: [
    "./public/index.html",
    "./src/services/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    // Add more here
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: colors,
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },

      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, addComponents, e, prefix, config }) => {
      // Add your custom styles here
    }),
  ],
};
