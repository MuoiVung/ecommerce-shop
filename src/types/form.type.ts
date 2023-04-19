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

export type ForgotPasswordFormType = {
  email: string;
  code: string;
};
