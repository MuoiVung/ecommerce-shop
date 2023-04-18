import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const NavbarWrapper = () => {
  return (
    <Box component="main">
      <Navbar />
      <Box mt="250px">
        <Outlet />
      </Box>
    </Box>
  );
};
