import { AuthStateType } from "@typess/auth.type";
import {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@typess/authApi.type";
import apiSlice from ".";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthStateType, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: {
          ...credentials,
          deviceId: `deviceId-${credentials.email}`,
        },
      }),

      transformResponse: (response: LoginResponse) => {
        const { user, tokens, deviceId } = response?.data;

        const transformResponse: AuthStateType = {
          user,
          accessToken: tokens.access.token,
          refreshToken: tokens.refresh.token,
          deviceId,
        };

        return transformResponse;
      },
    }),
    signup: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (body) => ({
        url: "auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useResetPasswordMutation } =
  authApiSlice;
