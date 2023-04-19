import { Wrapper } from "@components/Layout/Wrapper";
import { PATH } from "@constants/route.constant";
import { selectCurrentUser } from "@store/features/authSlice";
import { useTypedSelector } from "@store/index";
import { RoleType } from "@typess/auth.type";
import { Navigate, Outlet } from "react-router-dom";

type RequireAuthProps = {
  allowedRoles?: RoleType[];
};

export const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const user = useTypedSelector(selectCurrentUser);

  return user?.role && allowedRoles?.includes(user.role) ? (
    <Wrapper>
      <Outlet />
    </Wrapper>
  ) : (
    <Navigate to={PATH.NOT_FOUND} replace />
  );
};
