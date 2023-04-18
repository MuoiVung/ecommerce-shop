import { InputBase, Stack, styled } from "@mui/material";

export const SearchContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  padding: "0 12px",
  borderRadius: 5,
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: 12,
}));
