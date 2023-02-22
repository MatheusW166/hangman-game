import styled from "styled-components";
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
    <AppStyle>
      <Game />
    </AppStyle>
  );
}

export default App;
