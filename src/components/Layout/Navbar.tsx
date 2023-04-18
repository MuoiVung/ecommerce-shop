import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  MainToolbar,
  NavigateButton,
  NavigateContainer,
  NavigateToolbar,
  StyledAppBar,
} from "@styles/layout/Navbar.style";
import { SearchNavbar } from "./SearchNavbar";
import { AuthenModal } from "@components/Shared/AuthenModal";
import useModal from "../../hooks/useModal";

export const Navbar = () => {
  const { showModal, handleCloseModal, handleOpenModal } = useModal();

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
              <Typography variant="h2" textTransform="uppercase">
                Shop App
              </Typography>
              <SearchNavbar />
              <IconButton onClick={handleOpenModal}>
                <img
                  src={require("../../assets/imgs/cart.png")}
                  width={40}
                  height={40}
                />
              </IconButton>
              <IconButton onClick={handleOpenModal}>
                <img
                  src={require("../../assets/imgs/user.png")}
                  width={40}
                  height={40}
                />
              </IconButton>
            </Stack>
          </Container>
        </MainToolbar>
      </StyledAppBar>
      <AuthenModal open={showModal} onClose={handleCloseModal} />
    </Box>
  );
};
