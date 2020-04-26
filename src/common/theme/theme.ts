import { colors } from "./colors";
import { typography } from "./typography";
import { variants } from "./variants";

const breakpoints = ["40em", "52em", "64em"];

const space = [0, 4, 8, 12, 16, 24, 32, 48, 64];

const shadows = {
  default: "0px 1px 1px rgba(0,0,0,0.2)",
  hover: "inset 0px 20px 20px rgba(0,0,0,0.1)",
};

// Theme UI spec: https://theme-ui.com/customize
export const theme = {
  breakpoints,
  colors,
  shadows,
  space,
  ...typography,
  ...variants,
};
