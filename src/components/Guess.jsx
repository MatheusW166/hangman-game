import styled from "styled-components";
import Letter from "./Letter";

const GuessFormStyle = styled.form(({ disabled }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  opacity: disabled && "0.35",
  flexWrap: "wrap",
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
  ":disabled": {
    boxShadow: "none",
  },
}));

export default function Guess({ onSubmit, disabled = true }) {
  return (
    <GuessFormStyle
      disabled={disabled}
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.target["guess-input"];
        if (onSubmit) {
          onSubmit(input, input.value);
        }
      }}>
      <GuessPtagStyle>Já sei a palavra!</GuessPtagStyle>
      <GuessInputStyle
        data-test="guess-input"
        name="guess-input"
        type="text"
        placeholder="Dê seu chute..."
        disabled={disabled}
      />
      <Letter
        dataTest="guess-button"
        width="100px"
        type="submit"
        disabled={disabled}>
        Chutar
      </Letter>
    </GuessFormStyle>
  );
}
