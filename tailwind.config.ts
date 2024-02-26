import type { Config } from "tailwindcss";
// import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#1f1f1f",
      },
    },
  },
  plugins: [],
} satisfies Config;
