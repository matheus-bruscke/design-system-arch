import { borderRadius, color, fontSizes, typography } from "@repo/design";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/react/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: fontSizes,
      colors: color,
      typography,
      borderRadius,
    },
  },
};