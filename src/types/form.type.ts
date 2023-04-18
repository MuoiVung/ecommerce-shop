export {};

export type RegisterFormType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type ForgotPasswordType = {
  email: string;
  code: string;
};
