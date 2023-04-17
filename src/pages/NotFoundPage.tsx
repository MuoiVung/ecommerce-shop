import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import { Button, Stack, Typography } from "@mui/material";
import { NotFoundPageContainer } from "@styles/pages/NotFoundPage.style";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Typography className="title" color="primary">
        404
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center" mb="0.5rem">
        <WarningOutlinedIcon />
        <Typography className="subTitle">Oops! Page not found!</Typography>
      </Stack>
      <Typography>The page you requested was not found.</Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        className="backHomeBtn"
        size="large"
      >
        Back to Home
      </Button>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
