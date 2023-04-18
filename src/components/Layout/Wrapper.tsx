import { Box } from "@mui/system";
import { selectCurrentUser } from "@store/features/authSlice";
import { useTypedSelector } from "@store/index";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Stack } from "@mui/material";
import { AuthenModal } from "@components/Shared/AuthenModal";

export const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  const user = useTypedSelector(selectCurrentUser);

  return (
    <Box component="main">
      {user?.role === "admin" && (
        <>
          <Sidebar />
          {children}
        </>
      )}
      {user?.role === "user" && (
        <>
          <Navbar />
          <Box mt={120}>{children}</Box>
        </>
      )}
    </Box>
  );
};
