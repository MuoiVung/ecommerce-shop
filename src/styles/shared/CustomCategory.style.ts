import { COLORS } from "@constants/theme.constant";
import { List, ListItemText, styled } from "@mui/material";

export const StyledCategoryList = styled(List)(({ theme }) => ({
  color: "white",
  backgroundColor: COLORS.BLUE,
  height: "615px",
  "& .Mui-selected": {
    backgroundColor: COLORS.YELLOW_700,
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: COLORS.YELLOW_700,
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "22px",
    fontWeight: 700,
    textTransform: "capitalize",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
