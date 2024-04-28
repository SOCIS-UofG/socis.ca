const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#1f1f1f",
          },
        },
      },
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981",
        },
        secondary: {
          DEFAULT: "#1f1f1f",
        },
      },
      screens: {
        xs: "375px",
      },
    },
  },
};
