import localFont from "next/font/local";

export const body = localFont({
  variable: "--font-body",
  src: [
    {
      path: "../../../../packages/assets/src/fonts/body/black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});
