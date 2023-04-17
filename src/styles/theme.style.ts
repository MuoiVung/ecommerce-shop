import { COLORS, FONT_WEIGHT, LINE_HEIGHT } from "../constants/theme.constant";
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
      "500": COLORS.GREY,
      "600": COLORS.GREY_600,
      "700": COLORS.GREY_700,
    },
  },
  typography: {
    fontSize: 16,
    button: {
      fontSize: "1.5rem",
      fontWeight: FONT_WEIGHT.BOLD,
      lineHeight: LINE_HEIGHT.NORMAL,
    },
    h1: {
      fontSize: "4.25rem",
      fontWeight: LINE_HEIGHT.NORMAL,
      lineHeight: FONT_WEIGHT.BOLD,
    },
  },
});

export default theme;
