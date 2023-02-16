import styled from "styled-components";
import { alfabeto } from "../palavras";
import Word from "./Word";

const GameStyle = styled.div(({ theme }) => ({}));

export default function Game() {
  return (
    <GameStyle>
      {alfabeto.map((word) => (
        <Word key={word} onClick={() => console.log(word)}>
          {word}
        </Word>
      ))}
    </GameStyle>
  );
}
