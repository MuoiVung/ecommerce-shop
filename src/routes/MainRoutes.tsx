import { LoadingScreen } from "@components/Shared/LoadingScreen";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PATH } from "@constants/route.constant";
import {
  initCredentials,
  selectCurrentToken,
  selectCurrentUser,
} from "@store/features/authSlice";
import { useAppDispatch, useTypedSelector } from "@store/index";
import { AuthStateType } from "@typess/auth.type";
import { decryptData, sessionDecryptData } from "@utils/CustomCryptoJS.util";

import { NavbarWrapper } from "@components/Layout/NavbarWrapper";
import { RequireAuth } from "@components/Routes/RequireAuth";
import { ROLE } from "@constants/auth.constant";
import { ShoppingCart } from "@mui/icons-material";
import { AdminPage } from "@pages/AdminPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import { ProductDetailPage } from "@pages/ProductDetailPage";
import UserDetailPage from "@pages/UserDetailPage";

export const MainRoutes = () => {
  const user = useTypedSelector(selectCurrentUser);
  const token = useTypedSelector(selectCurrentToken);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth: AuthStateType | null =
      decryptData("auth") || sessionDecryptData("auth");

    if (!auth) {
      setIsLoading(true);

      return;
    }

    setIsLoading(true);

    dispatch(initCredentials(auth));
  }, [dispatch]);

  if (!isLoading) {
    return <LoadingScreen />;
  }

  let initPath = PATH.HOME;

  if (token && user?.role.includes(ROLE.ADMIN)) {
    initPath = PATH.ADMIN;
  } else if (token) {
    initPath = PATH.HOME;
  }

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Navigate to={initPath} />} />
      <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />

      {/* PUBLIC ROUTES WITH NAVBAR */}
      <Route path="/" element={<NavbarWrapper />}>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.PRODUCT_DETAIL} element={<ProductDetailPage />} />
      </Route>

      {/* ADMIN & USER ROUTES */}
      <Route element={<RequireAuth allowedRoles={["admin", "user"]} />}>
        <Route path={PATH.USER_DETAIL} element={<UserDetailPage />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<RequireAuth allowedRoles={["admin"]} />}>
        <Route path={PATH.ADMIN} element={<AdminPage />} />
      </Route>

      {/* USER ROUTES */}
      <Route element={<RequireAuth allowedRoles={["user"]} />}>
        <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
        <Route path={PATH.SHOPPING_CART} element={<CheckoutPage />} />
      </Route>

      {/* ERROR */}
      <Route path={PATH.ALL_ROUTES} element={<NotFoundPage />} />
    </Routes>
  );
};
