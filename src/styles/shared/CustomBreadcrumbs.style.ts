import { COLORS } from "@constants/theme.constant";
import { Breadcrumbs, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: COLORS.BLACK_600,
  textDecoration: "none",
}));
