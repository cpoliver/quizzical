// Theme UI spec: https://theme-ui.com/customize

const DEFAULT_FONTS =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";

const typography = {
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
};

const variants = {
  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: "rgba(0,0,0,0.25)",
    p: 3,
  },
  content: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    p: 3,
  },
  footer: {
    alignSelf: "stretch",
    backgroundColor: "rgba(0,0,0,0.25)",
    p: 3,
  },
  buttons: {
    default: {
      backgroundColor: "primary",
      color: "background",
      borderRadius: 9001,
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "semi",
    },
    answer: {
      backgroundColor: "transparent",
    },
  },
};

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64],

  colors: {
    primary: "#f3f9ff",
    background: "#2c7ef8",
    secondary: "#3b4660",
    faded: "#92bbf8",
    backgroundSecondary: "#f3f9ff",
    grey: "#54565a",
    correct: "#0e8729",
    incorrect: "#bf0000",
  },

  ...typography,
  ...variants,
};
