import { BORDER_RADIUS, COLORS } from "@constants/theme.constant";
import { Box, Typography, styled } from "@mui/material";

export const StyledProductCard = styled(Box)(({ theme }) => ({
  border: `1px solid ${COLORS.BORDER}`,
  padding: "24px 24px 16px 24px",
  borderRadius: BORDER_RADIUS.SMALL,
}));

export const StyledAvailable = styled(Typography)(({ theme }) => ({
  color: "white",
  border: "1px solid",
  borderRadius: "16px",
  display: "inline-block",
  fontSize: "14px",
  padding: "0 21px",
}));
