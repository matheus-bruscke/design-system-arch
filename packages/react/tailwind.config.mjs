import { borderRadius, color, fontSizes, typography } from "@repo/design";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      fontSize: fontSizes,
      typography,
      borderRadius,
    },
  },
};