import styled from "styled-components";
import Letter from "./Letter";

const GuessFormStyle = styled.form((_) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
}));

const GuessPtagStyle = styled.p(({ theme }) => ({
  color: theme.textPrimary,
  fontSize: "20px",
}));

const GuessInputStyle = styled.input(({ theme }) => ({
  flex: "1",
  height: "40px",
  maxWidth: "350px",
  background: theme.guessInputBg,
  border: `1px solid ${theme.guessInputBorder}`,
  borderRadius: "3px",
  boxShadow: `${theme.guessInputShadow}`,
  outline: "none",
  padding: "0 12px",
  color: theme.textPrimary,
  "::placeholder": {
    color: theme.textPrimary,
    opacity: "0.35",
  },
}));

export default function Guess({ onSubmit }) {
  return (
    <GuessFormStyle
      onSubmit={(e) => {
        e.preventDefault();
        const inputValue = e.target["guess-input"].value;
        if (onSubmit) {
          onSubmit(inputValue);
        }
      }}>
      <GuessPtagStyle>Já sei a palavra!</GuessPtagStyle>
      <GuessInputStyle
        name="guess-input"
        type="text"
        placeholder="Dê seu chute..."
      />
      <Letter width="100px" type="submit" disabled={false}>
        Chutar
      </Letter>
    </GuessFormStyle>
  );
}
