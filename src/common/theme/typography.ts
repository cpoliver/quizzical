const DEFAULT_FONTS =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";

const fonts = {
  body: `'Rubik', ${DEFAULT_FONTS}`,
  heading: `'Rubik', ${DEFAULT_FONTS}`,
  monospace: "Menlo, monospace",
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];

const fontWeights = {
  body: 400,
  heading: 500,
  light: 300,
  regular: 400,
  semi: 500,
  bold: 700,
};

export const typography = {
  fonts,
  fontSizes,
  fontWeights,
};
