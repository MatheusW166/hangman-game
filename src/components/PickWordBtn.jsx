import styled from "styled-components";

const PickWordStyle = styled.button(({ theme }) => ({
  width: "200px",
  height: "60px",
  margin: "20px 0",
  fontSize: "20px",
  fontWeight: "700",
  cursor: "pointer",
  borderRadius: "8px",
  color: theme.pickWordBtnText,
  background: theme.pickWordBtnBg,
  transition: "filter 0.3s ease",
  ":hover": {
    filter: "brightness(0.9)",
  },
  ":active": {
    filter: "brightness(0.85)",
  },
}));

export default function PickWordBtn({ children, onClick }) {
  return (
    <PickWordStyle data-test="choose-word" onClick={onClick}>
      {children}
    </PickWordStyle>
  );
}
