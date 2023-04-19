import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import {
  BrandContainer,
  CloseButton,
  ContentContainer,
  ModalContent,
  StyledBrand,
  SwitchModalButton,
} from "@styles/shared/AuthenModal.style";
import {
  ForgotPasswordFormType,
  LoginFormType,
  RegisterFormType,
} from "@typess/form.type";
import useAuthentication from "../../../hooks/useAuthentication";
import { CustomForm } from "../CustomForm";
import {
  forgotPasswordDefaultValues,
  forgotPasswordFields,
  forgotPasswordSchema,
  loginFields,
  loginFormDefaultValues,
  loginSchema,
  registerFields,
  registerFormDefaultValues,
  registerSchema,
} from "./config";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AuthenModal = ({ open, onClose }: Props) => {
  const {
    modalType,
    handleSwitchModal,
    handleRegister,
    handleLogin,
    handleForgotPassword,
    handleGetCode,
  } = useAuthentication();

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Stack direction="row">
          <BrandContainer flex={1}>
            <Typography variant="h1" gutterBottom>
              Shop App
            </Typography>
            <Box>
              <StyledBrand src={require("../../../assets/imgs/brand.png")} />
            </Box>
          </BrandContainer>
          <ContentContainer flex={1}>
            {/* CLOSE BUTTON */}
            {/* FORM */}
            <Typography variant="h4" gutterBottom>
              welcome to shop app
            </Typography>

            {modalType === "register" && (
              <CustomForm<RegisterFormType>
                defaultValues={registerFormDefaultValues}
                onSubmitForm={handleRegister}
                fields={registerFields}
                validationSchema={registerSchema}
              >
                <Button type="submit" variant="contained" fullWidth>
                  Register
                </Button>

                <SwitchModalButton
                  onClick={() => handleSwitchModal("login")}
                  fullWidth
                >
                  Login
                </SwitchModalButton>
              </CustomForm>
            )}

            {modalType === "login" && (
              <CustomForm<LoginFormType>
                defaultValues={loginFormDefaultValues}
                onSubmitForm={handleLogin}
                fields={loginFields}
                validationSchema={loginSchema}
                onClickIcon={() => handleSwitchModal("forgot")}
              >
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>

                <SwitchModalButton
                  onClick={() => handleSwitchModal("register")}
                  fullWidth
                >
                  Create An Account
                </SwitchModalButton>
              </CustomForm>
            )}

            {modalType === "forgot" && (
              <CustomForm<ForgotPasswordFormType>
                defaultValues={forgotPasswordDefaultValues}
                onSubmitForm={handleForgotPassword}
                fields={forgotPasswordFields}
                validationSchema={forgotPasswordSchema}
                onClickIcon={handleGetCode}
              >
                <Button type="submit" variant="contained" fullWidth>
                  Recover Password
                </Button>

                <SwitchModalButton
                  onClick={() => handleSwitchModal("login")}
                  fullWidth
                >
                  Login
                </SwitchModalButton>
              </CustomForm>
            )}

            <CloseButton variant="outlined" onClick={onClose}>
              X
            </CloseButton>
          </ContentContainer>
        </Stack>
      </ModalContent>
    </Modal>
  );
};
