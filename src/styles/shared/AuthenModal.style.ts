import { FONT_FAMILY } from "@constants/theme.constant";
import { Box, Button, Typography, styled } from "@mui/material";

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",
  overflow: "hidden",
  minWidth: "832px",
}));

export const BrandContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "68px 46px 48px 46px",
  backgroundColor: theme.palette.primary["400"],
}));

export const StyledBrand = styled("img")(({ theme }) => ({
  width: "133px",
  height: "150px",
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  padding: "68px 46px 48px 46px",
  position: "relative",
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  fontFamily: FONT_FAMILY.RED_ROSE,
  borderRadius: 999,
  borderColor: "#E4E4E4",
  color: "#626060",
  display: "block",
  minWidth: 32,
  padding: "4px 8px",
}));

export const SwitchModalButton = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: theme.palette.grey["600"],
  marginTop: "13px",
  textTransform: "capitalize",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const StyledNoteTypo = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.grey["500"],
}));
