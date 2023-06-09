import { toast } from "react-toastify";

import {
  useLoginMutation,
  useResetPasswordMutation,
  useSignupMutation,
} from "@api/auth.api";
import { setCredentials } from "@store/features/authSlice";
import { disableLoading, enableLoading } from "@store/features/loadingSlice";
import { useAppDispatch } from "@store/index";
import {
  ForgotPasswordFormType,
  LoginFormType,
  RegisterFormType,
} from "@typess/form.type";
import { useCallback, useState } from "react";

type AuthenModalType = "register" | "login" | "forgot";

type UseAuthenticationType = {
  onCloseModal: () => void;
};

const useAuthentication = ({ onCloseModal }: UseAuthenticationType) => {
  const [modalType, setModalType] = useState<AuthenModalType>("login");
  const [showAuthenModal, setShowAuthenModal] = useState(false);

  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const [register] = useSignupMutation();

  const [resetPassword] = useResetPasswordMutation();

  const handleSwitchModal = useCallback((newModalType: AuthenModalType) => {
    setModalType(newModalType);
  }, []);

  const handleOpenAuthenModal = useCallback(() => {
    setShowAuthenModal(true);
  }, []);

  const handleCloseAuthenModal = useCallback(() => {
    setShowAuthenModal(false);
  }, []);

  const handleRegister = useCallback(
    async (registerFormData: RegisterFormType) => {
      try {
        dispatch(enableLoading);
        await register({
          email: registerFormData.email,
          username: registerFormData.username,
          password: registerFormData.password,
        }).unwrap();

        toast.success("Register successfully!");
      } catch (error) {
        toast.error("Failed to Register!");
        throw new Error("Failed to Register!");
      } finally {
        dispatch(disableLoading);
      }
    },
    []
  );

  const handleLogin = useCallback(async (loginFormData: LoginFormType) => {
    try {
      dispatch(enableLoading);
      const result = await login(loginFormData).unwrap();
      handleCloseAuthenModal();

      dispatch(
        setCredentials({
          authState: result,
          isRemember: true,
        })
      );
      onCloseModal();
      toast.success("Login successfully!");
    } catch (error) {
      toast.error("Failed to Login!");
      throw new Error("Failed to Login!");
    } finally {
      dispatch(disableLoading);
    }
  }, []);

  const handleForgotPassword = useCallback(
    async (forgotPasswordFormData: ForgotPasswordFormType) => {
      try {
        console.log(forgotPasswordFormData);
        dispatch(enableLoading);
        toast.success("Already sent new password to your email!");

        await resetPassword(forgotPasswordFormData).unwrap();
      } catch (error) {
        toast.error("Failed to reset password!");
        throw new Error("Failed to reset password!");
      } finally {
        dispatch(disableLoading);
      }
    },

    []
  );

  const handleGetCode = useCallback(() => {}, []);

  return {
    modalType,
    handleRegister,
    handleLogin,
    handleForgotPassword,
    handleSwitchModal,
    handleGetCode,
    showAuthenModal,
    handleOpenAuthenModal,
    handleCloseAuthenModal,
  };
};

export default useAuthentication;
