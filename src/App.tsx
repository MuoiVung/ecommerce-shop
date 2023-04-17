import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { MainRoutes } from "@routes/MainRoutes";
import theme from "@styles/theme.style";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <MainRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
