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

import { RequireAuth } from "@components/Routes/RequireAuth";
import { ROLE } from "@constants/auth.constant";
import { AdminPage } from "@pages/AdminPage";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import { NavbarWrapper } from "@components/Layout/NavbarWrapper";
import { ProductDetailPage } from "@pages/ProductDetailPage";
import { ShoppingCart } from "@mui/icons-material";
import { CheckoutPage } from "@pages/CheckoutPage";

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

      {/* ADMIN ROUTES */}
      <Route element={<RequireAuth allowedRole="admin" />}>
        <Route path={PATH.ADMIN} element={<AdminPage />} />
      </Route>

      {/* USER ROUTES */}
      <Route element={<RequireAuth allowedRole="user" />}>
        <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
        <Route path={PATH.SHOPPING_CART} element={<CheckoutPage />} />
      </Route>

      {/* ERROR */}
      <Route path={PATH.ALL_ROUTES} element={<NotFoundPage />} />
    </Routes>
  );
};

// layout user: navbar + content screen
// layout admin: sidebar + content screen
// ADMIN => NO, !== ADMIN => OK
