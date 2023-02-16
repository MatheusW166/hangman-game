import styled from "styled-components";
import {} from "../helpers/string.extensions";

const WordStyle = styled.p(({ theme, winner, loser }) => {
  let color = theme.textPrimary;
  if (winner) {
    color = theme.textWinner;
  }
  if (loser) {
    color = theme.textLoser;
  }
  return {
    fontSize: "50px",
    lineHeight: "68px",
    color: color,
  };
});

export default function Word({
  word,
  lettersPicked,
  endGame = false,
  isWinner,
}) {
  if (!word) return <></>;

  if (!endGame) {
    return (
      <WordStyle>
        {word
          .split("")
          .map((letter) =>
            letter?.getLetterBase() in lettersPicked ? letter : "_"
          )
          .join(" ")}
      </WordStyle>
    );
  }

  if (isWinner) {
    return <WordStyle winner>{word.split("").join(" ")}</WordStyle>;
  }

  return <WordStyle loser>{word.split("").join(" ")}</WordStyle>;
}
