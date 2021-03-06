import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ff9933",
  primaryBright: "#E89603",
  primaryDark: "#1D19FF",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#373AFF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#FFECCA",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#DDA238",
  textDisabled: "#666171",
  textSubtle: "#F9C76E",
  borderColor: "#B98A35",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ff9933",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#2A2A82",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#DDA238",
  textDisabled: "#666171",
  textSubtle: "#F9C76E",
  borderColor: "#B98A35",
  card: "#040248",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
