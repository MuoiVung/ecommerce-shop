import { RegisterFormType } from "@typess/form.type";
import * as yup from "yup";

export const registerFormDefaultValues: RegisterFormType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const registerFields = [
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
