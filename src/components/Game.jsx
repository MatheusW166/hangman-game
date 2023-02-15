import styled from "styled-components";
import Word from "./Word";

const words = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const GameStyle = styled.div(({ theme }) => ({}));

export default function Game() {
  return (
    <GameStyle>
      {words.map((word) => (
        <Word key={word} onClick={() => console.log(word)}>
          {word}
        </Word>
      ))}
    </GameStyle>
  );
}
