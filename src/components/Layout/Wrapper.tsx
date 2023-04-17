import { Box } from "@mui/system";
import { selectCurrentUser } from "@store/features/authSlice";
import { useTypedSelector } from "@store/index";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  const user = useTypedSelector(selectCurrentUser);

  return (
    <Box component="main">
      {user?.role === "admin" && <Sidebar />}
      {user?.role === "user" && <Navbar />}
      {children}
    </Box>
  );
};
