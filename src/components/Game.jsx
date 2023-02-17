import styled from "styled-components";
import Letters from "./Letters";
import PickWordBtn from "./PickWordBtn";
import Hangman from "./Hangman";
import Word from "./Word";
import palavras, { alfabeto } from "../palavras";
import { useState } from "react";
import {} from "../helpers/string.extensions";
import Guess from "./Guess";

const GameStyle = styled.div((_) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "80px",
}));

const HangmanContainerStyle = styled.div((_) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const WordContainerStyle = styled.div((_) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
}));

export default function Game() {
  const [errorsCount, setErrorsCount] = useState(0);
  const [lettersPicked, setLettersPicked] = useState({});
  const [word, setWord] = useState(undefined);

  function resetGame() {
    setLettersPicked({});
    setErrorsCount(0);
  }

  function pickWord() {
    const randomWord = palavras[Math.floor(Math.random() * palavras.length)];
    setWord(randomWord);
    resetGame();
  }

  function handleError(letterPicked) {
    const letterBase = letterPicked?.getLetterBase();
    for (let w of word) {
      if (letterBase === w.getLetterBase()) {
        return;
      }
    }
    setErrorsCount(errorsCount + 1);
  }

  const hitsCount = () => {
    if (!word) return -1;
    const wordBase = word.getStringBase();
    let hitsCount = 0;
    Object.keys(lettersPicked).forEach(
      (l) => (hitsCount += wordBase.countOcurrence(l))
    );
    return hitsCount;
  };

  const isLoser = () => errorsCount === 6;
  const isWinner = () => !isLoser() && hitsCount() === word?.length;
  const endGame = () => isLoser() || isWinner();

  function pickLetter(letter) {
    const newObj = { ...lettersPicked };
    newObj[letter] = true;
    setLettersPicked(newObj);
    handleError(letter);
  }

  return (
    <GameStyle>
      <HangmanContainerStyle>
        <Hangman errorCount={errorsCount} />
        <WordContainerStyle>
          <PickWordBtn onClick={pickWord}>Escolher Palavra</PickWordBtn>
          <Word
            endGame={endGame()}
            isWinner={isWinner()}
            isLoser={isLoser()}
            word={word}
            lettersPicked={lettersPicked}
          />
        </WordContainerStyle>
      </HangmanContainerStyle>
      <Letters
        lettersPicked={lettersPicked}
        letters={alfabeto}
        onClick={pickLetter}
        isGameRunning={word !== undefined && !endGame()}
      />
      <Guess />
    </GameStyle>
  );
}
