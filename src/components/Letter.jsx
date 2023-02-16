import styled from "styled-components";

const LetterStyle = styled.button(({ disabled, theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "3px",
  border: `1px solid ${theme.wordBtnBorder}`,
  color: disabled ? theme.wordBtnDisabledText : theme.wordBtnText,
  background: disabled ? theme.wordBtnDisabledBg : theme.wordBtnBg,
  fontWeight: "700",
  cursor: !disabled && "pointer",
  transition: "filter 0.3s ease",
  ":hover": !disabled && {
    filter: "brightness(0.9)",
  },
  ":active": !disabled && {
    filter: "brightness(0.85)",
  },
}));

export default function Letter({ children, onClick, disabled = true }) {
  return (
    <LetterStyle disabled={disabled} onClick={onClick}>
      {children.toUpperCase()}
    </LetterStyle>
  );
}
