import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global/globalStyles";
import ResetStyles from "./global/resetStyles";
import theme from "./theme/themes";
import Game from "./components/Game";

const AppStyle = styled.div(({ theme }) => ({
  background: theme.bgPrimary,
  minHeight: "100vh",
  maxWidth: "1025px",
  margin: "0 auto",
  padding: "40px 24px",
  display: "flex",
  justifyContent: "center",
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <AppStyle>
        <Game />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
