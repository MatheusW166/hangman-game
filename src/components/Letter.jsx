import styled from "styled-components";

const LetterStyle = styled.button(
  ({ disabled, theme, width = "40px", height = "40px" }) => ({
    width: width,
    height: height,
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
    textTransform: "capitalize",
  })
);

export default function Letter({
  children,
  onClick,
  disabled = true,
  width,
  height,
  type,
  dataTest = "letter",
}) {
  return (
    <LetterStyle
      data-test={dataTest}
      width={width}
      height={height}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </LetterStyle>
  );
}
