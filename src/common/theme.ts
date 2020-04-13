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
    maxHeight: "100vh",
  },
  header: {
    alignSelf: "stretch",
    px: 4,
    py: 5,
  },
  content: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    p: 3,
  },
  footer: {
    alignSelf: "center",
    width: "90%",
    p: 6,
  },
  appName: {
    textShadow: "default",
    color: "primary",
    fontSize: 5,
    fontWeight: "bold",
    mb: -2,
    textAlign: "center",
  },
  buttons: {
    primary: {
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: 3,
      backgroundColor: "primary",
      borderRadius: 9001,
      boxShadow: "default",
      color: "background",
      cursor: "pointer",
      fontFamily: "body",
      fontSize: 3,
      fontWeight: "semi",
      transition: "background-color .4s, color .2s",
      width: "100%",
      "&:hover": {
        backgroundColor: "background",
        color: "primary",
      },
    },
    questionCount: {
      cursor: "pointer",
      backgroundColor: "background",
      position: "relative",
      zIndex: 1,
    },
    transparent: {
      backgroundColor: "transparent",
      cursor: "pointer",
      m: 0,
      p: 0,
    },
  },
};

export const colors = {
  primary: "#f3f9ff",
  background: "#2c7ef8",
  secondary: "#3b4660",
  faded: "#92bbf8",
  grey: "#54565a",
  correct: "#0e8729",
  incorrect: "#bf0000",
};

export const theme = {
  breakpoints: ["40em", "52em", "64em", "70em"],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  colors,
  shadows: {
    default: "0px 1px 1px rgba(0,0,0,0.2)",
    hover: "inset 0px 20px 20px rgba(0,0,0,0.1)",
  },
  ...typography,
  ...variants,
};
