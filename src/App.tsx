import { Header } from "@components/Header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "@styles/theme.style";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
