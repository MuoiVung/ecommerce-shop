import { toast } from "react-toastify";
import { disableLoading, enableLoading } from "@store/features/loadingSlice";
import { useAppDispatch } from "@store/index";

const useLoading = () => {
  const dispatch = useAppDispatch();

  const waitFunctionCallWithLoading = (
    cb: () => Promise<void>,
    successMessage?: string,
    errorMessage?: string,
    needThrowError?: boolean
  ) => {
    return async () => {
      try {
        dispatch(enableLoading());
        await cb();
        if (successMessage) {
          toast.success(successMessage);
        }
      } catch (error) {
        let errorMsg = "Something went wrong";
        if (errorMessage) {
          errorMsg = errorMessage;
        }

        toast.error(errorMessage);

        if (needThrowError) {
          throw new Error(errorMsg);
        }
      } finally {
        dispatch(disableLoading());
      }
    };
  };

  return { waitFunctionCallWithLoading };
};

export default useLoading;
