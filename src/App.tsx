import { CircularSpinner } from "@components/Shared/CircularSpinner";
import { selectLoadingStatus } from "@store/features/loadingSlice";
import { MainRoutes } from "./routes";
import { useTypedSelector } from "./store";

function App() {
  const globalLoading = useTypedSelector(selectLoadingStatus);

  return (
    <>
      <MainRoutes />
      <CircularSpinner isLoading={globalLoading} />
    </>
  );
}

export default App;
