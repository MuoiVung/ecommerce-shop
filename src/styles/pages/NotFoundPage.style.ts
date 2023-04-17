import { Container, Stack, styled } from "@mui/material";

export const NotFoundPageContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",

  "& .title": {
    fontWeight: "700",
    fontSize: "8rem",
  },

  "& .subTitle": {
    fontWeight: "500",
    fontSize: "1.5rem",
  },

  "& .backHomeBtn": {
    marginTop: "1.75rem",
  },
}));
