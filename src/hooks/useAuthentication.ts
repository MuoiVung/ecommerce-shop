import { useCallback, useState } from "react";

type AuthenModalType = "register" | "login" | "forgot";

const useAuthentication = () => {
  const [modalType, setModalType] = useState<AuthenModalType>("login");

  const handleSwitchModal = useCallback((newModalType: AuthenModalType) => {
    setModalType(newModalType);
  }, []);

  const handleRegister = useCallback(() => {}, []);

  const handleLogin = useCallback(() => {}, []);

  const handleForgotPassword = useCallback(() => {}, []);

  const handleGetCode = useCallback(() => {}, []);

  return {
    modalType,
    handleRegister,
    handleLogin,
    handleForgotPassword,
    handleSwitchModal,
    handleGetCode,
  };
};

export default useAuthentication;
