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
      <WordStyle data-test="word">
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
    return (
      <WordStyle data-test="word" winner>
        {word.split("").join(" ")}
      </WordStyle>
    );
  }

  return (
    <WordStyle data-test="word" loser>
      {word.split("").join(" ")}
    </WordStyle>
  );
}
