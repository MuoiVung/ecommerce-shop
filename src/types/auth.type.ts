import { UserType } from "./authApi.type";

export type AuthStateType = {
  user: UserType | null;
  accessToken: string | null;
  refreshToken: string | null;
  deviceId: string | null;
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

export type RoleType = "admin" | "user";
