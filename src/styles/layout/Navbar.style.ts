import {
  AppBar,
  Button,
  InputBase,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";

export {};

export const NavigateContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
}));

export const NavigateButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.brown["700"],
  fontSize: 16,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginTop: 13,
  backgroundColor: theme.palette.common.white,
}));

export const NavigateToolbar = styled(Toolbar)(({ theme }) => ({
  padding: "10px 0",
  backgroundColor: theme.palette.common.brown["300"],
}));

export const MainToolbar = styled(Toolbar)(({ theme }) => ({
  padding: "36px 0",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}));
