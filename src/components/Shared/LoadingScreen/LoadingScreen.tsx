import { Backdrop, CircularProgress, Typography } from "@mui/material";

const LoadingScreen = () => {
  return (
    <>
      <Backdrop
        open={true}
        sx={{
          zIndex: 9999,
          color: "primary",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h5" sx={{ ml: "12px", color: "primary" }}>
          Wait a minute...
        </Typography>
      </Backdrop>
      <CircularProgress style={{ display: "none" }} />
    </>
  );
};

export { LoadingScreen };
