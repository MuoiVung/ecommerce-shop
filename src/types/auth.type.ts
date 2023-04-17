export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  contact: null;
  avatar: null;
  role: string;
  isEmailVerified: boolean;
  isContactVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AuthStateType = {
  user: UserType | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export type CredentialType = {
  authState: AuthStateType;
  isRemember: boolean;
};

export interface RefreshTokenResponse {
  access: TokenDataType;
  refresh: TokenDataType;
}

export interface TokenDataType {
  token: string;
  expires: string;
}
