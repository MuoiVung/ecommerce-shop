import { RoleType } from "./auth.type";

// LOGIN
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: LoginData;
}

export interface LoginData {
  user: UserType;
  tokens: TokensType;
  deviceId: string;
}

export interface TokensType {
  access: TokenType;
  refresh: TokenType;
}

export interface TokenType {
  token: string;
  expires: string;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  contact: null;
  avatar: null;
  role: RoleType;
  isEmailVerified: boolean;
  isContactVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// REGISTER
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  message: string;
  data: {
    user: UserType;
  };
}

// FORGOT PASSWORD
export interface ForgotPasswordRequest {
  email: string;
}
