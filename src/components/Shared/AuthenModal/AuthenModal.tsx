import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import {
  BrandContainer,
  CloseButton,
  ContentContainer,
  ModalContent,
  StyledBrand,
} from "@styles/shared/AuthenModal.style";
import { useState } from "react";
import { CustomForm } from "../CustomForm";
import { RegisterFormType } from "@typess/form.type";
import {
  registerFields,
  registerFormDefaultValues,
  registerSchema,
} from "./config";
import useAuthentication from "../../../hooks/useAuthentication";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AuthenModal = ({ open, onClose }: Props) => {
  const [type, setType] = useState<"register" | "login" | "forgot">();

  const { handleRegister } = useAuthentication();

  const submitForm = (data: any) => {
    console.log(data);
  };

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
            <Typography variant="h4">welcome to shop app</Typography>
            <CustomForm<RegisterFormType>
              defaultValues={registerFormDefaultValues}
              onSubmitForm={submitForm}
              fields={registerFields}
              validationSchema={registerSchema}
            >
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </CustomForm>

            <CloseButton variant="outlined" onClick={onClose}>
              X
            </CloseButton>
          </ContentContainer>
        </Stack>
      </ModalContent>
    </Modal>
  );
};
