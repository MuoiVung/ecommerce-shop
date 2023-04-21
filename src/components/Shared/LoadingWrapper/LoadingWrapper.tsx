import { Container } from "@mui/material";
import { disableLoading, enableLoading } from "@store/features/loadingSlice";
import { useAppDispatch } from "@store/index";
import { ReactNode, useEffect } from "react";

type LoadingWrapperProps = {
  isLoading: boolean;
  children: ReactNode;
};

export const LoadingWrapper = ({
  isLoading,
  children,
}: LoadingWrapperProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(enableLoading());
    } else {
      dispatch(disableLoading());
    }
  }, [isLoading]);

  return <Container>{children}</Container>;
};
