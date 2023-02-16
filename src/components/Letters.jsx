import styled from "styled-components";
import Letter from "./Letter";

const LettersStyle = styled.div((_) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 40px)",
  gap: "12px",
  placeContent: "center",
  width: "min(100%, 664px)",
}));

export default function Letters({
  isGameRunning = false,
  letters,
  lettersPicked,
  onClick,
}) {
  const isPicked = (letter) => letter in lettersPicked;
  const isEnabled = (letter) => isGameRunning && !isPicked(letter);

  return (
    <LettersStyle>
      {letters.map((letter) => (
        <Letter
          disabled={!isEnabled(letter)}
          key={letter}
          onClick={() => onClick(letter)}>
          {letter}
        </Letter>
      ))}
    </LettersStyle>
  );
}
