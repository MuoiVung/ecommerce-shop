import { AuthenModal } from "@components/Shared/AuthenModal";
import { PATH } from "@constants/route.constant";
import { FONT_FAMILY } from "@constants/theme.constant";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { selectDeviceId } from "@store/features/authSlice";
import { useTypedSelector } from "@store/index";
import {
  MainToolbar,
  NavigateButton,
  NavigateContainer,
  NavigateToolbar,
  StyledAppBar,
} from "@styles/layout/Navbar.style";
import { Link } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import useModal from "../../hooks/useModal";
import { SearchNavbar } from "./SearchNavbar";

export const Navbar = () => {
  const { handleCloseModal, showModal, handleOpenModal } = useModal();

  const deviceId = useTypedSelector(selectDeviceId);

  return (
    <Box>
      <StyledAppBar position="fixed">
        <NavigateToolbar>
          <Container>
            <NavigateContainer direction="row" spacing={1}>
              <NavigateButton>About Us</NavigateButton>
              <NavigateButton>Contacts</NavigateButton>
              <NavigateButton>Store</NavigateButton>
              <NavigateButton>Track Orders</NavigateButton>
            </NavigateContainer>
          </Container>
        </NavigateToolbar>
        <MainToolbar>
          <Container>
            <Stack direction="row" spacing={2} alignItems="center" flex={1}>
              <Button
                component={Link}
                to={PATH.HOME}
                sx={{
                  color: "black",
                }}
              >
                <Typography
                  fontFamily={FONT_FAMILY.RED_ROSE}
                  variant="h2"
                  textTransform="uppercase"
                >
                  Shop App
                </Typography>
              </Button>
              <SearchNavbar />
              {!deviceId && (
                <IconButton onClick={handleOpenModal}>
                  <img
                    src={require("../../assets/imgs/cart.png")}
                    width={40}
                    height={40}
                  />
                </IconButton>
              )}

              {deviceId && (
                <IconButton component={Link} to={PATH.SHOPPING_CART}>
                  <img
                    src={require("../../assets/imgs/cart.png")}
                    width={40}
                    height={40}
                  />
                </IconButton>
              )}
              {!deviceId && (
                <IconButton onClick={handleOpenModal}>
                  <img
                    src={require("../../assets/imgs/user.png")}
                    width={40}
                    height={40}
                  />
                </IconButton>
              )}
              {deviceId && (
                <IconButton component={Link} to={PATH.USER_DETAIL}>
                  <img
                    src={require("../../assets/imgs/user.png")}
                    width={40}
                    height={40}
                  />
                </IconButton>
              )}
            </Stack>
          </Container>
        </MainToolbar>
      </StyledAppBar>
      {showModal && <AuthenModal open={showModal} onClose={handleCloseModal} />}
    </Box>
  );
};
