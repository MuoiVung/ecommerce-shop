import {
  COLORS,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants/theme.constant";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.YELLOW,
      "400": COLORS.YELLOW_400,
      "600": COLORS.YELLOW_600,
      contrastText: COLORS.BLACK,
    },
    text: {
      primary: COLORS.BLACK,
      secondary: COLORS.GREY,
    },
    grey: {
      "300": COLORS.GREY_300,
      "400": COLORS.GREY,
      "500": COLORS.GREY_500,
      "600": COLORS.GREY_600,
      "700": COLORS.GREY_700,
      "800": COLORS.GREY_800,
      "900": COLORS.GREY_900,
    },
    common: {
      brown: {
        "300": COLORS.BROWN_300,
        "700": COLORS.BROWN_700,
      },
    },
  },
  typography: {
    fontSize: 16,
    button: {
      fontSize: "1.5rem",
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: LINE_HEIGHT.NORMAL,
      textTransform: "capitalize",
    },
    h1: {
      fontSize: "4.25rem",
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: LINE_HEIGHT.NORMAL,
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: LINE_HEIGHT.TITLE,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: LINE_HEIGHT.NORMAL,
      textTransform: "capitalize",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          "&:hover": {
            backgroundColor: COLORS.WHITE,
          },
          "&.Mui-focused": {
            backgroundColor: COLORS.WHITE,
          },
        },
      },
    },
  },
});

export default theme;
