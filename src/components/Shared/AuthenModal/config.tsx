import {
  ForgotPasswordFormType,
  LoginFormType,
  RegisterFormType,
} from "@typess/form.type";
import * as yup from "yup";
import { FormFieldProps } from "../CustomForm/CustomForm";
import { Typography } from "@mui/material";
import { StyledNoteTypo } from "@styles/shared/AuthenModal.style";

export const FORM_TYPE = {
  REGISTER: "register",
  LOGIN: "login",
  FORGOT: "forgot",
};

// REGISTER
export const registerFormDefaultValues: RegisterFormType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const registerFields: FormFieldProps[] = [
  { name: "username", label: "User Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
  },
];

export const registerSchema: yup.ObjectSchema<RegisterFormType> = yup
  .object({
    username: yup
      .string()
      .max(100, "Name must be less than 100 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Email is invalid")
      .max(100, "Email must be less than 100 characters")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("New password is required")
      .min(6, "Password must be at least 6 characters")
      .oneOf([yup.ref("password")], "New passwords do not match"),
  })
  .required();

//   LOGIN
export const loginFormDefaultValues: LoginFormType = {
  email: "",
  password: "",
};

export const loginFields: FormFieldProps[] = [
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    inputAdornment: <StyledNoteTypo>Forgot?</StyledNoteTypo>,
  },
];

export const loginSchema: yup.ObjectSchema<LoginFormType> = yup
  .object({
    email: yup
      .string()
      .email("Email is invalid")
      .max(100, "Email must be less than 100 characters")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required();

//   FORGOT PASSWORD
export const forgotPasswordDefaultValues: ForgotPasswordFormType = {
  email: "",
  code: "",
};

export const forgotPasswordFields: FormFieldProps[] = [
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "code",
    label: "Code",
    type: "text",
    required: true,
    inputAdornment: <StyledNoteTypo>Send Code</StyledNoteTypo>,
  },
];

export const forgotPasswordSchema: yup.ObjectSchema<ForgotPasswordFormType> =
  yup
    .object({
      email: yup
        .string()
        .email("Email is invalid")
        .max(100, "Email must be less than 100 characters")
        .required("Email is required"),
      code: yup.string().required("Code is required"),
    })
    .required();
