const COLORS = {
  black: "#000",
  darkgray: "#a9a9a9",
  dimgray: "#696969",
  white: "#FFF",
  lightWhite: "#FAFAFC",
  whitesmoke: "#E3E9E8",
  lightgreen: "#74E291",
  primary: "#141321",
  hightlight: "#3491AF",
  variant: "#222D3B",
};
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};
export { COLORS, SIZES, SHADOWS };
