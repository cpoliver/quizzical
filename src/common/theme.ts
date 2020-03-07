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
  fontWeights: {},
  colors: {
    primary: "#F3F9FF",
    background: "#2C7EF8",
    secondary: "#3B4660",
    backgroundSecondary: "#F3F9FF",
    grey: "#54565A",
    correct: "#0E8729",
    incorrect: "#BF0000",
  },
};
