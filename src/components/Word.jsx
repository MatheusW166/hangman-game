import styled from "styled-components";

const WordStyle = styled.button(({ disabled, theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "3px",
  border: `1px solid ${theme.wordBtnBorder}`,
  color: disabled ? theme.wordBtnDisabledText : theme.wordBtnText,
  background: disabled ? theme.wordBtnDisabledBg : theme.wordBtnBg,
  fontWeight: "700",
  cursor: !disabled && "pointer",
  transition: "background 0.3s ease",
  ":hover": !disabled && {
    background: "#c3d6e3",
  },
  ":active": !disabled && {
    background: "#b2c6d4",
  },
}));

export default function Word({ children, onClick, disabled = true }) {
  return (
    <WordStyle disabled={disabled} onClick={onClick}>
      {children.toUpperCase()}
    </WordStyle>
  );
}
