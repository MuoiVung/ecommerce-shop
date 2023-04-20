import { Backdrop, CircularProgress } from "@mui/material";
import { memo } from "react";

type Props = {
  isLoading: boolean;
};

export const CircularSpinner = memo(({ isLoading }: Props) => {
  return (
    <Backdrop
      open={isLoading}
      sx={{
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
});
