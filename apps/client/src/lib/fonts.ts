import localFont from "next/font/local";

export const body = localFont({
  variable: "--font-body",
  src: [
    {
      path: "../../../../packages/assets/src/fonts/body/ultralight.otf",
      weight: "50",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/ultralight-italic.otf",
      weight: "50",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/thin-italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/light-italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/roman.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/medium-italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/bold-italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/heavy-italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/src/fonts/body/black-italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});
