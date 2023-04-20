import { Box } from "@mui/system";
import { selectCurrentUser } from "@store/features/authSlice";
import { useTypedSelector } from "@store/index";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

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
          <Box mt="210px">{children}</Box>
        </>
      )}
    </Box>
  );
};
