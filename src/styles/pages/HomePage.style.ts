import styled from "@emotion/styled";
import { Box, Button, Stack } from "@mui/material";

export const StyledFreeShippingCard = styled(Stack)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "5px",
  borderColor: "#DFD8D8",
  backgroundColor: "#F8F8F8",
  padding: "19px 0",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledShowMoreButton = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  color: "black",
  fontSize: 16,
}));
