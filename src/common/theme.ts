import { borderWidth } from "styled-system";

// Theme UI spec: https://theme-ui.com/customize

const DEFAULT_FONTS =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";

export const theme = {
  fonts: {
    body: `'Rubik', ${DEFAULT_FONTS}`,
    heading: `'Rubik', ${DEFAULT_FONTS}`,
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    light: 300,
    regular: 400,
    semi: 500,
    bold: 700,
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  colors: {
    primary: "#f3f9ff",
    background: "#2c7ef8",
    secondary: "#3b4660",
    backgroundSecondary: "#f3f9ff",
    grey: "#54565a",
    correct: "#0e8729",
    incorrect: "#bf0000",
  },
  buttons: {
    default: {
      backgroundColor: "primary",
      color: "background",
      borderRadius: 9001,
      fontFamily: "body",
      fontWeight: "bold",
    },
    answer: {
      backgroundColor: "transparent",
      color: "primary",
      margin: "auto",
      padding: 2,
      height: 32,
      width: 32,
      borderRadius: "50%",
      borderColor: "primary",
      border: "solid",
      borderWidth: 2,
    },
  },
};
