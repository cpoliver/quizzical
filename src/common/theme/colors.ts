import * as hex2rgb from "hex2rgb";

const background = "#2c7ef8";
const backgroundRgb = hex2rgb(background);
const fade = `linear-gradient(0deg, ${backgroundRgb} 0%, ${backgroundRgb} 100%)`;

export const colors = {
  background,
  fade,
  primary: "#f3f9ff",
  secondary: "#3b4660",
  faded: "#92bbf8",
  grey: "#54565a",
  correct: "#0e8729",
  incorrect: "#bf0000",
};
